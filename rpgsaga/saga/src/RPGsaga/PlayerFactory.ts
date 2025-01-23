import { getRandomElement } from './utils/RandomFunc';
import { Player } from './Player';
import { Mage } from './Mage';
import { Archer } from './Archer';
import { Knight } from './Knight';

export class PlayerFactory {
  static createRandomPlayer(): Player {
    const heroType = getRandomElement(['Archer', 'Knight', 'Mage']);
    switch (heroType) {
      case 'Archer':
        return this.createRandomArcher();
      case 'Knight':
        return this.createRandomKnight();
      case 'Mage':
        return this.createRandomMage();
      default:
        throw new Error('Unknown hero type!');
    }
  }

  private static createRandomArcher(): Archer {
    return new Archer();
  }

  private static createRandomKnight(): Knight {
    return new Knight();
  }

  private static createRandomMage(): Mage {
    return new Mage();
  }
}
