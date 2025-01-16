import { Player } from '../Player/Player';

import { Weapons } from './charGenerator';

export class Archer extends Player {
  constructor(name: string) {
    super(name, 90, 90, 60, { physical: 10, magic: -20 }, Weapons.bow, 'Archer');
  }
}
