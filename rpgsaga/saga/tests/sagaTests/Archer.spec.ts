import { Archer, Wizard } from '../../src/game/classes';
import { SkillFabric } from '../../src/game/fabrics/skillFabric/SkillFabric';
import { WeaponFabric } from '../../src/game/fabrics/weaponsFabric/WeaponFabric';

describe('Archer class methods tests', () => {
  it('Constructor test', () => {
    const weaponFabric = new WeaponFabric();
    const skillFabric = new SkillFabric();
    const newArcher = new Archer(75, 25, 'Ibragim', weaponFabric.createRandomWeapon('bow'), [
      skillFabric.createSkillFromTemplate('огненные стрелы')!,
      skillFabric.createSkillFromTemplate('ледяные стрелы')!,
    ]);
    expect(newArcher).toBeInstanceOf(Archer);
    expect(newArcher.health).toBe(75);
    expect(newArcher.strength).toBe(25);
    expect(newArcher.name).toBe('Ibragim');
  });

  describe('Get methods tests', () => {
    const weaponFabric = new WeaponFabric();
    const skillFabric = new SkillFabric();
    const newArcher = new Archer(75, 25, 'Ibragim', weaponFabric.createRandomWeapon('bow'), [
      skillFabric.createSkillFromTemplate('огненные стрелы')!,
      skillFabric.createSkillFromTemplate('ледяные стрелы')!,
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
    it('IsAlive get test', () => {
      expect(newArcher.isAlive).toBe(true);
    });
    it('InitialHealth get test', () => {
      expect(newArcher.initialHealth).toBe(75);
    });
    it('InitialStrength get test', () => {
      expect(newArcher.initialStrength).toBe(25);
    });
    it('CountOfSkippingTurns get test', () => {
      expect(newArcher.countOfSkipingTurns).toBe(0);
    });
    it('CountOfSkippingTurns get test after using skipping spell', () => {
      const opponent = new Wizard(86, 26, 'Mustafa', weaponFabric.createRandomWeapon('stick'), [
        skillFabric.createSkillFromTemplate('заворожение')!,
        skillFabric.createSkillFromTemplate('ледяные стрелы')!,
      ]);
      opponent.useSkill(newArcher, 'заворожение');
      expect(newArcher.countOfSkipingTurns).toBe(1);
    });
  });

  describe('Archer methods tests', () => {
    const weaponFabric = new WeaponFabric();
    const skillFabric = new SkillFabric();
    const newArcher = new Archer(75, 25, 'Ibragim', weaponFabric.createRandomWeapon('bow'), [
      skillFabric.createSkillFromTemplate('огненные стрелы')!,
      skillFabric.createSkillFromTemplate('ледяные стрелы')!,
    ]);
    const opponent = new Archer(86, 26, 'Mustafa', weaponFabric.createRandomWeapon('bow'), [
      skillFabric.createSkillFromTemplate('огненные стрелы')!,
      skillFabric.createSkillFromTemplate('ледяные стрелы')!,
    ]);

    it('Should return health after an attack whithout using a skill', () => {
      newArcher.attack(opponent);
      expect(opponent.health).toBe(86 - (newArcher.strength + newArcher.weapon.damage));
    });

    it('Health should decrease by the number of damage units', () => {
      newArcher.takeDamage(45, opponent.currentSkill);
      expect(newArcher.health).toBe(75 - 45);
    });

    it('Should change the propertie "skillUsed" to true', () => {
      newArcher.choseSkill();
      newArcher.useSkill(opponent);
      expect(newArcher.skills).toContain(newArcher.currentSkill);
    });

    it('Health should icnrease', () => {
      newArcher.heal(10);
      expect(newArcher.health).toBe(40);
    });

    it('Health should be equal initialHealth', () => {
      newArcher.heal(100);
      expect(newArcher.health).toBe(newArcher.initialHealth);
    });

    it('Ibragim should die.', () => {
      newArcher.takeDamage(newArcher.initialHealth, opponent.currentSkill);
      expect(newArcher.isAlive).toBe(false);
      expect(newArcher.health).toBe(0);
    });

    it('Ibragim health should be equal 0.', () => {
      newArcher.takeDamage(1000, opponent.currentSkill);
      expect(newArcher.health).toBe(0);
    });

    it('Ibragim should reset.', () => {
      newArcher.reset();
      expect(newArcher.health).toBe(newArcher.initialHealth);
      expect(newArcher.strength).toBe(newArcher.initialStrength);
      expect(newArcher.currentSkill).toBeUndefined();
      newArcher.skills!.forEach(skill => {
        expect(skill.usageCount).toBe(skill.initialSkillUsage);
        expect(skill.isUsed).toBe(false);
        expect(skill.turns).toBe(skill.initialTurns);
      });
    });

    it('Ibragim strength should be equal initialStrength.', () => {
      newArcher.useSkill(opponent, 'ледяные стрелы');
      newArcher.attack(opponent);
      newArcher.useSkill(opponent, 'огненные стрелы');
      expect(newArcher.attack(opponent)).toBe(newArcher.strength + newArcher.weapon.damage + 5);
      newArcher.attack(opponent);
      expect(newArcher.attack(opponent)).toBe(newArcher.strength + newArcher.weapon.damage + 2);
    });
  });
});
