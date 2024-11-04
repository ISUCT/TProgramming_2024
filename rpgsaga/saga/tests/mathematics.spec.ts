import { formula, taskA, taskB } from '../src/mathematics';


describe('formula', () => {
    test('should return right result', () => {
      const result = formula(0.25);
      expect(result).toBeCloseTo(0.168);
    });
  
    test('This Arccos doesnt excist', () => {
      const result = formula(2,2);
      expect(result).toBeNaN();
    });
  
    test('should handle division by zero in denominator', () => {
      const result = formula(1, 2, 3);
      expect(result).toBeDefined(); 
    });
  });