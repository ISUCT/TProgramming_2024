import { getRandomArrayElement } from '../../src/game/utils/randomization/getRandomArrayElement';

describe('getRandomArrayElement tests', () => {
  it('Should return undefined for an empty array', () => {
    expect(getRandomArrayElement([])).toBeUndefined();
  });

  it('Should return a random element from a non-empty array', () => {
    const arr = [1, 2, 3, 4, 5];
    const element = getRandomArrayElement(arr);
    expect(arr).toContain(element!);
  });

  it('Should return a random element from a non-empty array - multiple tests', () => {
    const arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < 100; i++) {
      const element = getRandomArrayElement(arr);
      expect(arr).toContain(element!);
    }
  });

  it('Should handle arrays with only one element', () => {
    const arr = [1];
    expect(getRandomArrayElement(arr)).toBe(1);
  });

  it('Should handle arrays with different data types', () => {
    const arr = [1, 'hello', true, { name: 'test' }];
    const element = getRandomArrayElement(arr);
    expect(arr).toContain(element!);
  });

  it('Should handle large arrays correctly', () => {
    const arr = Array.from({ length: 1000 }, (_, i) => i + 1);
    const element = getRandomArrayElement(arr);
    expect(arr).toContain(element!);
  });
});
