import { IAbility } from "../../src/Ability/Ability";
import { FactoryAbility } from "../../src/Ability/FactoryAbility";
import { FactoryKnight } from "../../src/Characters/FactoryKnight";
import { Knight } from "../../src/Characters/Knight";


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
    } else if (templateName === 'удар возмездия') {
      return new MockAbility();
    }
    return null;
  }
}

describe('FactoryKnight tests', () => {
  let knightFactory: FactoryKnight;
  let mockFactoryAbility: MockFactoryAbility;

  beforeEach(() => {
    mockFactoryAbility = new MockFactoryAbility();
    knightFactory = new FactoryKnight();
    (knightFactory as any).abilityFactory = mockFactoryAbility;
  });

  it('Should create a knight with provided abilities', () => {
    const mockAbilitys: IAbility[] = [new MockAbility(), new MockAbility()];
    const newKnight = knightFactory.createKnight(['Alice', 'Bob'], 100, 20, mockAbilitys);
    expect(newKnight).toBeInstanceOf(Knight);
    expect(newKnight.health).toBe(100);
    expect(newKnight.strength).toBe(20);
    expect(newKnight.abilities).toBe(mockAbilitys);
  });

  it('Should create an knight with default abilities if no abilities are provided', () => {
    const newKnight = knightFactory.createKnight(['Alice', 'Bob'], 100, 20);
    expect(newKnight).toBeInstanceOf(Knight);
    expect(newKnight.health).toBe(100);
    expect(newKnight.strength).toBe(20);
    expect(newKnight.abilities.length).toBe(2);
  });

  it('Should select a random name from the provided names array', () => {
    const names = ['Alice', 'Bob', 'Charlie'];
    const newKnight1 = knightFactory.createKnight(names, 100, 20);
    const newKnight2 = knightFactory.createKnight(names, 100, 20);
    expect(names.includes(newKnight1.name)).toBe(true);
    expect(names.includes(newKnight2.name)).toBe(true);
  });
});
