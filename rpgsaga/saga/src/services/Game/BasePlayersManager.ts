import { IPlayerFactory, PlayersManagerBehavior, CallableFactory } from '../../interfaces';
import { isEven, PlayerTypeArray, randomInt } from '../../lib';
import { logger } from '../Logger';
import { Player } from '../Players';

export class BasePlayersManager implements PlayersManagerBehavior {
  private _playerFactory: IPlayerFactory;

  constructor(PlayerFactory: CallableFactory<IPlayerFactory>) {
    this._playerFactory = new PlayerFactory();
  }

  createPlayers(playersCount: number): Player[] {
    if (!isEven(playersCount)) {
      throw new Error('Game: U have to choose only an even number of players');
    }

    let players: Player[] = [];

    logger.debug({
      message: `playersCount ${playersCount}`,
    });

    for (let i = 0; i < playersCount; i++) {
      const player = this._playerFactory.createPlayer(PlayerTypeArray[randomInt(0, PlayerTypeArray.length - 1)]);

      players.push(player);
    }

    logger.debug({
      message: `все игроки ${players.map(el => el?.getFullName()).join(', ')}`,
      metaInfo: `BasePlayersManager fn createPlayers`,
    });
    return players;
  }
}
