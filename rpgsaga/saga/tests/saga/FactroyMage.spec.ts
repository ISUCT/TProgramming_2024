import { IAbility } from "../../src/Ability/Ability";
import { FactoryAbility } from "../../src/Ability/FactoryAbility";
import { FactoryMage } from "../../src/Characters/FactoryMage";
import { Mage } from "../../src/Characters/Mage";


class MockAbility implements IAbility {
  name: string = 'Mock Ability';
  description: string = 'Mock description';
  isUsed: boolean = false;
  usageCount: number = 0;
  maxAbilityUsage: number = 0;
  effect(): void {}
}

class MockFactoryAbility extends FactoryAbility {
  createAbilityFromTemplate(templateName: string): IAbility | null {
    if (templateName === 'ледяные стрелы') {
      return new MockAbility();
    } else if (templateName === 'заворожение') {
      return new MockAbility();
    }
    return null;
  }
}

describe('MageFactory tests', () => {
  let mageFactory: FactoryMage;
  let mockFactoryAbility: MockFactoryAbility;

  beforeEach(() => {
    mockFactoryAbility = new MockFactoryAbility();
    mageFactory = new FactoryMage();
    (mageFactory as any).abilityFactory = mockFactoryAbility;
  });

  it('Should create a mage with provided abilities', () => {
    const mockAbilitys: IAbility[] = [new MockAbility(), new MockAbility()];
    const newMage = mageFactory.createMage(['Alice', 'Bob'], 100, 20, mockAbilitys);
    expect(newMage).toBeInstanceOf(Mage);
    expect(newMage.health).toBe(100);
    expect(newMage.strength).toBe(20);
    expect(newMage.abilities).toBe(mockAbilitys);
  });

  it('Should create an mage with default abilities if no abilities are provided', () => {
    const newMage = mageFactory.createMage(['Alice', 'Bob'], 100, 20);
    expect(newMage).toBeInstanceOf(Mage);
    expect(newMage.health).toBe(100);
    expect(newMage.strength).toBe(20);
    expect(newMage.abilities.length).toBe(2);
  });

  it('Should select a random name from the provided names array', () => {
    const names = ['Alice', 'Bob', 'Charlie'];
    const newMage1 = mageFactory.createMage(names, 100, 20);
    const newMage2 = mageFactory.createMage(names, 100, 20);
    expect(names.includes(newMage1.name)).toBe(true);
    expect(names.includes(newMage2.name)).toBe(true);
  });
});
