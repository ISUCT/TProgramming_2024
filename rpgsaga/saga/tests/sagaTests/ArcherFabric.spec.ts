import { ArcherFabric } from '../../src/game/fabrics/playersFabrics';
import { Archer } from '../../src/game/classes';
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
    } else if (templateName === 'огненные стрелы') {
      return new MockSkill();
    }
    return null;
  }
}

describe('ArcherFabric tests', () => {
  let archerFabric: ArcherFabric;
  let mockSkillFabric: MockSkillFabric;
  let mockWeapon: MockWeapon;

  beforeEach(() => {
    mockSkillFabric = new MockSkillFabric();
    archerFabric = new ArcherFabric();
    mockWeapon = new MockWeapon();
    (archerFabric as any).skillFabric = mockSkillFabric;
  });

  it('Should create an archer with provided skills', () => {
    const mockSkills: ISkill[] = [new MockSkill(), new MockSkill()];
    const newArcher = archerFabric.createArcher(['Alice', 'Bob'], 100, 20, mockWeapon, mockSkills);
    expect(newArcher).toBeInstanceOf(Archer);
    expect(newArcher.health).toBe(100);
    expect(newArcher.strength).toBe(20);
    expect(newArcher.weapon).toBe(mockWeapon);
    expect(newArcher.skills).toBe(mockSkills);
  });

  it('Should create an archer with default skills if no skills are provided', () => {
    const newArcher = archerFabric.createArcher(['Alice', 'Bob'], 100, 20, mockWeapon);
    expect(newArcher).toBeInstanceOf(Archer);
    expect(newArcher.health).toBe(100);
    expect(newArcher.strength).toBe(20);
    expect(newArcher.weapon).toBe(mockWeapon);
    expect(newArcher.skills.length).toBe(2);
    expect(newArcher.skills[0].usageCount).toBe(2);
    expect(newArcher.skills[0].initialSkillUsage).toBe(2);
  });

  it('Should select a random name from the provided names array', () => {
    const names = ['Alice', 'Bob', 'Charlie'];
    const newArcher1 = archerFabric.createArcher(names, 100, 20, mockWeapon);
    const newArcher2 = archerFabric.createArcher(names, 100, 20, mockWeapon);
    expect(names.includes(newArcher1.name)).toBe(true);
    expect(names.includes(newArcher2.name)).toBe(true);
  });
});
