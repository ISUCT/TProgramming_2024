import { IPlayerFactory } from '../interfaces';
import { Knight, Mage, Archer, Player } from '../services';

export const PlayerMap = {
  Knight: 'Knight',
  Mage: 'Mage',
  Archer: 'Archer',
} as const;

export type PlayerType = keyof typeof PlayerMap;

export const PlayerTypeArray = Object.keys(PlayerMap) as PlayerType[];

export class PlayerFactory implements IPlayerFactory {
  public createPlayer(type: PlayerType): Player {
    switch (type) {
      case PlayerMap.Knight:
        return new Knight();
      case PlayerMap.Archer:
        return new Archer();
      case PlayerMap.Mage:
        return new Mage();
    }
  }
}
