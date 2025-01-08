import { Player } from '../services';

export interface IPlayerFactory {
  createPlayer(type: string): Player;
}

export interface CallableFactory<Factory> {
  new (): Factory;
}
