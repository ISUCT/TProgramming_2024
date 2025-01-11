import { Character } from '../Characters/Сharacter';

export interface IAbility {
  name: string;
  damage?: (caster: Character) => number | undefined;
  isUsed: boolean;
  usageCount: number;
  maxAbilityUsage: number;
  turns?: number;
  maxTurns?: number;
  effect?: (caster: Character, opponent: Character) => void;
  buff?: {
    strength: number;
  };
}
