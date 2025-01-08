import { MagicalFreeze, SuperDamage } from '../Ability';
import { logger } from '../Logger';

import { Player } from './Player';

export class Mage extends Player {
  constructor() {
    super();
    this.setRole('Маг');
    this.setAbilities([new MagicalFreeze(this)]);
    logger.info(`Создан игрок ${this.getFullName()}`);
  }
}
