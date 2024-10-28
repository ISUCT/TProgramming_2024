import { Player } from '../abstract/Player';
import { ISkills } from '../skills/ISkills';

export class Knight extends Player {
  protected className: string = 'Knight';
  protected skill: ISkills;

  constructor(health: number, strength: number, name: string) {
    super(health, strength, name);
    this.addSkill({
      name: 'Удар возмездия',
      isAvailable: true,
      effect: opponent => {
        const skillDamage = this.strength * 1.3;
        opponent.takeDamage(skillDamage);
        return skillDamage;
      },
    });
  }

  public attack(opponent: Player): string {
    if (this.isAlivePlayer && !this.isCharmed) {
      opponent.takeDamage(this.strength);
      return `(${this.playerClassName}) ${this.playerName} наносит урон ${this.strength} противнику (${opponent.playerClassName}) ${opponent.playerName}`;
    } else if (this.isAlivePlayer && this.isCharmed) {
      this.gettingCharmed(false);
      return opponent.takeDamage(this.strength);
    }
  }
}
