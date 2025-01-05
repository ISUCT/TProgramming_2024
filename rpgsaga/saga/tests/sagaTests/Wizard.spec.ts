import { Wizard } from '../../src/game/classes';
import { SkillFabric } from '../../src/game/fabrics/skillFabric/SkillFabric';
import { WeaponFabric } from '../../src/game/fabrics/weaponsFabric/WeaponFabric';

describe('Wizard class methods tests', () => {
  it('Constructor test', () => {
    const weaponFabric = new WeaponFabric();
    const skillFabric = new SkillFabric();
    const newWizard = new Wizard(75, 25, 'Ibragim', weaponFabric.createRandomWeapon('stick'), [
      skillFabric.createSkillFromTemplate('заворожение')!,
      skillFabric.createSkillFromTemplate('ледяные стрелы')!,
    ]);
    expect(newWizard).toBeInstanceOf(Wizard);
    expect(newWizard.health).toBe(75);
    expect(newWizard.strength).toBe(25);
    expect(newWizard.name).toBe('Ibragim');
  });

  describe('Get methods tests', () => {
    const weaponFabric = new WeaponFabric();
    const skillFabric = new SkillFabric();
    const newWizard = new Wizard(75, 25, 'Ibragim', weaponFabric.createRandomWeapon('stick'), [
      skillFabric.createSkillFromTemplate('заворожение')!,
      skillFabric.createSkillFromTemplate('ледяные стрелы')!,
    ]);

    it('Health get test', () => {
      expect(newWizard.health).toBe(75);
    });
    it('Strength get test', () => {
      expect(newWizard.strength).toBe(25);
    });
    it('Name get test', () => {
      expect(newWizard.name).toBe('Ibragim');
    });
    it('ClassName get test', () => {
      expect(newWizard.className).toBe('Wizard');
    });
    it('IsAlive get test', () => {
      expect(newWizard.isAlive).toBe(true);
    });
    it('IsSkillUsed get test', () => {
      expect(newWizard.isSkillUsed).toBe(false);
    });
    it('IsSkillUsed get test after using skill', () => {
      newWizard.useSkill(newWizard, 'ледяные стрелы');
      expect(newWizard.isSkillUsed).toBe(true);
    });
    it('InitialHealth get test', () => {
      expect(newWizard.initialHealth).toBe(75);
    });
    it('InitialStrength get test', () => {
      expect(newWizard.initialStrength).toBe(25);
    });
    it('CountOfSkippingTurns get test', () => {
      expect(newWizard.countOfSkipingTurns).toBe(0);
    });
    it('CountOfSkippingTurns get test after using skipping spell', () => {
      const opponent = new Wizard(86, 26, 'Mustafa', weaponFabric.createRandomWeapon('stick'), [
        skillFabric.createSkillFromTemplate('заворожение')!,
        skillFabric.createSkillFromTemplate('ледяные стрелы')!,
      ]);
      opponent.useSkill(newWizard, 'заворожение');
      expect(newWizard.countOfSkipingTurns).toBe(1);
    });
  });

  describe('Wizard methods tests', () => {
    const weaponFabric = new WeaponFabric();
    const skillFabric = new SkillFabric();
    const newWizard = new Wizard(75, 25, 'Ibragim', weaponFabric.createRandomWeapon('stick'), [
      skillFabric.createSkillFromTemplate('заворожение')!,
      skillFabric.createSkillFromTemplate('ледяные стрелы')!,
    ]);
    const opponent = new Wizard(86, 26, 'Mustafa', weaponFabric.createRandomWeapon('stick'), [
      skillFabric.createSkillFromTemplate('заворожение')!,
      skillFabric.createSkillFromTemplate('ледяные стрелы')!,
    ]);

    it('Should return health after an attack whithout using a skill', () => {
      newWizard.attack(opponent);
      expect(opponent.health).toBe(86 - (newWizard.strength + newWizard.weapon.damage));
    });

    it('Health should decrease by the number of damage units', () => {
      newWizard.takeDamage(45, opponent, opponent.currentSkill);
      expect(newWizard.health).toBe(75 - 45);
    });

    it('Strength should icnrease', () => {
      newWizard.damageUp(2);
      expect(newWizard.strength).toBe(27);
    });

    it('Should change the propertie "skillUsed" to true', () => {
      newWizard.choseSkill();
      newWizard.useSkill(opponent);
      expect(newWizard.isSkillUsed).toBe(true);
    });

    it('Health should icnrease', () => {
      newWizard.heal(10);
      expect(newWizard.health).toBe(40);
    });

    it('Health should be equal initialHealth', () => {
      newWizard.heal(100);
      expect(newWizard.health).toBe(newWizard.initialHealth);
    });

    it('Ibragim should DIE.', () => {
      newWizard.takeDamage(newWizard.initialHealth, opponent, opponent.currentSkill);
      expect(newWizard.isAlive).toBe(false);
      expect(newWizard.health).toBe(0);
    });

    it('Ibragim health should be equal 0.', () => {
      newWizard.takeDamage(1000, opponent, opponent.currentSkill);
      expect(newWizard.health).toBe(0);
    });

    it('Ibragim should reset.', () => {
      newWizard.reset();
      expect(newWizard.health).toBe(newWizard.initialHealth);
      expect(newWizard.strength).toBe(newWizard.initialStrength);
      expect(newWizard.isSkillUsed).toBe(false);
      newWizard.skills!.forEach(skill => {
        expect(skill.usageCount).toBe(skill.initialSkillUsage);
        expect(skill.isUsed).toBe(false);
        expect(skill.turns).toBe(skill.initialTurns);
      });
    });

    it('Ibragim strength should be equal initialStrength.', () => {
      newWizard.useSkill(opponent, 'ледяные стрелы');
      newWizard.attack(opponent);
      newWizard.attack(opponent);
      newWizard.attack(opponent);
      expect(newWizard.strength).toBe(25);
    });
  });
});
