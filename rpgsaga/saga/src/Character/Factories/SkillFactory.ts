import { Hero } from '../hero';
import { Ability } from '../ability';

export class SkillFactory {
  private abilitiesTemplate: Ability[] = [
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
      damage: (caster: Hero) => caster.getStrength * 1.3,
      effect: (caster: Hero, opponent: Hero) => {
        opponent.takeDamage(caster.getStrength * 1.3);
      },
    },
    {
      name: 'заворожение',
      isUsed: false,
      usageCount: 1,
      maxAbilityUsage: 1,
      effect: (caster: Hero, opponent: Hero) => {
        opponent.skipTurns(1);
      },
    },
  ];

  public createAbility(
    abilityName: string,
    abilityDamage: (caster: Hero) => number | undefined,
    isUsedAbility: boolean,
    abilityUsageCount: number,
    abilityMaxUsage: number,
    abilityTurns: number | undefined = undefined,
    abilityMaxTurns: number | undefined = undefined,
    abilityEffect: (caster: Hero, opponent: Hero) => void,
    abilityBuff: { strength: number } | undefined,
  ) {
    const ability: Ability = {
      name: abilityName,
      damage: abilityDamage,
      isUsed: isUsedAbility,
      usageCount: abilityUsageCount,
      maxAbilityUsage: abilityMaxUsage,
      turns: abilityTurns,
      maxTurns: abilityMaxTurns,
      effect: abilityEffect,
      buff: abilityBuff,
    };
    return ability;
  }

  public createAbilityFromTemplate(templateName: string): Ability | null {
    const abilityTemplate = this.abilitiesTemplate.find(ability => ability.name === templateName);
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
