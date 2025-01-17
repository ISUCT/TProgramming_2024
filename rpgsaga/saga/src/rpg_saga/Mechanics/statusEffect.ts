import { Character } from '../character';

export class StatusEffect {
  effectName: string;
  effectDuration: number;
  applyEffectDamage: (player: Character) => void;
  removeFromPlayer?: (player: Character) => void;

  constructor(
    effectName: string,
    effectDuration: number,
    applyEffectDamage: (player: Character) => void,
    removeFromPlayer?: (player: Character) => void,
  ) {
    this.effectName = effectName;
    this.effectDuration = effectDuration;
    this.applyEffectDamage = applyEffectDamage;
    this.removeFromPlayer = removeFromPlayer;
  }

  reduceDuration(): void {
    this.effectDuration -= 1;
  }

  hasExpired(): boolean {
    return this.effectDuration <= 0;
  }
}
