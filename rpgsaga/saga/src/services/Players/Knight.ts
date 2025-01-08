import { SuperDamage } from '../Ability';
import { logger } from '../Logger';

import { Player } from './Player';

export class Knight extends Player {
  constructor() {
    super();
    this.setRole('Рыцарь');
    this.setAbilities([new SuperDamage(this)]);
    logger.info(`Создан игрок ${this.getFullName()}`);
  }
}
