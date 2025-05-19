import { Weapons } from './lists';
import { Player } from './player';

export class Mage extends Player {
  constructor(name: string) {
    const maxHealth = 80;
    const maxMana = 100;
    const resists = { physical: -10, magic: 30 };
    super(name, maxHealth, maxMana, resists, Weapons.magicStaff);
  }
}
