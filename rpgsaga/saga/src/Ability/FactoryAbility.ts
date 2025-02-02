import { Character } from '../Characters/Сharacter';

import { IAbility } from './Ability';

export class FactoryAbility {
  private templateAbility: IAbility[] = [
    {
      name: 'огненные стрелы',
      isUsed: false,
      usageCount: 1,
      maxAbilityUsage: 1,
      buff: {
        strength: 2,
      },
    },
    {
      name: 'ледяные стрелы',
      isUsed: false,
      usageCount: 1,
      maxAbilityUsage: 1,
      turns: 3,
      maxTurns: 3,
      buff: {
        strength: 3,
      },
    },
    {
      name: 'удар возмездия',
      isUsed: false,
      usageCount: 1,
      maxAbilityUsage: 1,
      damage: (caster: Character) => caster.strength * 1.3,
      effect: (caster: Character, opponent: Character) => {
        opponent.damage(caster.strength * 1.3);
      },
    },
    {
      name: 'заворожение',
      isUsed: false,
      usageCount: 1,
      maxAbilityUsage: 1,
      effect: (caster: Character, opponent: Character) => {
        opponent.skipTurns(1);
      },
    },
  ];
  public createAbility(
    abilityName: string,
    abilityDamage: (caster: Character) => number | undefined,
    isUsedSKill: boolean,
    abilityUsageCount: number,
    abilityInitialUsage: number,
    abilityTurns: number | undefined = undefined,
    abilityInitialTurns: number | undefined = undefined,
    abilityEffect: (caster: Character, opponent: Character) => void,
    abilityBuff: { strength: number } | undefined,
  ) {
    const ability: IAbility = {
      name: abilityName,
      damage: abilityDamage,
      isUsed: isUsedSKill,
      usageCount: abilityUsageCount,
      maxAbilityUsage: abilityInitialUsage,
      turns: abilityTurns,
      maxTurns: abilityInitialTurns,
      effect: abilityEffect,
      buff: abilityBuff,
    };
    return ability;
  }

  public createAbilityFromTemplate(templateName: string): IAbility | null {
    const abilityTemplate = this.templateAbility.find(ability => ability.name === templateName);
    if (!abilityTemplate) {
      return null;
    }

    return this.createAbility(
      abilityTemplate.name,
      abilityTemplate.damage!,
      abilityTemplate.isUsed,
      abilityTemplate.usageCount,
      abilityTemplate.maxAbilityUsage,
      abilityTemplate.turns,
      abilityTemplate.maxTurns,
      abilityTemplate.effect!,
      abilityTemplate.buff,
    );
  }
}
