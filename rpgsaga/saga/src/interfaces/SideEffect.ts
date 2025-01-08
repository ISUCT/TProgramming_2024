import { Player } from '../services';

export interface SideEffectBehavior {
  activate(): void;
  bindToPlayer(player: Player): void;
}
