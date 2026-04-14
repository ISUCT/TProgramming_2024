import { ArcherFactory } from '../../src/Character/Factories/ArcherFactory';
import { Archer } from '../../src/Character/Classes/archer';

describe('ArcherFactory tests', () => {
  let archerFactory: ArcherFactory;

  beforeEach(() => {
    archerFactory = new ArcherFactory();
  });

  it('Should create an archer with default abilities', () => {
    const newArcher = archerFactory.createArcher(['Alice', 'Bob'], 100, 20);
    expect(newArcher).toBeInstanceOf(Archer);
    expect(newArcher.getHealth).toBe(100);
    expect(newArcher.getStrength).toBe(20);
    expect(newArcher.getAbilities.length).toBe(2);
    expect(newArcher.getAbilities[0].usageCount).toBe(2);
    expect(newArcher.getAbilities[0].maxAbilityUsage).toBe(2);
  });

  it('Should select a random name from the provided names array', () => {
    const names = ['Alice', 'Bob', 'Charlie'];
    const newArcher1 = archerFactory.createArcher(names, 100, 20);
    const newArcher2 = archerFactory.createArcher(names, 100, 20);
    expect(names.includes(newArcher1.getName)).toBe(true);
    expect(names.includes(newArcher2.getName)).toBe(true);
  });
});
