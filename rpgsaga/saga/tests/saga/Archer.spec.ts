import { FactoryAbility } from "../../src/Ability/FactoryAbility";
import { Archer } from "../../src/Characters/Archer";
import { Mage } from "../../src/Characters/Mage";


describe('Archer class methods tests', () => {
  it('Constructor test', () => {
    const abilityFactory = new FactoryAbility();
    const newArcher = new Archer(75, 25, 'Ibragim', [
      abilityFactory.createAbilityFromTemplate('огненные стрелы')!,
      abilityFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);
    expect(newArcher).toBeInstanceOf(Archer);
    expect(newArcher.health).toBe(75);
    expect(newArcher.strength).toBe(25);
    expect(newArcher.name).toBe('Ibragim');
  });

  describe('Get methods tests', () => {
    const abilityFactory = new FactoryAbility();
    const newArcher = new Archer(75, 25, 'Ibragim', [
      abilityFactory.createAbilityFromTemplate('огненные стрелы')!,
      abilityFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);

    it('Health get test', () => {
      expect(newArcher.health).toBe(75);
    });
    it('Strength get test', () => {
      expect(newArcher.strength).toBe(25);
    });
    it('Name get test', () => {
      expect(newArcher.name).toBe('Ibragim');
    });
    it('ClassName get test', () => {
      expect(newArcher.className).toBe('Archer');
    });
    it('IsAbilityUsed get test', () => {
      expect(newArcher.isAbilityUsed).toBe(false);
    });
    it('IsAbilityUsed get test after using ability', () => {
      newArcher.choseAbility();
      newArcher.useAbility(newArcher);
      expect(newArcher.isAbilityUsed).toBe(true);
    });
    it('InitialHealth get test', () => {
      expect(newArcher.maxHealth).toBe(75);
    });
    it('InitialStrength get test', () => {
      expect(newArcher.maxStrength).toBe(25);
    });
    it('CountOfSkippingTurns get test', () => {
      expect(newArcher.countOfSkipingTurns).toBe(0);
    });
    it('CountOfSkippingTurns get test after using skipping spell', () => {
      const opponent = new Mage(86, 26, 'Mustafa', [
        abilityFactory.createAbilityFromTemplate('заворожение')!,
        abilityFactory.createAbilityFromTemplate('ледяные стрелы')!,
      ]);
      opponent.useAbility(newArcher, 'заворожение');
      expect(newArcher.countOfSkipingTurns).toBe(1);
    });
  });

  describe('Archer methods tests', () => {
    const abilityFactory = new FactoryAbility();
    const newArcher = new Archer(75, 25, 'Ibragim', [
      abilityFactory.createAbilityFromTemplate('огненные стрелы')!,
      abilityFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);
    const opponent = new Archer(86, 26, 'Mustafa', [
      abilityFactory.createAbilityFromTemplate('огненные стрелы')!,
      abilityFactory.createAbilityFromTemplate('ледяные стрелы')!,
    ]);

    it('Should return health after an attack whithout using a ability', () => {
      newArcher.attack(opponent);
      expect(opponent.health).toBe(86 - (newArcher.strength));
    });

    it('Health should decrease by the number of damage units', () => {
      newArcher.damage(45, opponent.currentAbility);
      expect(newArcher.health).toBe(75 - 45);
    });

    it('Should change the propertie "abilityUsed" to true', () => {
      newArcher.choseAbility();
      newArcher.useAbility(opponent);
      expect(newArcher.isAbilityUsed).toBe(true);
    });

    it('Health should icnrease', () => {
      newArcher.heal(10);
      expect(newArcher.health).toBe(40);
    });

    it('Health should be equal maxHealth', () => {
      newArcher.heal(100);
      expect(newArcher.health).toBe(newArcher.maxHealth);
    });

    it('Ibragim should DIE.', () => {
      newArcher.damage(newArcher.maxHealth, opponent.currentAbility);
      expect(newArcher.health).toBe(0);
    });

    it('Ibragim health should be equal 0.', () => {
      newArcher.damage(1000, opponent.currentAbility);
      expect(newArcher.health).toBe(0);
    });

    it('Ibragim should reset.', () => {
      newArcher.reset();
      expect(newArcher.health).toBe(newArcher.maxHealth);
      expect(newArcher.strength).toBe(newArcher.maxStrength);
      expect(newArcher.isAbilityUsed).toBe(false);
      newArcher.abilities!.forEach(ability => {
        expect(ability.usageCount).toBe(ability.maxAbilityUsage);
        expect(ability.isUsed).toBe(false);
        expect(ability.turns).toBe(ability.maxTurns);
      });
    });

    it('Ibragim strength should be equal maxStrength.', () => {
      newArcher.useAbility(opponent, 'ледяные стрелы');
      newArcher.attack(opponent);
      newArcher.useAbility(opponent, 'огненные стрелы');
      newArcher.attack(opponent);
      newArcher.attack(opponent);
      expect(newArcher.strength).toBe(25);
    });
  });
});
