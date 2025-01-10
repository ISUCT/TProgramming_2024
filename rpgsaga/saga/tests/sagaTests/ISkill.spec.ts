import { Player } from '../../src/game/abstract/Player';
import { ISkill } from '../../src/game/skills/ISkill';

describe('ISkill interface tests', () => {
  it('Should create a valid skill object', () => {
    const skill: ISkill = {
      name: 'Test Skill',
      isUsed: false,
      usageCount: 3,
      initialSkillUsage: 3,
      effect: (caster, opponent) => {},
    };
    expect(skill.name).toBe('Test Skill');
    expect(skill.isUsed).toBe(false);
    expect(skill.usageCount).toBe(3);
    expect(skill.initialSkillUsage).toBe(3);
    expect(skill.effect).toBeDefined();
  });

  it('Should create a valid skill object with damage function', () => {
    const skill: ISkill = {
      name: 'Damage Skill',
      isUsed: false,
      usageCount: 1,
      initialSkillUsage: 1,
      damage: (caster: Player) => {
        return caster.strength * 2;
      },
    };
    expect(skill.name).toBe('Damage Skill');
    expect(skill.isUsed).toBe(false);
    expect(skill.usageCount).toBe(1);
    expect(skill.initialSkillUsage).toBe(1);
    expect(skill.damage).toBeDefined();
  });

  it('Should create a valid skill object with turns', () => {
    const skill: ISkill = {
      name: 'Timed Skill',
      isUsed: false,
      usageCount: 1,
      initialSkillUsage: 1,
      turns: 3,
      initialTurns: 3,
    };
    expect(skill.name).toBe('Timed Skill');
    expect(skill.isUsed).toBe(false);
    expect(skill.usageCount).toBe(1);
    expect(skill.initialSkillUsage).toBe(1);
    expect(skill.turns).toBe(3);
    expect(skill.initialTurns).toBe(3);
  });

  it('Should create a valid skill object with buff', () => {
    const skill: ISkill = {
      name: 'Buff Skill',
      isUsed: false,
      usageCount: 1,
      initialSkillUsage: 1,
      buff: {
        strength: 5,
      },
    };
    expect(skill.name).toBe('Buff Skill');
    expect(skill.isUsed).toBe(false);
    expect(skill.usageCount).toBe(1);
    expect(skill.initialSkillUsage).toBe(1);
    expect(skill.buff).toBeDefined();
    expect(skill.buff!.strength).toBe(5);
  });

  it('Should handle a skill with optional properties', () => {
    const skill: ISkill = {
      name: 'Basic Skill',
      isUsed: false,
      usageCount: 1,
      initialSkillUsage: 1,
    };
    expect(skill.name).toBe('Basic Skill');
    expect(skill.isUsed).toBe(false);
    expect(skill.usageCount).toBe(1);
    expect(skill.initialSkillUsage).toBe(1);
    expect(skill.damage).toBeUndefined();
    expect(skill.effect).toBeUndefined();
    expect(skill.buff).toBeUndefined();
    expect(skill.turns).toBeUndefined();
    expect(skill.initialTurns).toBeUndefined();
  });
});
