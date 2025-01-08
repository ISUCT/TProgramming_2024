import { SideEffectBehavior } from '../../interfaces';
import { logger } from '../Logger';
import { SideEffect } from './SideEffect';

export class IceArrowDamageEffect extends SideEffect implements SideEffectBehavior {
  private _additionalDamage: number;

  get isActiveEffect() {
    return this._isActiveEffect;
  }

  constructor(usageCount = 1) {
    super(usageCount);
    this._additionalDamage = 2;
  }

  activate(): void {
    if (!this.checkUser()) return

    if (this._isActiveEffect) {
      this._player.health -= this._additionalDamage;
      logger.info(`${this._player.getFullName()} теряет ${this._additionalDamage} так как замарозка херачит`)
      logger.info(`${this._player.getFullName()}: Здоровье - ${this._player.health}`)
      this._updateUsability();
    }
  }
}
