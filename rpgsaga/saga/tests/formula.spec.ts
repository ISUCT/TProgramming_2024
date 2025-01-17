import { formula } from "../src/tasks";

describe('Test of function "formula', () => {
  it('formula return 0.013 with input 0.11', () => {
    expect(formula(0.11)).toBeCloseTo(0.0134);
  });
  it('formula return NaN(arcsin(x<1)) with input -80', () => {
    expect(formula(-80)).toBeNaN();
  });
  it('formula return NaN(arcsin(x>1)) with input 80', () => {
    expect(formula(80)).toBeNaN();
  });
  it('formula return 0.0852 with input 0.26', () => {
    expect(formula(0.26)).toBeCloseTo(0.0852);
  });
  it('formula return 0.41488 with input 0.52', () => {
    expect(formula(0.52)).toBeCloseTo(0.41488);
  });
  it('formula return 0.0053 with x = 0.52, a = 22, b = 8', () => {
    expect(formula(0.52, 22, 8)).toBeCloseTo(0.0053);
  });
});