import { Player } from '../../abstract/Player';
import { ISkill } from '../../skills/ISkill';

export class SkillFabric {
  private skillsTemplate: ISkill[] = [
    {
      name: 'огненные стрелы',
      isUsed: false,
      usageCount: 1,
      initialSkillUsage: 1,
      effect: (caster: Player, opponent: Player) => {
        caster.damageUp(2);
      },
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
      effect: (caster: Player, opponent: Player) => {
        caster.damageUp(3);
      },
      buff: {
        strength: 3,
      },
    },
    {
      name: 'удар возмездия',
      isUsed: false,
      usageCount: 1,
      initialSkillUsage: 1,
      damage: (caster: Player) => caster.strength * 1.3 + caster.weapon.damage,
      effect: (caster: Player, opponent: Player) => {
        const weaponDamage = caster.weapon ? caster.weapon.damage : 0;
        opponent.takeDamage(caster.strength * 1.3 + weaponDamage, caster);
      },
    },
    {
      name: 'заворожение',
      isUsed: false,
      usageCount: 1,
      initialSkillUsage: 1,
      effect: (caster: Player, opponent: Player) => {
        opponent.skipTurns(1);
      },
    },
  ];

  public createSkill(
    skillName: string,
    skillDamage: (caster: Player) => number | undefined,
    isUsedSKill: boolean,
    skillUsageCount: number,
    skillInitialUsage: number,
    skillTurns: number | undefined = undefined,
    skillInitialTurns: number | undefined = undefined,
    skillEffect: (caster: Player, opponent: Player) => void,
    skillBuff: { strength: number } | undefined,
  ) {
    const skill: ISkill = {
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

  public createSkillFromTemplate(templateName: string): ISkill | null {
    const skillTemplate = this.skillsTemplate.find(skill => skill.name === templateName);
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
