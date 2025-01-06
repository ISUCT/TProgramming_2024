import { Character } from '../Character';
import { Logger } from '../logger';

export class Archer extends Character {
  constructor() {
    super();
    this.classProtected = 'Лучник';
  }

  override useSkill(oponent: Character): void {
    if (oponent.burn) {
      oponent.fightDamager(this.damage);
      Logger.logFight(this, oponent);
    } else {
      Logger.logFireArrows(this);
      oponent.burnActive();
    }
  }
}
