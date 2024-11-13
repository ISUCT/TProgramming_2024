import { Cat } from '../src/LabWithClass/Cat';

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
