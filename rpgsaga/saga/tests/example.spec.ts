import { Znachenie_Funkcii,TaskA,TaskB } from "../src";

describe('Znachenie_Funkcii', () => {
  it('should return the correct result for x<1', () => {
    expect(Znachenie_Funkcii(0.2)).toBeCloseTo(1.369);
  });
  it('should return the correct result for x<1', () => {
    expect(Znachenie_Funkcii(0)).toBeCloseTo(1.57);
  });
  it('should return the correct result for x<1', () => {
    expect(Znachenie_Funkcii(-2)).toBeCloseTo(-0.857);
  });
  it('should return the correct result for x<1', () => {
    expect(Znachenie_Funkcii(10)).toBeCloseTo(-9.657);
  });
});


describe('TaskA', () => {
    it('should return the correct lenght of result', () => {
      const [x, y] = TaskA(0.2, 2.2, 0.4);
      expect(y).toHaveLength(6);
    });
});

describe('TaskB', () => {
    it('should return the correct result', () => {
      const [x, y] = TaskB([0.1, 0.9, 1.2, 1.5, 2.3]);
      expect(y).toHaveLength(5);
    });
});
  