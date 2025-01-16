import { Weapons } from './lists';
import { Player } from './player';

export class Warrior extends Player {
  constructor(name: string) {
    const maxHealth = 120;
    const maxMana = 50;
    const resists = { physical: 20, magic: -10 };
    super(name, maxHealth, maxMana, resists, Weapons.sword);
  }
}
