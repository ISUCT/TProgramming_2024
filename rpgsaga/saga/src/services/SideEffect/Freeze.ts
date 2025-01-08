import { SideEffectBehavior } from '../../interfaces';
import { logger } from '../Logger';
import { Player } from '../Players';
import { SideEffect } from './SideEffect';

export class FreezeEffect extends SideEffect implements SideEffectBehavior {
  constructor() {
    super(1)
    this._isActiveEffect = true
  }

  activate(): void {
    if (!this.checkUser()) return;

    const baseUseAbility = this._player.useAbility;
    this._player.useAbility = this.decorateAttack(baseUseAbility);
  }

  private decorateAttack =
    (fn: Player['useAbility']) =>
    (...args: any[]) => {
      if (this._isActiveEffect) {
        logger.info(`${this._player.getFullName()} пропускает атаку так как на нем сайд эффект "Обворожения"`);
        this._updateUsability();
      } else {
        // @ts-ignore
        return fn(...args)
      }
    };
}
