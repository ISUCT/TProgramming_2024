import { Player } from '../Player/Player';

import { Weapons } from './charGenerator';

export class Saber extends Player {
  constructor(name: string) {
    super(name, 120, 120, 50, { physical: 20, magic: -10 }, Weapons.sword, 'Saber');
  }
}
