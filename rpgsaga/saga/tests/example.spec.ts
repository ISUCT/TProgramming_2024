import { MathFunction, TaskA, TaskB } from "../src/MathCalc";

describe('MathFunction', () => {
  test('should return correct result for given inputs', () => {
    const result = MathFunction(8, 2, 3);
    expect(result).toBeCloseTo(-2.422, 3);
  });

  test('should return NaN when x is zero in logarithm', () => {
    const result = MathFunction(0, 2, 3);
    expect(result).toBeNaN();
  });

  test('should handle division by zero in denominator', () => {
    const result = MathFunction(1, 2, 3);
  });
});

describe('TaskA', () => {
  test('should return correct list of results for given range', () => {
    const result = TaskA(1, 5, 1, 2, 3);
    expect(result).toEqual([
      MathFunction(1, 2, 3),
      MathFunction(2, 2, 3),
      MathFunction(3, 2, 3),
      MathFunction(4, 2, 3),
      MathFunction(5, 2, 3),
    ]);
  });

  test('should return empty list when range is invalid', () => {
    const result = TaskA(5, 1, 1, 2, 3);
    expect(result).toEqual([]);
  });
});

describe('TaskB', () => {
  test('should return correct list after applying MathFunction to each element', () => {
    const inputList = [1, 2, 3];
    const result = TaskB(inputList, 2, 3);
    expect(result).toEqual([MathFunction(1, 2, 3), MathFunction(2, 2, 3), MathFunction(3, 2, 3)]);
  });

  test('should return empty list for empty input list', () => {
    const result = TaskB([], 2, 3);
    expect(result).toEqual([]);
  });
});

