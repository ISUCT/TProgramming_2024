import { WizardFabric } from '../../src/game/fabrics/playersFabrics';
import { Wizard } from '../../src/game/classes';
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
    } else if (templateName === 'заворожение') {
      return new MockSkill();
    }
    return null;
  }
}

describe('WizardFabric tests', () => {
  let wizardFabric: WizardFabric;
  let mockSkillFabric: MockSkillFabric;
  let mockWeapon: MockWeapon;

  beforeEach(() => {
    mockSkillFabric = new MockSkillFabric();
    wizardFabric = new WizardFabric();
    mockWeapon = new MockWeapon();
    (wizardFabric as any).skillFabric = mockSkillFabric;
  });

  it('Should create a wizard with provided skills', () => {
    const mockSkills: ISkill[] = [new MockSkill(), new MockSkill()];
    const newWizard = wizardFabric.createWizard(['Alice', 'Bob'], 100, 20, mockWeapon, mockSkills);
    expect(newWizard).toBeInstanceOf(Wizard);
    expect(newWizard.health).toBe(100);
    expect(newWizard.strength).toBe(20);
    expect(newWizard.weapon).toBe(mockWeapon);
    expect(newWizard.skills).toBe(mockSkills);
  });

  it('Should create an wizard with default skills if no skills are provided', () => {
    const newWizard = wizardFabric.createWizard(['Alice', 'Bob'], 100, 20, mockWeapon);
    expect(newWizard).toBeInstanceOf(Wizard);
    expect(newWizard.health).toBe(100);
    expect(newWizard.strength).toBe(20);
    expect(newWizard.weapon).toBe(mockWeapon);
    expect(newWizard.skills.length).toBe(2);
  });

  it('Should select a random name from the provided names array', () => {
    const names = ['Alice', 'Bob', 'Charlie'];
    const newWizard1 = wizardFabric.createWizard(names, 100, 20, mockWeapon);
    const newWizard2 = wizardFabric.createWizard(names, 100, 20, mockWeapon);
    expect(names.includes(newWizard1.name)).toBe(true);
    expect(names.includes(newWizard2.name)).toBe(true);
  });
});
