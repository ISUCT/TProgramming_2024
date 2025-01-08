import { logger } from '../Logger';
import { Player } from '../Players';

export abstract class Attack {
  protected readonly _player: Player;

  constructor(player: Player) {
    this._player = player;
  }

  protected _baseAttack = (opponent: Player) => {
    logger.info(`Игрок ${this._player.getFullName()} атакует игрока ${opponent.getFullName()}`);
    const newHealth = opponent.health - this._player.power;
    opponent.health = newHealth;
  };
}
