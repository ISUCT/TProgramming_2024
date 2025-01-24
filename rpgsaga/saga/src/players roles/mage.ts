import { MainAttack } from '../abilities/base attack';
import { Fascination } from '../abilities/fascination';
import { FrozenArrows } from '../abilities/frozen arrows';

import { Player } from './player';

export class Mage extends Player {
  constructor(
    hp: number,
    strength: number,
    name: string,
    roleNumber: number,
    attackingAbilities = [new MainAttack(), new Fascination(), new FrozenArrows()],
    isAttackedAbilities = [],
    roleName = 'Маг',
  ) {
    super(hp, strength, name, roleNumber, attackingAbilities, isAttackedAbilities, roleName);
  }
}
