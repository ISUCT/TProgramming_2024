import { logger } from '../Logger';
import { FireArrows, IceArrows } from '../Ability';

import { Player, PlayerParams } from './Player';

export class Archer extends Player {
  constructor(params?: PlayerParams) {
    super(params);
    this.setRole('Лучник');
    this.setAbilities([new FireArrows(this), new IceArrows(this, 1)]);

    logger.info(`Создан игрок ${this.getFullName()}`);
  }
}
