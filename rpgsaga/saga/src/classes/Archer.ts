import { Player } from '../abstract/Player';
import { ISkills } from '../skills/ISkills';
import { getRandomArrayElement } from '../utils/randomization/getRandomArrayElement';

export class Archer extends Player {
  protected className: string = 'Archer';
  protected skill: ISkills;
  protected skillBuff: number = 0;

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
      turns: 3,
      isAvailable: true,
      effect: () => {
        this.strength += 3;
        return 0;
      },
    });
  }

  public useSkill(opponent: Player): string | null {
    if (this.skills.length === 0) return null;

    const availableSkills = this.skills.filter(skill => skill.isAvailable);
    if (availableSkills.length === 0) return null;

    this.skill = getRandomArrayElement(availableSkills);
    this.skillUsed = true;
    const damageDealt = this.skill.effect(opponent);
    let message = `(${this.playerClassName}) ${this.playerName} использует (${this.skill.name}) на (${opponent.playerClassName}) ${opponent.playerName}`;
    if (damageDealt > 0) {
      message += ` и наносит урон ${damageDealt}`;
    }
    return message;
  }

  public attack(opponent: Player): string {
    if (this.isAlivePlayer && !this.isCharmed) {
      if (this.skillUsed === true) {
        this.skillBuff += 1;
      }
      if (this.skillBuff === this.skill?.turns) {
        this.strength -= this.skill.damage;
      }
      opponent.takeDamage(this.strength);
      return `(${this.playerClassName}) ${this.playerName} наносит урон ${this.strength} противнику (${opponent.playerClassName}) ${opponent.playerName}`;
    } else if (this.isAlivePlayer && this.isCharmed) {
      this.gettingCharmed(false);
      return opponent.takeDamage(this.strength);
    }
  }
}
