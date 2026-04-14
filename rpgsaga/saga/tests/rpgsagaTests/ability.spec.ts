import { Hero } from '../../src/Character/hero';
import { Ability } from '../../src/Character/ability';

describe('Ability interface tests', () => {
  it('Should create a valid ability object', () => {
    const ability: Ability = {
      name: 'Test Ability',
      isUsed: false,
      usageCount: 3,
      maxAbilityUsage: 3,
      effect: (caster, opponent) => {},
    };
    expect(ability.name).toBe('Test Ability');
    expect(ability.isUsed).toBe(false);
    expect(ability.usageCount).toBe(3);
    expect(ability.maxAbilityUsage).toBe(3);
    expect(ability.effect).toBeDefined();
  });

  it('Should create a valid ability object with damage function', () => {
    const ability: Ability = {
      name: 'Damage Ability',
      isUsed: false,
      usageCount: 1,
      maxAbilityUsage: 1,
      damage: (caster: Hero) => {
        return caster.getStrength * 2;
      },
    };
    expect(ability.name).toBe('Damage Ability');
    expect(ability.isUsed).toBe(false);
    expect(ability.usageCount).toBe(1);
    expect(ability.maxAbilityUsage).toBe(1);
    expect(ability.damage).toBeDefined();
  });

  it('Should create a valid ability object with turns', () => {
    const ability: Ability = {
      name: 'Timed Ability',
      isUsed: false,
      usageCount: 1,
      maxAbilityUsage: 1,
      turns: 3,
      maxTurns: 3,
    };
    expect(ability.name).toBe('Timed Ability');
    expect(ability.isUsed).toBe(false);
    expect(ability.usageCount).toBe(1);
    expect(ability.maxAbilityUsage).toBe(1);
    expect(ability.turns).toBe(3);
    expect(ability.maxTurns).toBe(3);
  });

  it('Should create a valid ability object with buff', () => {
    const ability: Ability = {
      name: 'Buff Ability',
      isUsed: false,
      usageCount: 1,
      maxAbilityUsage: 1,
      buff: {
        strength: 5,
      },
    };
    expect(ability.name).toBe('Buff Ability');
    expect(ability.isUsed).toBe(false);
    expect(ability.usageCount).toBe(1);
    expect(ability.maxAbilityUsage).toBe(1);
    expect(ability.buff).toBeDefined();
    expect(ability.buff!.strength).toBe(5);
  });

  it('Should handle a ability with optional properties', () => {
    const ability: Ability = {
      name: 'Basic Ability',
      isUsed: false,
      usageCount: 1,
      maxAbilityUsage: 1,
    };
    expect(ability.name).toBe('Basic Ability');
    expect(ability.isUsed).toBe(false);
    expect(ability.usageCount).toBe(1);
    expect(ability.maxAbilityUsage).toBe(1);
    expect(ability.damage).toBeUndefined();
    expect(ability.effect).toBeUndefined();
    expect(ability.buff).toBeUndefined();
    expect(ability.turns).toBeUndefined();
    expect(ability.maxTurns).toBeUndefined();
  });
});