import { FactoryAbility } from "../../src/Ability/FactoryAbility";
import { Archer } from "../../src/Characters/Archer";
import { Knight } from "../../src/Characters/Knight";
import { Mage } from "../../src/Characters/Mage";


describe('Knight class methods tests', () => {
  it('Constructor test', () => {
    const abilityFactory = new FactoryAbility();
    const newKnight = new Knight(75, 25, 'Ibragim', [
      abilityFactory.createAbilityFromTemplate('удар возмездия')!,
      abilityFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);
    expect(newKnight).toBeInstanceOf(Knight);
    expect(newKnight.health).toBe(75);
    expect(newKnight.strength).toBe(25);
    expect(newKnight.name).toBe('Ibragim');
  });

  describe('Get methods tests', () => {
    const abilityFactory = new FactoryAbility();
    const newKnight = new Knight(75, 25, 'Ibragim', [
      abilityFactory.createAbilityFromTemplate('удар возмездия')!,
      abilityFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);

    it('Health get test', () => {
      expect(newKnight.health).toBe(75);
    });
    it('Strength get test', () => {
      expect(newKnight.strength).toBe(25);
    });
    it('Name get test', () => {
      expect(newKnight.name).toBe('Ibragim');
    });
    it('ClassName get test', () => {
      expect(newKnight.className).toBe('Knight');
    });
    it('IsAbilityUsed get test', () => {
      expect(newKnight.isAbilityUsed).toBe(false);
    });
    it('IsAbilityUsed get test after using ability', () => {
      newKnight.choseAbility();
      newKnight.useAbility(newKnight);
      expect(newKnight.isAbilityUsed).toBe(true);
    });
    it('InitialHealth get test', () => {
      expect(newKnight.maxHealth).toBe(75);
    });
    it('InitialStrength get test', () => {
      expect(newKnight.maxStrength).toBe(25);
    });
    it('CountOfSkippingTurns get test', () => {
      expect(newKnight.countOfSkipingTurns).toBe(0);
    });
    it('CountOfSkippingTurns get test after using skipping spell', () => {
      const opponent = new Mage(86, 26, 'Mustafa', [
        abilityFactory.createAbilityFromTemplate('заворожение')!,
        abilityFactory.createAbilityFromTemplate('ледяные стрелы')!,
      ]);
      opponent.useAbility(newKnight, 'заворожение');
      expect(newKnight.countOfSkipingTurns).toBe(1);
    });
  });

  describe('Knight methods tests', () => {
    const abilityFactory = new FactoryAbility();
    const newKnight = new Knight(75, 25, 'Ibragim', [
      abilityFactory.createAbilityFromTemplate('удар возмездия')!,
      abilityFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);
    const opponent = new Archer(86, 26, 'Mustafa', [
      abilityFactory.createAbilityFromTemplate('огненные стрелы')!,
      abilityFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);

    it('Should return health after an attack whithout using a ability', () => {
      newKnight.attack(opponent);
      expect(opponent.health).toBe(86 - (newKnight.strength));
    });

    it('Health should decrease by the number of damage units', () => {
      newKnight.damage(45, opponent.currentAbility);
      expect(newKnight.health).toBe(75 - 45);
    });

    it('Health should decrease by the number of damage units without ability buff', () => {
      newKnight.heal(100);
      opponent.useAbility(newKnight, 'ледяные стрелы');
      opponent.attack(newKnight);
      expect(newKnight.health).toBe(72 - (opponent.strength));
    });

    it('Should change the propertie "abilityUsed" to true', () => {
      newKnight.choseAbility();
      newKnight.useAbility(opponent);
      expect(newKnight.isAbilityUsed).toBe(true);
    });

    it('Health should icnrease', () => {
      newKnight.heal(10);
      expect(newKnight.health).toBe(72 - (opponent.strength) + 10);
    });

    it('Health should be equal maxHealth', () => {
      newKnight.heal(100);
      expect(newKnight.health).toBe(newKnight.maxHealth);
    });

    it('Ibragim should DIE.', () => {
      newKnight.damage(newKnight.maxHealth);
      expect(newKnight.health).toBe(0);
    });

    it('Ibragim health should be equal 0.', () => {
      newKnight.damage(1000, opponent.currentAbility);
      expect(newKnight.health).toBe(0);
    });

    it('Ibragim should reset.', () => {
      newKnight.reset();
      expect(newKnight.health).toBe(newKnight.maxHealth);
      expect(newKnight.strength).toBe(newKnight.maxStrength);
      expect(newKnight.isAbilityUsed).toBe(false);
      newKnight.abilities!.forEach(ability => {
        expect(ability.usageCount).toBe(ability.maxAbilityUsage);
        expect(ability.isUsed).toBe(false);
        expect(ability.turns).toBe(ability.maxTurns);
      });
    });

    it('Ibragim strength should be equal maxStrength.', () => {
      newKnight.useAbility(opponent, 'ледяные стрелы');
      newKnight.attack(opponent);
      newKnight.attack(opponent);
      newKnight.attack(opponent);
      expect(newKnight.strength).toBe(25);
    });
  });
});
