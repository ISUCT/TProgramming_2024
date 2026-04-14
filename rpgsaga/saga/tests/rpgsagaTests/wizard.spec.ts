import { Wizard } from '../../src/Character/Classes/wizard';
import { SkillFactory } from '../../src/Character/Factories/SkillFactory';

describe('Wizard class methods tests', () => {
  it('Constructor test', () => {
    const skillFactory = new SkillFactory();
    const newWizard = new Wizard(75, 25, 'Merlin', [
      skillFactory.createAbilityFromTemplate('заворожение')!,
      skillFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);
    expect(newWizard).toBeInstanceOf(Wizard);
    expect(newWizard.getHealth).toBe(75);
    expect(newWizard.getStrength).toBe(25);
    expect(newWizard.getName).toBe('Merlin');
  });

  describe('Get methods tests', () => {
    const skillFactory = new SkillFactory();
    const newWizard = new Wizard(75, 25, 'Merlin', [
      skillFactory.createAbilityFromTemplate('заворожение')!,
      skillFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);

    it('getHealth get test', () => {
      expect(newWizard.getHealth).toBe(75);
    });
    it('getStrength get test', () => {
      expect(newWizard.getStrength).toBe(25);
    });
    it('getName get test', () => {
      expect(newWizard.getName).toBe('Merlin');
    });
    it('getClassName get test', () => {
      expect(newWizard.getClassName).toBe('Wizard');
    });
    it('getIsAlive get test', () => {
      expect(newWizard.getIsAlive).toBe(true);
    });
    it('getIsAbilityUsed get test', () => {
      expect(newWizard.getIsAbilityUsed).toBe(false);
    });
    it('getIsAbilityUsed get test after using ability', () => {
      newWizard.useAbility(newWizard, 'ледяные стрелы');
      expect(newWizard.getIsAbilityUsed).toBe(true);
    });
    it('getMaxHealth get test', () => {
      expect(newWizard.getMaxHealth).toBe(75);
    });
    it('getMaxStrength get test', () => {
      expect(newWizard.getMaxStrength).toBe(25);
    });
    it('getSkipTurns get test', () => {
      expect(newWizard.getSkipTurns).toBe(0);
    });
    it('getSkipTurns get test after using skipping spell', () => {
      const opponent = new Wizard(86, 26, 'Mustafa', [
        skillFactory.createAbilityFromTemplate('заворожение')!,
        skillFactory.createAbilityFromTemplate('ледяные стрелы')!,
      ]);
      opponent.useAbility(newWizard, 'заворожение');
      expect(newWizard.getSkipTurns).toBe(1);
    });
  });

  describe('Wizard methods tests', () => {
    const skillFactory = new SkillFactory();
    const newWizard = new Wizard(75, 25, 'Merlin', [
      skillFactory.createAbilityFromTemplate('заворожение')!,
      skillFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);
    const opponent = new Wizard(86, 26, 'Mustafa', [
      skillFactory.createAbilityFromTemplate('заворожение')!,
      skillFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);

    it('Should return health after an attack without using a ability', () => {
      newWizard.attack(opponent);
      expect(opponent.getHealth).toBe(86 - (newWizard.getStrength));
    });

    it('Health should decrease by the number of damage units', () => {
      newWizard.takeDamage(45, opponent.getCurrentAbility);
      expect(newWizard.getHealth).toBe(75 - 45);
    });

    it('Should change the property "abilityUsed" to true', () => {
      newWizard.choseAbility();
      newWizard.useAbility(opponent);
      expect(newWizard.getIsAbilityUsed).toBe(true);
    });

    it('Health should increase', () => {
      newWizard.heal(10);
      expect(newWizard.getHealth).toBe(40);
    });

    it('Health should be equal maxHealth', () => {
      newWizard.heal(100);
      expect(newWizard.getHealth).toBe(newWizard.getMaxHealth);
    });

    it('Merlin should die', () => {
      newWizard.takeDamage(newWizard.getMaxHealth, opponent.getCurrentAbility);
      expect(newWizard.getIsAlive).toBe(false);
      expect(newWizard.getHealth).toBe(0);
    });

    it('Merlin health should be equal 0', () => {
      newWizard.takeDamage(1000, opponent.getCurrentAbility);
      expect(newWizard.getHealth).toBe(0);
    });

    it('Merlin should reset', () => {
      newWizard.reset();
      expect(newWizard.getHealth).toBe(newWizard.getMaxHealth);
      expect(newWizard.getStrength).toBe(newWizard.getMaxStrength);
      expect(newWizard.getIsAbilityUsed).toBe(false);
      newWizard.getAbilities!.forEach(ability => {
        expect(ability.usageCount).toBe(ability.maxAbilityUsage);
        expect(ability.isUsed).toBe(false);
        expect(ability.turns).toBe(ability.maxTurns);
      });
    });

    it('Merlin strength should be equal maxStrength', () => {
      newWizard.useAbility(opponent, 'ледяные стрелы');
      newWizard.attack(opponent);
      newWizard.attack(opponent);
      newWizard.attack(opponent);
      expect(newWizard.getStrength).toBe(25);
    });
  });
});