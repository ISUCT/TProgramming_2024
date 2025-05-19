import { Player } from './player';

export interface Debuff {
  name: string;
  duration: number;
  effect: (player: Player) => void;
  affectsAttack: boolean;
}
