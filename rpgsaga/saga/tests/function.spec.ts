import { form,taksA,taskB,log5 } from "../src/LAB";   
describe('log5 function', () => {
    it('log5: вычисление логарифма по основанию 5', () => {
        expect(log5(25)).toEqual(2);
        expect(log5(5)).toEqual(1); 
        expect(log5(1)).toEqual(0); 
      });
    });
describe('form function', () => {
  it('form: корректные значения', () => {
    expect(form(1.5)).toBeCloseTo(0.179);
  });
  it('numenator equals zero for x <= 5', () => {
      expect(form(0)).toBe(NaN);
    });
  it('Negative x for x <= 5', () => {
      expect(form(-10)).toBeCloseTo(0.68);
    });
  it('numenator equals zero for x > 5', () => {
    expect(form(7.25)).toBeCloseTo(0.679);
  });
});

describe('TaksA function', () => {
  it('taksA: генерация массивов', () => {
        const [x, y] = taksA(1.2, 2.2, 0.2);
        expect(y.length).toEqual(6);
    });
});

describe('TaskB function', () => {
    it('taskB: обработка массива', () => {
        const [x, y] = taskB([1.21, 1.76, 2.53, 3.48, 4.52]);
        expect(y.length).toEqual(5);
    });
});
