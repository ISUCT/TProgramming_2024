import { MainAttack } from '../abilities/base attack';
import { VengeanceStrike } from '../abilities/vengeance strike';
import { FrozenArrows } from '../abilities/frozen arrows';

import { Player } from './player';

export class Knight extends Player {
  constructor(
    hp: number,
    strength: number,
    name: string,
    roleNumber: number,
    roleName = 'Рыцарь',
    attackingAbilities = [new MainAttack(), new VengeanceStrike(), new FrozenArrows()],
    isAttackedAbilities = [],
  ) {
    super(hp, strength, name, roleNumber, attackingAbilities, isAttackedAbilities, roleName);
  }
}
