import { znachenie_Funkcii,taskA,taskB } from "../src";

describe('Znachenie_Funkcii', () => {
  it('should return the correct result for x<1', () => {
    expect(znachenie_Funkcii(0.2)).toBeCloseTo(1.369);
  });
  it('should return the correct result for x<1', () => {
    expect(znachenie_Funkcii(0)).toBeCloseTo(1.57);
  });
  it('should return the correct result for x<1', () => {
    expect(znachenie_Funkcii(-2)).toBeCloseTo(-0.857);
  });
  it('should return the correct result for x<1', () => {
    expect(znachenie_Funkcii(10)).toBeCloseTo(-9.657);
  });
});


describe('taskA', () => {
    it('should return the correct lenght of result', () => {
      const [x, y] = taskA(0.2, 2.2, 0.4);
      expect(y).toHaveLength(6);
    });
});

describe('taskB', () => {
    it('should return the correct result', () => {
      const [x, y] = taskB([0.1, 0.9, 1.2, 1.5, 2.3]);
      expect(y).toHaveLength(5);
    });
});