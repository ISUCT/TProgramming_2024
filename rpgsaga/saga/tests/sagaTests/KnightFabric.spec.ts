import { KnightFabric } from '../../src/game/fabrics/playersFabrics';
import { Knight } from '../../src/game/classes';
import { IWeapon } from '../../src/game/weapon/IWeapon';
import { ISkill } from '../../src/game/skills/ISkill';
import { SkillFabric } from '../../src/game/fabrics/skillFabric/SkillFabric';

class MockWeapon implements IWeapon {
  name: string = 'Mock Weapon';
  typeOfDamage: string = 'Mock type';
  damage: number = 10;
}

class MockSkill implements ISkill {
  name: string = 'Mock Skill';
  description: string = 'Mock description';
  isUsed: boolean = false;
  usageCount: number = 0;
  initialSkillUsage: number = 0;
  effect(): void {}
}

class MockSkillFabric extends SkillFabric {
  createSkillFromTemplate(templateName: string): ISkill | null {
    if (templateName === 'ледяные стрелы') {
      return new MockSkill();
    } else if (templateName === 'удар возмездия') {
      return new MockSkill();
    }
    return null;
  }
}

describe('KnightFabric tests', () => {
  let knightFabric: KnightFabric;
  let mockSkillFabric: MockSkillFabric;
  let mockWeapon: MockWeapon;

  beforeEach(() => {
    mockSkillFabric = new MockSkillFabric();
    knightFabric = new KnightFabric();
    mockWeapon = new MockWeapon();
    (knightFabric as any).skillFabric = mockSkillFabric;
  });

  it('Should create a knight with provided skills', () => {
    const mockSkills: ISkill[] = [new MockSkill(), new MockSkill()];
    const newKnight = knightFabric.createKnight(['Alice', 'Bob'], 100, 20, mockWeapon, mockSkills);
    expect(newKnight).toBeInstanceOf(Knight);
    expect(newKnight.health).toBe(100);
    expect(newKnight.strength).toBe(20);
    expect(newKnight.weapon).toBe(mockWeapon);
    expect(newKnight.skills).toBe(mockSkills);
  });

  it('Should create an knight with default skills if no skills are provided', () => {
    const newKnight = knightFabric.createKnight(['Alice', 'Bob'], 100, 20, mockWeapon);
    expect(newKnight).toBeInstanceOf(Knight);
    expect(newKnight.health).toBe(100);
    expect(newKnight.strength).toBe(20);
    expect(newKnight.weapon).toBe(mockWeapon);
    expect(newKnight.skills.length).toBe(2);
  });

  it('Should select a random name from the provided names array', () => {
    const names = ['Alice', 'Bob', 'Charlie'];
    const newKnight1 = knightFabric.createKnight(names, 100, 20, mockWeapon);
    const newKnight2 = knightFabric.createKnight(names, 100, 20, mockWeapon);
    expect(names.includes(newKnight1.name)).toBe(true);
    expect(names.includes(newKnight2.name)).toBe(true);
  });
});
