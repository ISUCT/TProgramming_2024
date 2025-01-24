import { Player } from '../laba3CreatingPlayer';
import { Logs } from '../laba3Logs';

export class Archer extends Player {
  abilities: string[] = ['Огненные стрелы', 'Ледяные стрелы'];
  private fireArrowsUsed: boolean = false;
  private iceArrowsUsed: number = 0;
  private fireArrowsDuration: number = 0;
  private iceArrowsDuration: number = 0;

  constructor(name: string, strength: number, health: number) {
    super(name, strength, health);
  }

  // Метод для сброса состояния огненных стрел
  public resetFireArrowsUsed(): void {
    this.fireArrowsUsed = false;
    this.fireArrowsDuration = 0;
  }

  // Метод для сброса состояния ледяных стрел
  public resetIceArrowsUsed(): void {
    this.iceArrowsUsed = 0;
    this.iceArrowsDuration = 0;
  }

  useAbility(target: Player, logs: Logs): void {
    const ability = this.getSelectedAbility();
    if (!ability) return;

    const baseDamage = this.getStrength();
    target.takeDamage(baseDamage);

    logs.logAbility(
      this,
      ability,
      target,
      `и наносит ${baseDamage} основного урона. ${target.getName()} теряет 3 единицы жизни следующие 2 хода`,
    );

    if (ability === 'Огненные стрелы' && !this.fireArrowsUsed) {
      this.fireArrowsUsed = true;
      this.fireArrowsDuration = 3;
    } else if (ability === 'Ледяные стрелы' && this.iceArrowsUsed < 2) {
      this.iceArrowsUsed++;
      this.iceArrowsDuration = 3;
    }
  }

  applyAbilityEffects(target: Player, logs: Logs): void {
    this.applyArrowEffect(target, logs, 'Огненные стрелы', this.fireArrowsUsed, this.fireArrowsDuration);
    this.applyArrowEffect(target, logs, 'Ледяные стрелы', this.iceArrowsUsed > 0, this.iceArrowsDuration);

    if (this.fireArrowsDuration > 0) this.fireArrowsDuration--;
    if (this.iceArrowsDuration > 0) this.iceArrowsDuration--;
  }

  private applyArrowEffect(target: Player, logs: Logs, arrowType: string, isUsed: boolean, duration: number): void {
    if (isUsed && duration > 0) {
      const damage = 3;
      target.takeDamage(damage);
      logs.logDamageOverTime(target, damage, arrowType);
    }
  }

  public setStrength(strength: number): void {
    if (strength >= 15 && strength <= 70) {
      super.setStrength(strength);
    } else {
      throw new Error('Strength for Archer must be between 15 and 70');
    }
  }

  public setHealth(health: number): void {
    if (health >= 60 && health <= 180) {
      super.setHealth(health);
    } else {
      throw new Error('Health for Archer must be between 60 and 180');
    }
  }
}