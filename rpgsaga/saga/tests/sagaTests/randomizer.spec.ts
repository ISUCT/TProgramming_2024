import { randomNumber } from "../../sagaCode/randomGenerator"; 

describe('randomNumber Function', () => {
  test('Проверка вывода чисал в заданном диапазоне', () => {
    const min = 1;
    const max = 10;
    const result = randomNumber(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});