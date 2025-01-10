import { PairsManagerBehavior } from '../../interfaces/Manager';
import { shuffleArray } from '../../lib';
import { logger } from '../Logger';
import { Player } from '../Players';

export class BasePairsManager implements PairsManagerBehavior {
  createPairs(players: Player[]): [Player, Player][] {
    const battlePairs = [];
    const shuffledPlayers = shuffleArray(players);
    logger.debug({
      message: 'shuffledPlayers',
    });
    logger.log(shuffledPlayers.length);
    for (let i = 0; i < shuffledPlayers.length; i += 2) {
      battlePairs.push([shuffledPlayers[i], shuffledPlayers[i + 1]] as [Player, Player]);
    }

    return battlePairs;
  }
}
