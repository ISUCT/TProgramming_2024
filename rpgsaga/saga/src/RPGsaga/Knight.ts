import { Player } from './Player';
import { getRandomElement, getRandomValue } from './utils/RandomFunc';
import { abilities, Ability } from './utils/abilities';

export class Knight extends Player {
  private static knightNames = ['Cedric', 'Godric', 'Percival', 'Dorian', 'Rohan', 'Castiel'];

  constructor() {
    const name = getRandomElement(Knight.knightNames);
    const maxHealth = getRandomValue(100, 120);
    const strength = getRandomValue(15, 20);
    const speed = getRandomValue(10, 30) / 100;
    super(name, maxHealth, strength, speed);
    this.abilities = this.getAbilities();
  }

  getAbilities(): Ability[] {
    return [
      abilities.find(a => a.name === 'Retribution Strike') ||
        (() => {
          throw new Error("Ability 'Retribution Strike' not found!");
        })(),
      abilities.find(a => a.name === 'Frozen Arrows') ||
        (() => {
          throw new Error("Ability 'Fire Arrows' not found!");
        })(),
    ];
  }

  getClass(): string {
    return 'Knight';
  }
}
