import { Hero } from '../hero';
import { Ability } from '../ability';

export class Knight extends Hero {
  protected className: string = 'Knight';

  constructor(
    heroHealth: number,
    heroStrength: number,
    heroName: string,
    heroAbilities: Ability[],
  ) {
    super(heroHealth, heroStrength, heroName, heroAbilities);
  }

  public takeDamage(damage: number, ability: Ability | undefined = undefined): number {
    let currentDamage: number = damage;
    if (ability !== undefined && ability.name !== 'ледяные стрелы' && ability.buff) {
      currentDamage = damage + ability.buff.strength;
    }
    this.health -= currentDamage;
    if (this.health <= 0) {
      this.health = 0;
      this.isAlive = false;
    }
    return currentDamage;
  }
}
