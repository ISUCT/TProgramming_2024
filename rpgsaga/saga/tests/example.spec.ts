import { mathFunction, taskA, taskB } from "../src/MathCalc";

describe('MathFunction', () => {
  test('should return correct result for given inputs', () => {
    const result = mathFunction(8, 2, 3);
    expect(result).toBeCloseTo(-2.422, 3);
  });

  test('should return NaN when x is zero in logarithm', () => {
    const result = mathFunction(0, 2, 3);
    expect(result).toBeNaN();
  });

  test('should handle division by zero in denominator', () => {
    const result = mathFunction(1, 2, 3);
  });
});

describe('TaskA', () => {
  test('should return correct list of results for given range', () => {
    const result = taskA(1, 5, 1, 2, 3);
    expect(result).toEqual([
      mathFunction(1, 2, 3),
      mathFunction(2, 2, 3),
      mathFunction(3, 2, 3),
      mathFunction(4, 2, 3),
      mathFunction(5, 2, 3),
    ]);
  });

  test('should return empty list when range is invalid', () => {
    const result = taskA(5, 1, 1, 2, 3);
    expect(result).toEqual([]);
  });
});

describe('TaskB', () => {
  test('should return correct list after applying MathFunction to each element', () => {
    const inputList = [1, 2, 3];
    const result = taskB(inputList, 2, 3);
    expect(result).toEqual([mathFunction(1, 2, 3), mathFunction(2, 2, 3), mathFunction(3, 2, 3)]);
  });

  test('should return empty list for empty input list', () => {
    const result = taskB([], 2, 3);
    expect(result).toEqual([]);
  });
});


