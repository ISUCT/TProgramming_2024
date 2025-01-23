import { Player } from './Player';
import { getRandomElement, getRandomValue } from './utils/RandomFunc';
import { abilities, Ability } from './utils/abilities';

export class Mage extends Player {
  private static magesNames = ['Arcanis', 'Zephyrion', 'Ignarion', 'Astreos', 'Draemir', 'Melchior'];

  constructor() {
    const name = getRandomElement(Mage.magesNames);
    const maxHealth = getRandomValue(80, 100);
    const strength = getRandomValue(15, 20);
    const speed = getRandomValue(10, 40) / 100;
    super(name, maxHealth, strength, speed);
    this.abilities = this.getAbilities();
  }

  getAbilities(): Ability[] {
    return [
      abilities.find(a => a.name === 'SpellBounding') ||
        (() => {
          throw new Error("Ability 'SpellBounding' not found!");
        })(),
      abilities.find(a => a.name === 'Frozen Arrows') ||
        (() => {
          throw new Error("Ability 'Frozen Arrows' not found!");
        })(),
    ];
  }

  getClass(): string {
    return 'Mage';
  }
}
