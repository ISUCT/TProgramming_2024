import { Hero } from './hero';

export interface Ability {
  name: string;
  damage?: (caster: Hero) => number | undefined;
  isUsed: boolean;
  usageCount: number;
  maxAbilityUsage: number;
  turns?: number;
  maxTurns?: number;
  effect?: (caster: Hero, opponent: Hero) => void;
  buff?: {
    strength: number;
  };
}