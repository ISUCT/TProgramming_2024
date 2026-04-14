import { Archer } from '../../src/Character/Classes/archer';
import { Knight } from '../../src/Character/Classes/knight';
import { Wizard } from '../../src/Character/Classes/wizard';
import { SkillFactory } from '../../src/Character/Factories/SkillFactory';

describe('Knight class methods tests', () => {
  it('Constructor test', () => {
    const skillFactory = new SkillFactory();
    const newKnight = new Knight(75, 25, 'Roland', [
      skillFactory.createAbilityFromTemplate('удар возмездия')!,
      skillFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);
    expect(newKnight).toBeInstanceOf(Knight);
    expect(newKnight.getHealth).toBe(75);
    expect(newKnight.getStrength).toBe(25);
    expect(newKnight.getName).toBe('Roland');
  });

  describe('Get methods tests', () => {
    const skillFactory = new SkillFactory();
    const newKnight = new Knight(75, 25, 'Roland', [
      skillFactory.createAbilityFromTemplate('удар возмездия')!,
      skillFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);

    it('getHealth get test', () => {
      expect(newKnight.getHealth).toBe(75);
    });
    it('getStrength get test', () => {
      expect(newKnight.getStrength).toBe(25);
    });
    it('getName get test', () => {
      expect(newKnight.getName).toBe('Roland');
    });
    it('getClassName get test', () => {
      expect(newKnight.getClassName).toBe('Knight');
    });
    it('getIsAlive get test', () => {
      expect(newKnight.getIsAlive).toBe(true);
    });
    it('getIsAbilityUsed get test', () => {
      expect(newKnight.getIsAbilityUsed).toBe(false);
    });
    it('getIsAbilityUsed get test after using ability', () => {
      newKnight.choseAbility();
      newKnight.useAbility(newKnight);
      expect(newKnight.getIsAbilityUsed).toBe(true);
    });
    it('getMaxHealth get test', () => {
      expect(newKnight.getMaxHealth).toBe(75);
    });
    it('getMaxStrength get test', () => {
      expect(newKnight.getMaxStrength).toBe(25);
    });
    it('getSkipTurns get test', () => {
      expect(newKnight.getSkipTurns).toBe(0);
    });
    it('getSkipTurns get test after using skipping spell', () => {
      const opponent = new Wizard(86, 26, 'Deimos', [
        skillFactory.createAbilityFromTemplate('заворожение')!,
        skillFactory.createAbilityFromTemplate('ледяные стрелы')!,
      ]);
      opponent.useAbility(newKnight, 'заворожение');
      expect(newKnight.getSkipTurns).toBe(1);
    });
  });

  describe('Knight methods tests', () => {
    const skillFactory = new SkillFactory();
    const newKnight = new Knight(75, 25, 'Roland', [
      skillFactory.createAbilityFromTemplate('удар возмездия')!,
      skillFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);
    const opponent = new Archer(86, 26, 'Deimos', [
      skillFactory.createAbilityFromTemplate('огненные стрелы')!,
      skillFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);

    it('Should return health after an attack whithout using ability', () => {
      newKnight.attack(opponent);
      expect(opponent.getHealth).toBe(86 - (newKnight.getStrength));
    });

    it('Health should decrease by the number of damage units', () => {
      newKnight.takeDamage(45, opponent.getCurrentAbility);
      expect(newKnight.getHealth).toBe(75 - 45);
    });

    it('Health should decrease by the number of damage units without ability buff', () => {
      newKnight.heal(100);
      opponent.useAbility(newKnight, 'ледяные стрелы');
      opponent.attack(newKnight);
      expect(newKnight.getHealth).toBe(75 - (opponent.getStrength));
    });

    it('Should change the property "abilityUsed" to true', () => {
      newKnight.choseAbility();
      newKnight.useAbility(opponent);
      expect(newKnight.getIsAbilityUsed).toBe(true);
    });

    it('Health should increase', () => {
      newKnight.heal(10);
      expect(newKnight.getHealth).toBe(75 - (opponent.getStrength) + 10);
    });

    it('Health should be equal maxHealth', () => {
      newKnight.heal(100);
      expect(newKnight.getHealth).toBe(newKnight.getMaxHealth);
    });

    it('Roland should die', () => {
      newKnight.takeDamage(newKnight.getMaxHealth);
      expect(newKnight.getIsAlive).toBe(false);
      expect(newKnight.getHealth).toBe(0);
    });

    it('Roland health should be equal 0', () => {
      newKnight.takeDamage(1000, opponent.getCurrentAbility);
      expect(newKnight.getHealth).toBe(0);
    });

    it('Roland should reset', () => {
      newKnight.reset();
      expect(newKnight.getHealth).toBe(newKnight.getMaxHealth);
      expect(newKnight.getStrength).toBe(newKnight.getMaxStrength);
      expect(newKnight.getIsAbilityUsed).toBe(false);
      newKnight.getAbilities!.forEach(ability => {
        expect(ability.usageCount).toBe(ability.maxAbilityUsage);
        expect(ability.isUsed).toBe(false);
        expect(ability.turns).toBe(ability.maxTurns);
      });
    });

    it('Roland strength should be equal maxStrength', () => {
      newKnight.useAbility(opponent, 'ледяные стрелы');
      newKnight.attack(opponent);
      newKnight.attack(opponent);
      newKnight.attack(opponent);
      expect(newKnight.getStrength).toBe(25);
    });
  });
});
