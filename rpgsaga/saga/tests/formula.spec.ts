import { formula } from "../src/tasks";

describe('Test of function "formula"', () => {
  it('formula return NaN with input 1', () => {
    expect(formula(1)).toBeNaN();
  });
  it('formula return value with input 1.2', () => {
    expect(formula(1.2)).toBeCloseTo(0.45, 2);
  });
  it('formula return value with input 2.47', () => {
    expect(formula(2.47)).toBeCloseTo(3.62, 2);
  });
  it('formula return NaN with input 0.99', () => {
    expect(formula(0.99)).toBeNaN();
  });
  it('formula return value with input 3.68', () => {
    expect(formula(3.68)).toBeCloseTo(7.03, 2);
  });
  it('formula return value with input 0.5 and custom a=2.2', () => {
    expect(formula(0.5, 2.2)).toBeCloseTo(0.12, 2);
  });
});
