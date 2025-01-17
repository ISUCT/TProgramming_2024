import { Player } from '../Player/Player';

import { Weapons } from './charGenerator';

export class Caster extends Player {
  constructor(name: string) {
    super(name, 80, 80, 100, { physical: -10, magic: 30 }, Weapons.bankai, 'Caster');
  }
}
