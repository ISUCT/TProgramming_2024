import { Player } from '../services';

export interface FightManagerBehavior {
  fight(firstPlayer: Player, secondPlayer: Player): Player;
}

export interface PlayersManagerBehavior {
  createPlayers(players: number): Player[];
}

export interface PairsManagerBehavior {
  createPairs(players: Player[]): [Player, Player][];
}
