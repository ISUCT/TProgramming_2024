import { getRandomNumber } from '../../src/game/utils/randomization/getRandomNumber';

describe('getRandomNumber tests', () => {
  it('Should return -1 if min is greater than max', () => {
    expect(getRandomNumber(10, 5)).toBe(-1);
  });

  it('Should return min if min equals max', () => {
    expect(getRandomNumber(5, 5)).toBe(5);
  });

  it('Should return a random number within the range [min, max] (inclusive)', () => {
    const min = 1;
    const max = 10;
    const randomNumber = getRandomNumber(min, max);
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
  });

  it('Should return a random number within the range [min, max] (inclusive) - multiple tests', () => {
    const min = 1;
    const max = 10;
    for (let i = 0; i < 100; i++) {
      const randomNumber = getRandomNumber(min, max);
      expect(randomNumber).toBeGreaterThanOrEqual(min);
      expect(randomNumber).toBeLessThanOrEqual(max);
    }
  });

  it('Should handle large ranges correctly', () => {
    const min = 1;
    const max = 100000;
    const randomNumber = getRandomNumber(min, max);
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
  });

  it('Should handle negative ranges correctly', () => {
    const min = -10;
    const max = 0;
    const randomNumber = getRandomNumber(min, max);
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
  });

  it('Should handle zero as min correctly', () => {
    const min = 0;
    const max = 10;
    const randomNumber = getRandomNumber(min, max);
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
  });

  it('Should handle zero as max correctly', () => {
    const min = -10;
    const max = 0;
    const randomNumber = getRandomNumber(min, max);
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
  });
});
