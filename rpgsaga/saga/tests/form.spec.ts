import { form } from '../labs/formula';

describe('Test of function "form', () => {
  it('Function form should return 3.01 with input 1.2', () => {
    expect(form(1.2)).toBeCloseTo(3.01);
  });
  it('Function form should return undefined(lg(0)) with input 1', () => {
    expect(form(1)).toBeCloseTo(Infinity);
  });
  it('Function form should return undefined(lg(negative)) with input 0', () => {
    expect(form(0)).toBeNaN();
  });
  it('Function form should return 3.01 with input 2.7', () => {
    expect(form(2.7)).toBeCloseTo(164.15);
  });
  it('Function form should return 36560.92 with input 3, 3', () => {
    expect(form(3, 3)).toBeCloseTo(6560.92);
  });
});
