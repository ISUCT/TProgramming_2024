import { Hero } from '../hero';
import { Ability } from '../ability';

export class Archer extends Hero {
  protected className: string = 'Archer';

  constructor(
    heroHealth: number,
    heroStrength: number,
    heroName: string,
    heroAbilities: Ability[],
  ) {
    super(heroHealth, heroStrength, heroName, heroAbilities);
  }
}
