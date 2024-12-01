import { mathCalc, taskA, taskB } from '../../src/MathCalc/MathCal';

describe('MathCalc', () => {
  test('should return correct result for given inputs', () => {
    const result = mathCalc(8, 2, 3);
    expect(result).toBeCloseTo(5.465, 3);
  });

  test('should return NaN when x is zero in logarithm', () => {
    const result = mathCalc(0, 2, 3);
    expect(result).toBeNaN(); 
  });

  test('should handle negative values for x, a, and b', () => {
    const result = mathCalc(-1, 5, 3);
    expect(result).toBeDefined(); 
  });
});

describe('TaskA', () => {
  test('should return correct list of results for given range', () => {
    const result = taskA(1, 5, 1, 2, 3);
    expect(result).toEqual([
      mathCalc(1, 2, 3),
      mathCalc(2, 2, 3),
      mathCalc(3, 2, 3),
      mathCalc(4, 2, 3),
      mathCalc(5, 2, 3),
    ]);
  });

  test('should return empty list when range is invalid', () => {
    const result = taskA(5, 1, 1, 2, 3);
    expect(result).toEqual([]);
  });
});

describe('TaskB', () => {
  test('should return correct list after applying MathCalc to each element', () => {
    const inputList = [1, 2, 3];
    const result = taskB(inputList, 2, 3);
    expect(result).toEqual([mathCalc(1, 2, 3), mathCalc(2, 2, 3), mathCalc(3, 2, 3)]);
  });

  test('should return empty list for empty input list', () => {
    const result = taskB([], 2, 3);
    expect(result).toEqual([]);
  });
});
