import { Player } from '../abstract/Player';
import { ISkills } from '../skills/ISkills';

export class Vizard extends Player {
  protected className: string = 'Vizard';
  protected countOfSkills: number = 0;
  protected skill: ISkills;

  public get countOfVizardSkills() {
    return this.countOfSkills;
  }

  public set countOfVizardSkills(value: number) {
    this.countOfSkills = value;
  }

  constructor(health: number, strength: number, name: string) {
    super(health, strength, name);
    this.addSkill({
      name: 'Заворожение',
      isAvailable: true,
      effect: opponent => {
        opponent.gettingCharmed(true);
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

  public takeDamage(damage: number): string {
    if (this.skillUsed) {
      this.skillUsed = false;
      this.countOfSkills += 1;
      return `Противник не может атаковать ${this.playerName} из-за (Заворожения)`;
    } else {
      return super.takeDamage(damage);
    }
  }
}
