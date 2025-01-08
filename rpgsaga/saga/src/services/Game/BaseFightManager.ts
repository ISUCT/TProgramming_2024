import { FightManagerBehavior } from '../../interfaces';
import { randomInt } from '../../lib';
import { logger } from '../Logger';
import { Player } from '../Players';

export class BaseFightManager implements FightManagerBehavior {
  public fight(firstPlayer: Player, secondPlayer: Player): Player {
    const getFighters = this.createBattleRole(firstPlayer, secondPlayer);
    while (firstPlayer.isAlive && secondPlayer.isAlive) {

      const [attacker, defender] = getFighters();

      attacker.attack(defender);
    }

    const winner = this.getWinner(firstPlayer, secondPlayer)
    logger.info(`И победитеель - ${winner?.getFullName()}`)
    
    winner?.resetToInitial()

    return winner
  }

  private createBattleRole(firstPlayer: Player, secondPlayer: Player) {
    let turn = randomInt(0, 1);
    return () => {
      const role = turn === 1 ? [firstPlayer, secondPlayer] : [secondPlayer, firstPlayer];
      turn = turn === 1 ? 0 : 1;

      return role;
    };
  }

  private getWinner(first: Player, second: Player) {
    if (first.isAlive) return first
    if (second.isAlive) return second
  }
}
