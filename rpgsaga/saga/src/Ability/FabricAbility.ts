import { Character } from '../Characters/Сharacter';

import { IAbility } from './Ability';

export class FactoryAbility {
  private templateAbility: IAbility[] = [
    {
      name: 'огненные стрелы',
      isUsed: false,
      usageCount: 1,
      initialSkillUsage: 1,
      buff: {
        strength: 2,
      },
    },
    {
      name: 'ледяные стрелы',
      isUsed: false,
      usageCount: 1,
      initialSkillUsage: 1,
      turns: 3,
      initialTurns: 3,
      buff: {
        strength: 3,
      },
    },
    {
      name: 'удар возмездия',
      isUsed: false,
      usageCount: 1,
      initialSkillUsage: 1,
      damage: (caster: Character) => caster.strength * 1.3,
      effect: (caster: Character, opponent: Character) => {
        opponent.damage(caster.strength * 1.3);
      },
    },
    {
      name: 'заворожение',
      isUsed: false,
      usageCount: 1,
      initialSkillUsage: 1,
      effect: (caster: Character, opponent: Character) => {
        opponent.skipTurns(1);
      },
    },
  ];
  public createSkill(
    skillName: string,
    skillDamage: (caster: Character) => number | undefined,
    isUsedSKill: boolean,
    skillUsageCount: number,
    skillInitialUsage: number,
    skillTurns: number | undefined = undefined,
    skillInitialTurns: number | undefined = undefined,
    skillEffect: (caster: Character, opponent: Character) => void,
    skillBuff: { strength: number } | undefined,
  ) {
    const skill: IAbility = {
      name: skillName,
      damage: skillDamage,
      isUsed: isUsedSKill,
      usageCount: skillUsageCount,
      initialSkillUsage: skillInitialUsage,
      turns: skillTurns,
      initialTurns: skillInitialTurns,
      effect: skillEffect,
      buff: skillBuff,
    };
    return skill;
  }

  public createSkillFromTemplate(templateName: string): IAbility | null {
    const skillTemplate = this.templateAbility.find(skill => skill.name === templateName);
    if (!skillTemplate) {
      return null;
    }

    return this.createSkill(
      skillTemplate.name,
      skillTemplate.damage!,
      skillTemplate.isUsed,
      skillTemplate.usageCount,
      skillTemplate.initialSkillUsage,
      skillTemplate.turns,
      skillTemplate.initialTurns,
      skillTemplate.effect!,
      skillTemplate.buff,
    );
  }
}
