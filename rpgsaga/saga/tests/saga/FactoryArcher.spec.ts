import { IAbility } from "../../src/Ability/Ability";
import { FactoryAbility } from "../../src/Ability/FactoryAbility";
import { Archer } from "../../src/Characters/Archer";
import { FactoryArcher } from "../../src/Characters/FactoryArcher";



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
    } else if (templateName === 'огненные стрелы') {
      return new MockAbility();
    }
    return null;
  }
}

describe('ArcherFactory tests', () => {
  let archerFactory: FactoryArcher;
  let mockFactoryAbility: MockFactoryAbility;

  beforeEach(() => {
    mockFactoryAbility = new MockFactoryAbility();
    archerFactory = new FactoryArcher();
    (archerFactory as any).abilityFactory = mockFactoryAbility;
  });

  it('Should create an archer with provided abilities', () => {
    const mockAbilitys: IAbility[] = [new MockAbility(), new MockAbility()];
    const newArcher = archerFactory.createArcher(['Alice', 'Bob'], 100, 20, mockAbilitys);
    expect(newArcher).toBeInstanceOf(Archer);
    expect(newArcher.health).toBe(100);
    expect(newArcher.strength).toBe(20);
    expect(newArcher.abilities).toBe(mockAbilitys);
  });

  it('Should create an archer with default abilities if no abilities are provided', () => {
    const newArcher = archerFactory.createArcher(['Alice', 'Bob'], 100, 20);
    expect(newArcher).toBeInstanceOf(Archer);
    expect(newArcher.health).toBe(100);
    expect(newArcher.strength).toBe(20);
    expect(newArcher.abilities.length).toBe(2);
    expect(newArcher.abilities[0].usageCount).toBe(2);
    expect(newArcher.abilities[0].maxAbilityUsage).toBe(2);
  });

  it('Should select a random name from the provided names array', () => {
    const names = ['Alice', 'Bob', 'Charlie'];
    const newArcher1 = archerFactory.createArcher(names, 100, 20);
    const newArcher2 = archerFactory.createArcher(names, 100, 20);
    expect(names.includes(newArcher1.name)).toBe(true);
    expect(names.includes(newArcher2.name)).toBe(true);
  });
});
