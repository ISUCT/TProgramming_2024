import { IAbility } from "../../src/Ability/Ability";
import { Character } from "../../src/Characters/Сharacter";


describe('IAbility interface tests', () => {
  it('Should create a valid ability object', () => {
    const ability: IAbility = {
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
    const ability: IAbility = {
      name: 'Damage Ability',
      isUsed: false,
      usageCount: 1,
      maxAbilityUsage: 1,
      damage: (caster: Character) => {
        return caster.strength * 2;
      },
    };
    expect(ability.name).toBe('Damage Ability');
    expect(ability.isUsed).toBe(false);
    expect(ability.usageCount).toBe(1);
    expect(ability.maxAbilityUsage).toBe(1);
    expect(ability.damage).toBeDefined();
  });

  it('Should create a valid ability object with turns', () => {
    const ability: IAbility = {
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
    const ability: IAbility = {
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
    const ability: IAbility = {
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
