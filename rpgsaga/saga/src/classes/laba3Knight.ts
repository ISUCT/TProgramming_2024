import { Player } from '../laba3CreatingPlayer';
import { Logs } from '../laba3Logs';

export class Knight extends Player {
  abilities: string[] = ['Короночка'];
  private abilityUsed: boolean = false;

  public resetAbilityUsed(): void {
    this.abilityUsed = false;
  }

  useAbility(target: Player, logs: Logs): void {
    const ability = this.getSelectedAbility();
    if (!ability) return;
  
    if (ability === 'Короночка' && !this.abilityUsed) {
      const damage = Math.round(this.getStrength() * 1.5);
      target.takeDamage(damage);
      this.abilityUsed = true;
      logs.logAbility(this, ability, target, `который получает ${damage} урона`);
      this.setSelectedAbility(null); // Сбрасываем выбранную способность
    }
  }
  public setStrength(strength: number): void {
    if (strength >= 20 && strength <= 100) {
      super.setStrength(strength);
    } else {
      throw new Error('Strength for Knight must be between 20 and 100');
    }
  }
  public setHealth(health: number): void {
    if (health >= 80 && health <= 200) {
      super.setHealth(health);
    } else {
      throw new Error('Health for Knight must be between 80 and 200');
    }
  }
}