import { Player } from './Player';
import { logger } from '../Logger';
import { FireArrows, IceArrows } from '../Ability';

export class Archer extends Player {
  constructor() {
    super();
    this.setRole('Лучник');
    this.setAbilities([new FireArrows(this), new IceArrows(this, 3)]);

    logger.info(`Создан игрок ${this.getFullName()}`);
  }
}
