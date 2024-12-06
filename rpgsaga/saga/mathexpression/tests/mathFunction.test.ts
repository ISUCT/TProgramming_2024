import { calculate, toRadians } from '../src/mathFunction';

describe('calculate', () => {
  it('должна правильно вычислять для x < 5', () => {
    const a = 2;
    const b = 3;
    const x = 4;
    const expected = Math.pow(Math.log10(Math.pow(a, 2) + x), 2) / Math.pow(a + x, 2);
    expect(calculate(a, b, x)).toBeCloseTo(expected, 4);
  });

  it('должна правильно вычислять для x >= 5', () => {
    const a = 2;
    const b = 3;
    const x = 5;
    const numerator = Math.pow(a + b * x, 2.5);
    const denominator = 1.8 + Math.pow(Math.cos(toRadians(a * x)), 3);
    const expected = numerator / denominator;
    expect(calculate(a, b, x)).toBeCloseTo(expected, 4);
  });

  it('должна обрабатывать случай x = 5', () => {
    const a = 1;
    const b = 1;
    const x = 5;
    const result = calculate(a, b, x);
    expect(result).not.toBeNaN();
  });

  it('должна обрабатывать случай x = 0', () => {
    const a = 1;
    const b = 1;
    const x = 0;
    const result = calculate(a, b, x);
    expect(result).not.toBeNaN();
  });

  it('должна обрабатывать случай x = -1', () => {
    const a = 1;
    const b = 1;
    const x = -1;
    const result = calculate(a, b, x);
    expect(result).not.toBeNaN();
  });

  it('должна обрабатывать случай x = 10', () => {
    const a = 1;
    const b = 1;
    const x = 10;
    const result = calculate(a, b, x);
    expect(result).not.toBeNaN();
  });
});