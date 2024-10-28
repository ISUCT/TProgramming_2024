import { Player } from '../abstract/Player';
import { ISkills } from '../skills/ISkills';

export class Archer extends Player {
  protected className: string = 'Archer';
  protected skill: ISkills;

  constructor(health: number, strength: number, name: string) {
    super(health, strength, name);
    this.addSkill({
      name: 'Огненные стрелы',
      damage: 2,
      isAvailable: true,
      effect: opponent => {
        if (opponent.playerClassName === 'Knight') {
          return 0;
        } else {
          this.strength += 2;
          return 0;
        }
      },
    });
    this.addSkill({
      name: 'Ледяные стрелы',
      damage: 3,
      isAvailable: true,
      effect: () => {
        this.strength += 3;
        return 0;
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
