import { Player } from '../abstract/Player';

export interface ISkill {
  name: string;
  damage?: (caster: Player) => number | undefined;
  isUsed: boolean;
  usageCount: number;
  initialSkillUsage: number;
  turns?: number;
  initialTurns?: number;
  effect?: (caster: Player, opponent: Player) => void;
  buff?: {
    strength: number;
  };
}
