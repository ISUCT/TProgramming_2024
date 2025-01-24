import { Player } from '../laba3CreatingPlayer';
import { Logs } from '../laba3Logs';

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
    super.takeDamage(damage); // Всегда наносим урон, независимо от оглушения
  }

  public setStrength(strength: number): void {
    if (strength >= 10 && strength <= 50) {
      super.setStrength(strength);
    } else {
      throw new Error('Strength for Mage must be between 10 and 50');
    }
  }

  public setHealth(health: number): void {
    if (health >= 50 && health <= 150) {
      super.setHealth(health);
    } else {
      throw new Error('Health for Mage must be between 50 and 150');
    }
  }
}