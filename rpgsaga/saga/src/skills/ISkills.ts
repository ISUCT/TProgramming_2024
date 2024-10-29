import { Player } from '../abstract/Player';

export interface ISkills {
  name: string;
  damage?: number;
  turns?: number;
  isAvailable: boolean;
  effect: (opponent: Player) => number;
}
