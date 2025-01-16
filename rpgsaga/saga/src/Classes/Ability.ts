import { Player } from '../Player/Player';

export enum DamageType {
  Physical = 'Physical',
  Magic = 'Magic',
}
export interface Debuff {
  name: string;
  duration: number;
  effect: (player: Player) => void;
  affectsAttack: boolean;
}

export class Ability {
  public maxUsageLimit: number;

  constructor(
    public name: string,
    public effect: (target: Player) => Debuff,
    public usageLimit: number,
  ) {
    this.maxUsageLimit = usageLimit;
  }
}
export const abilities: Ability[] = [
  new Ability(
    'The One Who Saw It All',
    () => ({
      name: 'The One Who Saw It All',
      duration: 2,
      effect: player => {
        player.canAttack = false;
      },
      affectsAttack: true,
    }),
    1,
  ),
  new Ability(
    'Golden Rule',
    () => ({
      name: 'Golden Rule',
      duration: 1,
      effect: player => {
        player.health -= 15;
      },
      affectsAttack: false,
    }),
    1,
  ),
];
