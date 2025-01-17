import { getRandom } from "../../src/rpg saga/necessary/getRandomNumber";

describe('getRandom Function', () => {
  it('Should return a number within the specified range', () => {
    const min = 1;
    const max = 10;
    const result = getRandom(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});