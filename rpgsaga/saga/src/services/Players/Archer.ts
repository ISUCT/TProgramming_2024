import { logger } from '../Logger';
import { FireArrows, IceArrows } from '../Ability';

import { Player } from './Player';

export class Archer extends Player {
  constructor() {
    super();
    this.setRole('Лучник');
    this.setAbilities([new FireArrows(this), new IceArrows(this, 3)]);

    logger.info(`Создан игрок ${this.getFullName()}`);
  }
}
