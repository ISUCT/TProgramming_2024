import { logger } from '../Logger';
import { Player } from '../Players';
import { IceArrowDamageEffect } from '../SideEffect';
import { Ability } from './Ability';

export class IceArrows extends Ability {
  constructor(player: Player, abilityUsageCount: number = 1, sideEffectUsageCount: number = 3) {
    super(player, [new IceArrowDamageEffect(sideEffectUsageCount)], abilityUsageCount);
  }

  public activate(opponent: Player): void {
    logger.info(`${this.player.getFullName()} использует абилку Ледяные стрелы по игроку ${opponent.name}`);
    // opponent.health -= this.player.power * 1.3
    opponent.setSideEffects(this.opponentSideEffects);
    this._updateUsability()
  }
}
