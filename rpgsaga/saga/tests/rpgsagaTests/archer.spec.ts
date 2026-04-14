import { Archer } from '../../src/Character/Classes/archer';
import { Wizard } from '../../src/Character/Classes/wizard';
import { SkillFactory } from '../../src/Character/Factories/SkillFactory';

describe('Archer class methods tests', () => {
  it('Constructor test', () => {
    const skillFactory = new SkillFactory();
    const newArcher = new Archer(75, 25, 'Legolas', [
      skillFactory.createAbilityFromTemplate('огненные стрелы')!,
      skillFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);
    expect(newArcher).toBeInstanceOf(Archer);
    expect(newArcher.getHealth).toBe(75);
    expect(newArcher.getStrength).toBe(25);
    expect(newArcher.getName).toBe('Legolas');
  });

  describe('Get methods tests', () => {
    const skillFactory = new SkillFactory();
    const newArcher = new Archer(75, 25, 'Legolas', [
      skillFactory.createAbilityFromTemplate('огненные стрелы')!,
      skillFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);

    it('getHealth get test', () => {
      expect(newArcher.getHealth).toBe(75);
    });
    it('getStrength get test', () => {
      expect(newArcher.getStrength).toBe(25);
    });
    it('getName get test', () => {
      expect(newArcher.getName).toBe('Legolas');
    });
    it('getClassName get test', () => {
      expect(newArcher.getClassName).toBe('Archer');
    });
    it('getIsAlive get test', () => {
      expect(newArcher.getIsAlive).toBe(true);
    });
    it('getIsAbilityUsed get test', () => {
      expect(newArcher.getIsAbilityUsed).toBe(false);
    });
    it('getIsAbilityUsed get test after using ability', () => {
      newArcher.choseAbility();
      newArcher.useAbility(newArcher);
      expect(newArcher.getIsAbilityUsed).toBe(true);
    });
    it('getMaxHealth get test', () => {
      expect(newArcher.getMaxHealth).toBe(75);
    });
    it('getMaxStrength get test', () => {
      expect(newArcher.getMaxStrength).toBe(25);
    });
    it('getSkipTurns get test', () => {
      expect(newArcher.getSkipTurns).toBe(0);
    });
    it('getSkipTurns get test after using skipping spell', () => {
      const opponent = new Wizard(86, 26, 'Gargamel', [
        skillFactory.createAbilityFromTemplate('заворожение')!,
        skillFactory.createAbilityFromTemplate('ледяные стрелы')!,
      ]);
      opponent.useAbility(newArcher, 'заворожение');
      expect(newArcher.getSkipTurns).toBe(1);
    });
  });

  describe('Archer methods tests', () => {
    const skillFactory = new SkillFactory();
    const newArcher = new Archer(75, 25, 'Legolas', [
      skillFactory.createAbilityFromTemplate('огненные стрелы')!,
    ]);
    const opponent = new Archer(86, 26, 'Gargamel', [
      skillFactory.createAbilityFromTemplate('огненные стрелы')!,
      skillFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);

    it('Атака огненными стрелами', () => {
      newArcher.choseAbility();
      newArcher.useAbility(opponent);
      newArcher.attack(opponent);
      expect(newArcher.getIsAbilityUsed).toBe(true);
      expect(opponent.getHealth).toBe(59);
      newArcher.attack(opponent);
      expect(opponent.getHealth).toBe(32);
      newArcher.attack(opponent);
      expect(opponent.getHealth).toBe(5);
    })

    it('Should return health after an attack whithout using ability', () => {
      newArcher.attack(opponent);
      expect(opponent.getHealth).toBe(86 - (newArcher.getStrength));
    });

    it('Health should decrease by the number of damage units', () => {
      newArcher.takeDamage(45, opponent.getCurrentAbility);
      expect(newArcher.getHealth).toBe(75 - 45);
    });

    it('Should change the property "abilityUsed" to true', () => {
      newArcher.choseAbility();
      newArcher.useAbility(opponent);
      expect(newArcher.getIsAbilityUsed).toBe(true);
    });

    it('Health should increase', () => {
      newArcher.heal(10);
      expect(newArcher.getHealth).toBe(40);
    });

    it('Health should be equal maxHealth', () => {
      newArcher.heal(100);
      expect(newArcher.getHealth).toBe(newArcher.getMaxHealth);
    });

    it('Legolas should die', () => {
      newArcher.takeDamage(newArcher.getMaxHealth, opponent.getCurrentAbility);
      expect(newArcher.getIsAlive).toBe(false);
      expect(newArcher.getHealth).toBe(0);
    });

    it('Legolas health should be equal 0', () => {
      newArcher.takeDamage(1000, opponent.getCurrentAbility);
      expect(newArcher.getHealth).toBe(0);
    });

    it('Legolas should reset', () => {
      newArcher.reset();
      expect(newArcher.getHealth).toBe(newArcher.getMaxHealth);
      expect(newArcher.getStrength).toBe(newArcher.getMaxStrength);
      expect(newArcher.getIsAbilityUsed).toBe(false);
      newArcher.getAbilities!.forEach(ability => {
        expect(ability.usageCount).toBe(ability.maxAbilityUsage);
        expect(ability.isUsed).toBe(false);
        expect(ability.turns).toBe(ability.maxTurns);
      });
    });

    it('Legolas strength should be equal maxStrength', () => {
      newArcher.useAbility(opponent, 'ледяные стрелы');
      newArcher.attack(opponent);
      newArcher.useAbility(opponent, 'огненные стрелы');
      newArcher.attack(opponent);
      newArcher.attack(opponent);
      expect(newArcher.getStrength).toBe(25);
    });
  });
});