import { Player } from './laba3CreatingPlayer';
import { Logs } from './laba3Logs';

export class Mage extends Player {
  abilities: string[] = ['Оглушение', 'Лечение'];
  private abilityUsed: boolean = false;
  public resetAbilityUsed(): void {
    this.abilityUsed = false;
  }
  useAbility(target: Player, logs: Logs): void {
    
    const ability = this.getSelectedAbility(); // Используем выбранную способность
    if (!ability) return;
  
    if (ability === 'Оглушение' && !this.abilityUsed) {
      target.setStunDuration(2); // Устанавливаем длительность оглушения на 2 хода
      target.setIsStunned(true); // Применяем оглушение
      this.abilityUsed = true;
      logs.logAbility(this, ability, target, 'будет оглушен на 2 хода');
  
      // Маг сразу атакует после применения оглушения
      this.attack(target, logs);
    } else if (ability === 'Лечение') {
      const healAmount = 20;
      this.setHealth(this.getHealth() + healAmount);
      logs.logHeal(this, healAmount); // Логируем лечение
    }    
  }

  takeDamage(damage: number): void {
    if (this.isStunned) { // Теперь доступ к isStunned разрешён
      console.log(`${this.getName()} пропускает ход.`);
      this.isStunned = false;
    } else {
      super.takeDamage(damage);
    }
  }
}

export class Knight extends Player {
  abilities: string[] = ['Короночка'];
  private abilityUsed: boolean = false;
  public resetAbilityUsed(): void {
    this.abilityUsed = false;
  }
  useAbility(target: Player, logs: Logs): void {
    const ability = this.getSelectedAbility(); // Используем выбранную способность
    if (!ability) return;

    if (ability === 'Короночка' && !this.abilityUsed) {
      const damage = Math.round(this.getStrength() * 1.5); // Увеличиваем урон
      target.takeDamage(damage);
      this.abilityUsed = true;
      logs.logAbility(this, ability, target, `который получает ${damage} урона`); // Логируем атаку
    }
  }
}

export class Archer extends Player {
  abilities: string[] = ['Огненные стрелы', 'Ледяные стрелы'];
  private fireArrowsUsed: boolean = false;
  private iceArrowsUsed: number = 0;
  private fireArrowsDuration: number = 0;
  private iceArrowsDuration: number = 0;

  public resetFireArrowsUsed(): void {
    this.fireArrowsUsed = false;
  }

  public resetIceArrowsUsed(): void {
    this.iceArrowsUsed = 0;
  }

  constructor(name: string, strength: number, health: number) {
    super(name, strength, health);
  }

  useAbility(target: Player, logs: Logs): void {
    const ability = this.getSelectedAbility(); // Используем выбранную способность
    if (!ability) return;

    // Наносим базовый урон (обычная атака)
    const baseDamage = this.getStrength();
    target.takeDamage(baseDamage);

    // Логируем использование способности и базовый урон
    logs.logAbility(
      this,
      ability,
      target,
      `и наносит ${baseDamage} основного урона. ${target.getName()} теряет 3 единицы жизни следующие 2 хода`,
    );

    if (ability === 'Огненные стрелы' && !this.fireArrowsUsed) {
      // Активируем эффект огненных стрел на 2 хода
      this.fireArrowsUsed = true;
      this.fireArrowsDuration = 2; // Устанавливаем длительность эффекта на 2 хода
    } else if (ability === 'Ледяные стрелы' && this.iceArrowsUsed < 2) {
      // Активируем эффект ледяных стрел на 2 хода
      this.iceArrowsUsed++;
      this.iceArrowsDuration = 2; // Устанавливаем длительность эффекта на 2 хода
    }
  }

  applyAbilityEffects(target: Player, logs: Logs): void {
    // Применяем урон от огненных стрел, если они активны
    if (this.fireArrowsUsed && this.fireArrowsDuration > 0) {
      const fireDamage = 3;
      target.takeDamage(fireDamage);
      logs.log(
        `${target.getName()} теряет ${fireDamage} единиц жизни из-за Огненных стрел. Текущее здоровье: ${target.getHealth()}`,
      );
      this.fireArrowsDuration--;
      if (this.fireArrowsDuration === 0) {
        this.fireArrowsUsed = false;
      }
    }

    // Применяем урон от ледяных стрел, если они активны
    if (this.iceArrowsDuration > 0) {
      const iceDamage = 3;
      target.takeDamage(iceDamage);
      logs.log(
        `${target.getName()} теряет ${iceDamage} единиц жизни из-за Ледяных стрел. Текущее здоровье: ${target.getHealth()}`,
      );
      this.iceArrowsDuration--;
      if (this.iceArrowsDuration === 0) {
        this.iceArrowsUsed = 0;
      }
    }
  }
}