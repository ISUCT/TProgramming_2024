import { AttackBehavior } from '../../interfaces';
import { logger } from '../Logger';
import { Player } from '../Players';
import { Attack } from './AbstractAttack';

export class MageAttackImpl extends Attack implements AttackBehavior {
  attack(opponent: Player): void {
    logger.debug({
      message: `${this._player.getFullName()} ебашит ${opponent.getFullName()}`,
      metaInfo: `PlayerAttackImpl.attack`,
    });
    this._player.useSideEffects();
    this._baseAttack(opponent);
    this._player.useAbility(opponent);

    logger.info(`Оппонент ${opponent.getFullName()} - здоровье ${opponent.health} !!!!!!`);
  }
}
