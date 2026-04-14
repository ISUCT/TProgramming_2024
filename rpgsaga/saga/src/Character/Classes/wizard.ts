import { Hero } from '../hero';
import { Ability } from '../ability';

export class Wizard extends Hero {
  protected className: string = 'Wizard';

  constructor(
    heroHealth: number,
    heroStrength: number,
    heroName: string,
    heroAbilities: Ability[],
  ) {
    super(heroHealth, heroStrength, heroName, heroAbilities);
  }
}
