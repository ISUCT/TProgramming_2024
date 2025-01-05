import { Archer, Knight, Wizard } from '../../src/game/classes';
import { SkillFabric } from '../../src/game/fabrics/skillFabric/SkillFabric';
import { WeaponFabric } from '../../src/game/fabrics/weaponsFabric/WeaponFabric';

describe('Knight class methods tests', () => {
  it('Constructor test', () => {
    const weaponFabric = new WeaponFabric();
    const skillFabric = new SkillFabric();
    const newKnight = new Knight(75, 25, 'Ibragim', weaponFabric.createRandomWeapon('sword'), [
      skillFabric.createSkillFromTemplate('удар возмездия')!,
      skillFabric.createSkillFromTemplate('ледяные стрелы')!,
    ]);
    expect(newKnight).toBeInstanceOf(Knight);
    expect(newKnight.health).toBe(75);
    expect(newKnight.strength).toBe(25);
    expect(newKnight.name).toBe('Ibragim');
  });

  describe('Get methods tests', () => {
    const weaponFabric = new WeaponFabric();
    const skillFabric = new SkillFabric();
    const newKnight = new Knight(75, 25, 'Ibragim', weaponFabric.createRandomWeapon('sword'), [
      skillFabric.createSkillFromTemplate('удар возмездия')!,
      skillFabric.createSkillFromTemplate('ледяные стрелы')!,
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
    it('IsAlive get test', () => {
      expect(newKnight.isAlive).toBe(true);
    });
    it('IsSkillUsed get test', () => {
      expect(newKnight.isSkillUsed).toBe(false);
    });
    it('IsSkillUsed get test after using skill', () => {
      newKnight.choseSkill();
      newKnight.useSkill(newKnight);
      expect(newKnight.isSkillUsed).toBe(true);
    });
    it('InitialHealth get test', () => {
      expect(newKnight.initialHealth).toBe(75);
    });
    it('InitialStrength get test', () => {
      expect(newKnight.initialStrength).toBe(25);
    });
    it('CountOfSkippingTurns get test', () => {
      expect(newKnight.countOfSkipingTurns).toBe(0);
    });
    it('CountOfSkippingTurns get test after using skipping spell', () => {
      const opponent = new Wizard(86, 26, 'Mustafa', weaponFabric.createRandomWeapon('stick'), [
        skillFabric.createSkillFromTemplate('заворожение')!,
        skillFabric.createSkillFromTemplate('ледяные стрелы')!,
      ]);
      opponent.useSkill(newKnight, 'заворожение');
      expect(newKnight.countOfSkipingTurns).toBe(1);
    });
  });

  describe('Knight methods tests', () => {
    const weaponFabric = new WeaponFabric();
    const skillFabric = new SkillFabric();
    const newKnight = new Knight(75, 25, 'Ibragim', weaponFabric.createRandomWeapon('sword'), [
      skillFabric.createSkillFromTemplate('удар возмездия')!,
      skillFabric.createSkillFromTemplate('ледяные стрелы')!,
    ]);
    const opponent = new Archer(86, 26, 'Mustafa', weaponFabric.createRandomWeapon('bow'), [
      skillFabric.createSkillFromTemplate('огненные стрелы')!,
      skillFabric.createSkillFromTemplate('ледяные стрелы')!,
    ]);

    it('Should return health after an attack whithout using a skill', () => {
      newKnight.attack(opponent);
      expect(opponent.health).toBe(86 - (newKnight.strength + newKnight.weapon.damage));
    });

    it('Health should decrease by the number of damage units', () => {
      newKnight.takeDamage(45, opponent.currentSkill);
      expect(newKnight.health).toBe(75 - 45);
    });

    it('Health should decrease by the number of damage units without skill buff', () => {
      newKnight.heal(100);
      opponent.useSkill(newKnight, 'ледяные стрелы');
      opponent.attack(newKnight);
      expect(newKnight.health).toBe(75 - (opponent.strength + opponent.weapon.damage));
    });

    it('Should change the propertie "skillUsed" to true', () => {
      newKnight.choseSkill();
      newKnight.useSkill(opponent);
      expect(newKnight.isSkillUsed).toBe(true);
    });

    it('Health should icnrease', () => {
      newKnight.heal(10);
      expect(newKnight.health).toBe(75 - (opponent.strength + opponent.weapon.damage) + 10);
    });

    it('Health should be equal initialHealth', () => {
      newKnight.heal(100);
      expect(newKnight.health).toBe(newKnight.initialHealth);
    });

    it('Ibragim should DIE.', () => {
      newKnight.takeDamage(newKnight.initialHealth);
      expect(newKnight.isAlive).toBe(false);
      expect(newKnight.health).toBe(0);
    });

    it('Ibragim health should be equal 0.', () => {
      newKnight.takeDamage(1000, opponent.currentSkill);
      expect(newKnight.health).toBe(0);
    });

    it('Ibragim should reset.', () => {
      newKnight.reset();
      expect(newKnight.health).toBe(newKnight.initialHealth);
      expect(newKnight.strength).toBe(newKnight.initialStrength);
      expect(newKnight.isSkillUsed).toBe(false);
      newKnight.skills!.forEach(skill => {
        expect(skill.usageCount).toBe(skill.initialSkillUsage);
        expect(skill.isUsed).toBe(false);
        expect(skill.turns).toBe(skill.initialTurns);
      });
    });

    it('Ibragim strength should be equal initialStrength.', () => {
      newKnight.useSkill(opponent, 'ледяные стрелы');
      newKnight.attack(opponent);
      newKnight.attack(opponent);
      newKnight.attack(opponent);
      expect(newKnight.strength).toBe(25);
    });
  });
});
