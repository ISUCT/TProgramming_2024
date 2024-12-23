import { Debuff } from './debuff';
import { Player } from './player';

export class Ability {
  name: string;
  effect: (target: Player) => Debuff;
  usageLimit: number;
  maxUsageLimit: number;

  constructor(name: string, effect: (target: Player) => Debuff, usageLimit: number) {
    this.name = name;
    this.effect = effect;
    this.usageLimit = usageLimit;
    this.maxUsageLimit = usageLimit;
  }
}
