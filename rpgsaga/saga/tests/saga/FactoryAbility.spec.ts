import { FactoryAbility } from "../../src/Ability/FactoryAbility";
import { Archer } from "../../src/Characters/Archer";


describe('FactoryAbility tests', () => {
  const abilityFactory = new FactoryAbility();

  it('Should create a ability from template', () => {
    const ability = abilityFactory.createAbilityFromTemplate('огненные стрелы');
    expect(ability).toBeDefined();
    expect(ability?.name).toBe('огненные стрелы');
    expect(ability?.usageCount).toBe(1);
    expect(ability?.maxAbilityUsage).toBe(1);
    expect(ability?.effect).toBeUndefined();
  });

  it('Should create a ability from template with turns', () => {
    const ability = abilityFactory.createAbilityFromTemplate('ледяные стрелы');
    expect(ability).toBeDefined();
    expect(ability?.name).toBe('ледяные стрелы');
    expect(ability?.usageCount).toBe(1);
    expect(ability?.maxAbilityUsage).toBe(1);
    expect(ability?.turns).toBe(3);
    expect(ability?.maxTurns).toBe(3);
    expect(ability?.effect).toBeUndefined();
  });

  it('Should create a ability from template with damage calculation', () => {
    const ability = abilityFactory.createAbilityFromTemplate('удар возмездия');
    expect(ability).toBeDefined();
    expect(ability?.name).toBe('удар возмездия');
    expect(ability?.damage).toBeDefined();

    const character = new Archer(100, 20, '', [
      abilityFactory.createAbilityFromTemplate('удар возмездия')!,
    ]);
    const opponent = new Archer(100, 20, '', [
      abilityFactory.createAbilityFromTemplate('удар возмездия')!,
    ]);

    ability?.effect!(character, opponent);
    expect(opponent.health).toBe(100 - (20 * 1.3));
  });

  it('Should create a ability from template with skip turns effect', () => {
    const ability = abilityFactory.createAbilityFromTemplate('заворожение');
    expect(ability).toBeDefined();
    expect(ability?.name).toBe('заворожение');

    const character = new Archer(100, 20, '', [
      abilityFactory.createAbilityFromTemplate('заворожение')!,
    ]);
    const opponent = new Archer(100, 20, '', [
      abilityFactory.createAbilityFromTemplate('заворожение')!,
    ]);

    ability?.effect!(character, opponent);
    expect(opponent.countOfSkipingTurns).toBe(1);
  });

  it('Should return null for an invalid template name', () => {
    const ability = abilityFactory.createAbilityFromTemplate('invalidAbilityName');
    expect(ability).toBeNull();
  });

  it('Should correctly apply ability effects', () => {
    const character = new Archer(100, 20, '', [
      abilityFactory.createAbilityFromTemplate('удар возмездия')!,
    ]);
    const opponent = new Archer(100, 20, '', [
      abilityFactory.createAbilityFromTemplate('удар возмездия')!,
    ]);

    const fireArrows = abilityFactory.createAbilityFromTemplate('огненные стрелы')!;
    expect(character.strength + fireArrows.buff.strength).toBe(22);

    const iceArrows = abilityFactory.createAbilityFromTemplate('ледяные стрелы')!;
    expect(character.strength + iceArrows.buff.strength).toBe(23);

    const vengeanceStrike = abilityFactory.createAbilityFromTemplate('удар возмездия')!;
    vengeanceStrike.effect!(character, opponent);
    expect(opponent.health).toBeLessThan(100);

    const enchantment = abilityFactory.createAbilityFromTemplate('заворожение')!;
    enchantment.effect!(character, opponent);
    expect(opponent.countOfSkipingTurns).toBe(1);
  });
});
