import { SkillFactory } from '../../src/Character/Factories/SkillFactory';
import { Archer } from '../../src/Character/Classes/archer';

describe('SkillFactory tests', () => {
  const skillFactory = new SkillFactory();

  it('Should create a ability from template', () => {
    const ability = skillFactory.createAbilityFromTemplate('огненные стрелы');
    expect(ability).toBeDefined();
    expect(ability?.name).toBe('огненные стрелы');
    expect(ability?.usageCount).toBe(1);
    expect(ability?.maxAbilityUsage).toBe(1);
    expect(ability?.effect).toBeUndefined();
  });

  it('Should create a ability from template with turns', () => {
    const ability = skillFactory.createAbilityFromTemplate('ледяные стрелы');
    expect(ability).toBeDefined();
    expect(ability?.name).toBe('ледяные стрелы');
    expect(ability?.usageCount).toBe(1);
    expect(ability?.maxAbilityUsage).toBe(1);
    expect(ability?.turns).toBe(3);
    expect(ability?.maxTurns).toBe(3);
    expect(ability?.effect).toBeUndefined();
  });

  it('Should create a ability from template with damage calculation', () => {
    const ability = skillFactory.createAbilityFromTemplate('удар возмездия');
    expect(ability).toBeDefined();
    expect(ability?.name).toBe('удар возмездия');
    expect(ability?.damage).toBeDefined();

    const player = new Archer(100, 20, '', []);
    const opponent = new Archer(100, 10, '', []);

    ability?.effect!(player, opponent);
    expect(opponent.getHealth).toBe(100 - (20 * 1.3));
  });

  it('Should create a ability from template with skip turns effect', () => {
    const ability = skillFactory.createAbilityFromTemplate('заворожение');
    expect(ability).toBeDefined();
    expect(ability?.name).toBe('заворожение');

    const player = new Archer(100, 20, '', []);
    const opponent = new Archer(100, 10, '', []);

    ability?.effect!(player, opponent);
    expect(opponent.getSkipTurns).toBe(1);
  });

  it('Should return null for an invalid template name', () => {
    const ability = skillFactory.createAbilityFromTemplate('invalidAbilityName');
    expect(ability).toBeNull();
  });

  it('Should correctly apply ability effects', () => {
    const player = new Archer(100, 20, '', []);
    const opponent = new Archer(100, 10, '', []);

    const fireArrows = skillFactory.createAbilityFromTemplate('огненные стрелы')!;
    expect(player.getStrength + fireArrows.buff.strength).toBe(22);

    const iceArrows = skillFactory.createAbilityFromTemplate('ледяные стрелы')!;
    expect(player.getStrength + iceArrows.buff.strength).toBe(23);

    const vengeanceStrike = skillFactory.createAbilityFromTemplate('удар возмездия')!;
    vengeanceStrike.effect!(player, opponent);
    expect(opponent.getHealth).toBeLessThan(100);

    const enchantment = skillFactory.createAbilityFromTemplate('заворожение')!;
    enchantment.effect!(player, opponent);
    expect(opponent.getSkipTurns).toBe(1);
  });
});
