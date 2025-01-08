import { SideEffectBehavior } from '../../interfaces';
import { logger } from '../Logger';
import { Player } from '../Players';
import { Ability } from './Ability';

export class SuperDamage extends Ability {
  constructor(player: Player, sideEffects: SideEffectBehavior[] = [], maxUsage: number = Infinity) {
    super(player, sideEffects, maxUsage)
  }

  public activate(opponent: Player): void {
    opponent.health -= Math.ceil(this.player.power * 1.3)
    logger.info(`Игрок ${this.player.getFullName()} использует супер удар по игроку ${opponent.getFullName()} \n`);
    this._updateUsability()
  }
}
