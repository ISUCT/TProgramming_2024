import { Weapons } from './lists';
import { Player } from './player';

export class Archer extends Player {
  constructor(name: string) {
    const maxHealth = 90;
    const maxMana = 60;
    const resists = { physical: 10, magic: -20 };
    super(name, maxHealth, maxMana, resists, Weapons.bow);
  }
}
