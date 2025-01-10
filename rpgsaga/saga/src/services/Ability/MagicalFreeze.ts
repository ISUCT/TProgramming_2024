import { logger } from '../Logger';
import { Player } from '../Players';
import { FreezeEffect } from '../SideEffect';

import { Ability } from './Ability';

  export class MagicalFreeze extends Ability {
    constructor(player: Player) {
      super(player, [new FreezeEffect()],);
    }

    public activate(opponent: Player): void {
      logger.debug({
        message: 'MagicalFreeze active ulta',
        metaInfo: `MagicalFreeze.activate(${opponent})`,
      });

      logger.info(`${this.player.getFullName()} использует ульту - Обворожение`);

      opponent.setSideEffects(this.opponentSideEffects);

      this._updateUsability();
    }

  }
