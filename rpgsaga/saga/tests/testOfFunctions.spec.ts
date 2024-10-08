import { formulaMain,TaskA,TaskB } from "../src";   

describe('formulamain function', () => {
  it('should return the correct result for x <= 5', () => {
    expect(formulaMain(3.5, -2.5, 3.4)).toBeCloseTo(150.03);
  });
  it('numenator equals zero for x <= 5', () => {
      expect(formulaMain(0, -2.5, 3.4)).toEqual(NaN);
    });
  it('Negative x for x <= 5', () => {
      expect(formulaMain(-10, -2.5, 3.4)).toEqual(NaN);
    });
  it('numenator equals zero for x > 5', () => {
    expect(formulaMain(7.25, -2.5, 3.4)).toBeCloseTo(0.06);
  });
});

describe('TaskA function', () => {
  it('should return the correct result', () => {
    const [x, y] = TaskA(3.5, 6.5, 0.6, -2.5, 3.4);
    expect(y).toHaveLength(6);
  });
});

describe('TaskB function', () => {
  it('should return the correct result', () => {
    const [x, y] = TaskB([2.89, 3.54, 5.21, 6.28, 3.48], -2.5, 3.4);
    expect(y).toHaveLength(5);
  });
});