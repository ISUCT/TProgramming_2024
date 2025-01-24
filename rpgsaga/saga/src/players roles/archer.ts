import { MainAttack } from '../abilities/base attack';
import { FrozenArrows } from '../abilities/frozen arrows';

import { Player } from './player';

export class Archer extends Player {
  constructor(
    hp: number,
    strength: number,
    name: string,
    roleNumber: number,
    attackingAbilities = [
      
      new MainAttack(),
      (() => {
        const frozenArrows = new FrozenArrows();
        frozenArrows.changeUseFrequency(2);
        return frozenArrows;
      })(),
    ],
    isAttackedAbilities = [],
    roleName = 'Лучник',
  ) {
    super(hp, strength, name, roleNumber, attackingAbilities, isAttackedAbilities, roleName);
  }
}
