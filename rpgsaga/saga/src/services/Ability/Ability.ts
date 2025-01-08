import { SideEffectBehavior } from '../../interfaces';
import { randomInt } from '../../lib';
import { logger } from '../Logger';
import { Player } from '../Players';

export abstract class Ability {
  protected player: Player;
  protected opponentSideEffects: SideEffectBehavior[];
  protected _maxUsageCount: number;
  protected _usageCounter: number;
  protected _isActiveEffect: boolean;

  constructor(player: Player, sideEffects: SideEffectBehavior[] = [], maxUsage: number = 1) {
    this.opponentSideEffects = sideEffects;
    this.player = player;
    this._maxUsageCount = maxUsage
    this._usageCounter = 0;
    this._isActiveEffect = true;
  }

  public abstract activate(opponent: Player, callback?: () => void): void;

  public canUseAbility() {
    let canUse = randomInt(0, 100) >= 70 ? true : false
    logger.debug({
      message: `Получилось юзануть canUseAbility ${canUse}`,
      metaInfo: this.player.getFullName(),
    });

    canUse = this._isActiveEffect ? canUse : false

    return canUse;
  }

  protected _updateUsability() {
    this._usageCounter += 1;

    if (this._usageCounter >= this._maxUsageCount) {
      this._isActiveEffect = false;
    }
  }
}
