import { IceArrows, SuperDamage } from '../Ability';
import { logger } from '../Logger';

import { Player } from './Player';

export class Knight extends Player {
  constructor() {
    super();
    this.setRole('Рыцарь');
    this.setAbilities([new SuperDamage(this), new IceArrows(this, 1)]);
    logger.info(`Создан игрок ${this.getFullName()}`);
  }
}
