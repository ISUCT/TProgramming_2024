import { mathFunction, taskA, taskB } from '../src/MathCalc';
import { Cat } from '../src/LabWithClass/Cat';

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
    expect(result).toBeDefined(); // Здесь можно добавить проверку на правильное значение
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

describe('Cat class', () => {
  let cat: Cat;

  beforeEach(() => {
    cat = new Cat('Whiskers', 2, 'female', 'women');
  });

  test('should create a cat instance with valid properties', () => {
    expect(cat.name).toBe('Whiskers');
    expect(cat.age).toBe(2);
    expect(cat.gender).toBe('female');
    expect(cat.male).toBe('women');
  });

  test('should set name correctly', () => {
    cat.name = 'Garfield';
    expect(cat.name).toBe('Garfield');
  });

  test('should set age correctly', () => {
    cat.age = 3;
    expect(cat.age).toBe(3);
  });

  test('should throw an error if age is negative', () => {
    expect(() => {
      cat.age = -1;
    }).toThrow('Invalid age');
  });

  test('should set gender correctly', () => {
    cat.gender = 'male';
    expect(cat.gender).toBe('male');
  });

  test('should set male correctly when valid', () => {
    cat.male = 'man';
    expect(cat.male).toBe('man');
  });

  test('should throw an error when setting an invalid male value', () => {
    expect(() => {
      cat.male = 'invalid';
    }).toThrow('Invalid male');
  });
});

describe('Example', () => {
  it('should return 5 as result of 2 and 3 sum', () => {
    const a = 3;
    const b = 2;
    expect(a + b).toEqual(5);
  });
});
