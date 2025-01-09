import { Character } from '../Characters/Сharacter';

export interface IAbility {
  name: string;
  damage?: (caster: Character) => number | undefined;
  isUsed: boolean;
  usageCount: number;
  initialSkillUsage: number;
  turns?: number;
  initialTurns?: number;
  effect?: (caster: Character, opponent: Character) => void;
  buff?: {
    strength: number;
  };
}
