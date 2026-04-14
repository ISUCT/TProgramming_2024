import { KnightFactory } from '../../src/Character/Factories/KnightFactory';
import { Knight } from '../../src/Character/Classes/knight';

describe('KnightFactory tests', () => {
  let knightFactory: KnightFactory;

  beforeEach(() => {
    knightFactory = new KnightFactory();
  });

  it('Should create an knight with default abilities', () => {
    const newKnight = knightFactory.createKnight(['Alice', 'Bob'], 100, 20);
    expect(newKnight).toBeInstanceOf(Knight);
    expect(newKnight.getHealth).toBe(100);
    expect(newKnight.getStrength).toBe(20);
    expect(newKnight.getAbilities.length).toBe(2);
  });

  it('Should select a random name from the provided names array', () => {
    const names = ['Alice', 'Bob', 'Charlie'];
    const newKnight1 = knightFactory.createKnight(names, 100, 20);
    const newKnight2 = knightFactory.createKnight(names, 100, 20);
    expect(names.includes(newKnight1.getName)).toBe(true);
    expect(names.includes(newKnight2.getName)).toBe(true);
  });
});
