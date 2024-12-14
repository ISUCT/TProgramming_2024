<<<<<<< HEAD
import { calculateFuncA } from "../src/calculateFunctions/calculateFunctions"
import { calculateFuncB } from "../src/calculateFunctions/calculateFunctions" 
 
describe('calculateFuncA', () => { 
    it('should return correct results for a basic range', () => { 
        const results = calculateFuncA(1, 3, 1); 
        const expected = [ 
            Math.pow(Math.abs(1 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(1 ** 2), 1 / 3), 
            Math.pow(Math.abs(2 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(2 ** 2), 1 / 3), 
            Math.pow(Math.abs(3 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(3 ** 2), 1 / 3), 
        ]; 
        expect(results).toEqual(expected);  
    }); 
 
    it('should return correct results with a different step', () => { 
        const results = calculateFuncA(1, 3, 2); 
        const expected = [ 
            Math.pow(Math.abs(1 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(1 ** 2), 1 / 3), 
            Math.pow(Math.abs(3 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(3 ** 2), 1 / 3), 
        ]; 
        expect(results).toEqual(expected); 
    }); 
 
    it('should return an empty array if xStart is greater than xFinish', () => { 
        const results = calculateFuncA(5, 3, 1); 
        expect(results).toEqual([]);  
    }); 
 
    it('should handle a step of 0 gracefully', () => { 
        // Если шаг равен 0, это приведёт к бесконечному циклу 
        expect(() => calculateFuncA(1, 3, 0)).toThrow();  
    }); 
 
    it('should return correct results for values that might cause issues with log10', () => { 
        expect(() => calculateFuncA(0, 3, 1)).toThrow(); // log10(0) не существует 
    }); 
}); 
 
describe('calculateFuncB', () => { 
    it('should return correct results for a set of positive numbers', () => { 
        const results = calculateFuncB(1, 2, 3, 4, 5); 
        const expected = [ 
            Math.pow(Math.abs(1 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(1 ** 2), 1 / 3), 
            Math.pow(Math.abs(2 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(2 ** 2), 1 / 3), 
            Math.pow(Math.abs(3 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(3 ** 2), 1 / 3), 
            Math.pow(Math.abs(4 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(4 ** 2), 1 / 3), 
            Math.pow(Math.abs(5 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(5 ** 2), 1 / 3), 
        ]; 
        expect(results).toEqual(expected);  
    }); 
 
    it('should handle negative numbers correctly', () => { 
        const results = calculateFuncB(-1, -2, -3, -4, -5); 
        const expected = [ 
            Math.pow(Math.abs((-1) ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10((-1) ** 2), 1 / 3), 
            Math.pow(Math.abs((-2) ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10((-2) ** 2), 1 / 3), 
            Math.pow(Math.abs((-3) ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10((-3) ** 2), 1 / 3), 
            Math.pow(Math.abs((-4) ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10((-4) ** 2), 1 / 3), 
            Math.pow(Math.abs((-5) ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10((-5) ** 2), 1 / 3), 
        ]; 
        expect(results).toEqual(expected); 
    }); 
 
    it('should handle zero value correctly (expecting error due to log10(0))', () => { 
        expect(() => calculateFuncB(0, 2, 3, 4, 5)).toThrow(); 
    }); 
 
    it('should return an array with a single result if all values are the same', () => { 
        const results = calculateFuncB(1, 1, 1, 1, 1); 
        const expected = [ 
            Math.pow(Math.abs(1 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(1 ** 2), 1 / 3), 
            Math.pow(Math.abs(1 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(1 ** 2), 1 / 3), 
            Math.pow(Math.abs(1 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(1 ** 2), 1 / 3), 
            Math.pow(Math.abs(1 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(1 ** 2), 1 / 3), 
            Math.pow(Math.abs(1 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(1 ** 2), 1 / 3), 
        ]; 
        expect(results).toEqual(expected); 
    }); 
=======
import { calculateFuncA, calculateFuncB } from '../src/calculateFunctions/calculateFunctions';

describe('calculateFuncA', () => {
  it('should return correct results for a basic range', () => {
    const results = calculateFuncA(1, 3, 1);
    const expected = [
      Math.pow(Math.abs(1 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(1 ** 2), 1 / 3),
      Math.pow(Math.abs(2 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(2 ** 2), 1 / 3),
      Math.pow(Math.abs(3 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(3 ** 2), 1 / 3),
    ];
    expect(results).toEqual(expected);
  });

  it('should return correct results with a different step', () => {
    const results = calculateFuncA(1, 3, 2);
    const expected = [
      Math.pow(Math.abs(1 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(1 ** 2), 1 / 3),
      Math.pow(Math.abs(3 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(3 ** 2), 1 / 3),
    ];
    expect(results).toEqual(expected);
  });

  it('should return an empty array if xStart is greater than xFinish', () => {
    const results = calculateFuncA(5, 3, 1);
    expect(results).toEqual([]);
  });

  it('should handle a step of 0 gracefully', () => {
    // Если шаг равен 0, это приведёт к бесконечному циклу
    expect(() => calculateFuncA(1, 3, 0)).toThrow();
  });

  it('should return correct results for values that might cause issues with log10', () => {
    expect(() => calculateFuncA(0, 3, 1)).toThrow(); // log10(0) не существует
  });
});

describe('calculateFuncB', () => {
  it('should return correct results for a set of positive numbers', () => {
    const results = calculateFuncB(1, 2, 3, 4, 5);
    const expected = [
      Math.pow(Math.abs(1 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(1 ** 2), 1 / 3),
      Math.pow(Math.abs(2 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(2 ** 2), 1 / 3),
      Math.pow(Math.abs(3 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(3 ** 2), 1 / 3),
      Math.pow(Math.abs(4 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(4 ** 2), 1 / 3),
      Math.pow(Math.abs(5 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(5 ** 2), 1 / 3),
    ];
    expect(results).toEqual(expected);
  });

  it('should handle negative numbers correctly', () => {
    const results = calculateFuncB(-1, -2, -3, -4, -5);
    const expected = [
      Math.pow(Math.abs((-1) ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10((-1) ** 2), 1 / 3),
      Math.pow(Math.abs((-2) ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10((-2) ** 2), 1 / 3),
      Math.pow(Math.abs((-3) ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10((-3) ** 2), 1 / 3),
      Math.pow(Math.abs((-4) ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10((-4) ** 2), 1 / 3),
      Math.pow(Math.abs((-5) ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10((-5) ** 2), 1 / 3),
    ];
    expect(results).toEqual(expected);
  });

  it('should handle zero value correctly (expecting error due to log10(0))', () => {
    expect(() => calculateFuncB(0, 2, 3, 4, 5)).toThrow();
  });

  it('should return an array with a single result if all values are the same', () => {
    const results = calculateFuncB(1, 1, 1, 1, 1);
    const expected = [
      Math.pow(Math.abs(1 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(1 ** 2), 1 / 3),
      Math.pow(Math.abs(1 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(1 ** 2), 1 / 3),
      Math.pow(Math.abs(1 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(1 ** 2), 1 / 3),
      Math.pow(Math.abs(1 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(1 ** 2), 1 / 3),
      Math.pow(Math.abs(1 ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(1 ** 2), 1 / 3),
    ];
    expect(results).toEqual(expected);
  });
>>>>>>> e6eef1c (fix gitignore and rebuilt project)
});
