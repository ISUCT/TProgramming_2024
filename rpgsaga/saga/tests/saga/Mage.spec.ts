import { FactoryAbility } from "../../src/Ability/FactoryAbility";
import { Mage } from "../../src/Characters/Mage";


describe('Mage class methods tests', () => {
  it('Constructor test', () => {
    const abilityFactory = new FactoryAbility();
    const newMage = new Mage(75, 25, 'Ibragim', [
      abilityFactory.createAbilityFromTemplate('заворожение')!,
      abilityFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);
    expect(newMage).toBeInstanceOf(Mage);
    expect(newMage.health).toBe(75);
    expect(newMage.strength).toBe(25);
    expect(newMage.name).toBe('Ibragim');
  });

  describe('Get methods tests', () => {
    const abilityFactory = new FactoryAbility();
    const newMage = new Mage(75, 25, 'Ibragim', [
      abilityFactory.createAbilityFromTemplate('заворожение')!,
      abilityFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);

    it('Health get test', () => {
      expect(newMage.health).toBe(75);
    });
    it('Strength get test', () => {
      expect(newMage.strength).toBe(25);
    });
    it('Name get test', () => {
      expect(newMage.name).toBe('Ibragim');
    });
    it('ClassName get test', () => {
      expect(newMage.className).toBe('Mage');
    });
    it('IsAbilityUsed get test', () => {
      expect(newMage.isAbilityUsed).toBe(false);
    });
    it('IsAbilityUsed get test after using ability', () => {
      newMage.useAbility(newMage, 'ледяные стрелы');
      expect(newMage.isAbilityUsed).toBe(true);
    });
    it('InitialHealth get test', () => {
      expect(newMage.maxHealth).toBe(75);
    });
    it('InitialStrength get test', () => {
      expect(newMage.maxStrength).toBe(25);
    });
    it('CountOfSkippingTurns get test', () => {
      expect(newMage.countOfSkipingTurns).toBe(0);
    });
    it('CountOfSkippingTurns get test after using skipping spell', () => {
      const opponent = new Mage(86, 26, 'Mustafa', [
        abilityFactory.createAbilityFromTemplate('заворожение')!,
        abilityFactory.createAbilityFromTemplate('ледяные стрелы')!,
      ]);
      opponent.useAbility(newMage, 'заворожение');
      expect(newMage.countOfSkipingTurns).toBe(1);
    });
  });

  describe('Mage methods tests', () => {
    const abilityFactory = new FactoryAbility();
    const newMage = new Mage(75, 25, 'Ibragim', [
      abilityFactory.createAbilityFromTemplate('заворожение')!,
      abilityFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);
    const opponent = new Mage(86, 26, 'Mustafa', [
      abilityFactory.createAbilityFromTemplate('заворожение')!,
      abilityFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);

    it('Should return health after an attack whithout using a ability', () => {
      newMage.attack(opponent);
      expect(opponent.health).toBe(86 - (newMage.strength));
    });

    it('Health should decrease by the number of damage units', () => {
      newMage.damage(45, opponent.currentAbility);
      expect(newMage.health).toBe(75 - 45);
    });

    it('Should change the propertie "abilityUsed" to true', () => {
      newMage.choseAbility();
      newMage.useAbility(opponent);
      expect(newMage.isAbilityUsed).toBe(true);
    });

    it('Health should icnrease', () => {
      newMage.heal(10);
      expect(newMage.health).toBe(40);
    });

    it('Health should be equal maxHealth', () => {
      newMage.heal(100);
      expect(newMage.health).toBe(newMage.maxHealth);
    });

    it('Ibragim should DIE.', () => {
      newMage.damage(newMage.maxHealth, opponent.currentAbility);
      expect(newMage.health).toBe(0);
    });

    it('Ibragim health should be equal 0.', () => {
      newMage.damage(1000, opponent.currentAbility);
      expect(newMage.health).toBe(0);
    });

    it('Ibragim should reset.', () => {
      newMage.reset();
      expect(newMage.health).toBe(newMage.maxHealth);
      expect(newMage.strength).toBe(newMage.maxStrength);
      expect(newMage.isAbilityUsed).toBe(false);
      newMage.abilities!.forEach(ability => {
        expect(ability.usageCount).toBe(ability.maxAbilityUsage);
        expect(ability.isUsed).toBe(false);
        expect(ability.turns).toBe(ability.maxTurns);
      });
    });

    it('Ibragim strength should be equal maxStrength.', () => {
      newMage.useAbility(opponent, 'ледяные стрелы');
      newMage.attack(opponent);
      newMage.attack(opponent);
      newMage.attack(opponent);
      expect(newMage.strength).toBe(25);
    });
  });
});
