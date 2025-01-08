import { logger } from "../Logger";
import { Player } from "../Players";
import { FireDamageEffect } from "../SideEffect";
import { Ability } from "./Ability";

export class FireArrows extends Ability {
  constructor (player: Player) {
    super(player, [new FireDamageEffect()])
  }

  public activate(opponent: Player): void {
    logger.info(`Игрок ${this.player.name} использует супер абилку огненые стрелы по игроку ${opponent.name}`)
    opponent.setSideEffects(this.opponentSideEffects);
    this._updateUsability()
  }
}
