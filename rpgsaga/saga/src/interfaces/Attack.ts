import { Player } from '../services';

export interface AttackBehavior {
  attack(opponent: Player): void;
}
