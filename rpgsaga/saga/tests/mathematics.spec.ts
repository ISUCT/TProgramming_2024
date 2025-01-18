import { formula, taskA, taskB } from '../src/mathematics';


describe('formula', () => {
    test('should return right result', () => {
      expect(formula(0.25)).toBeCloseTo(0.168);
    });
  
    test('This Arccos doesnt excist', () => {
      expect(formula(2.2)).toBeNaN();
    });
  
    test('should handle division by zero in denominator', () => {
      const result = formula(1);
      expect(result).toBeDefined(); 
    });
  });

describe('TaskA',()=> {
  test('should return right size',()=>{
    expect(taskA(0.7,2.2,0.3)).toHaveLength(5);
  })
})

describe('TaskB',()=> {
    test('should return right size',()=>{
      expect(taskB([0.25, 0.36, 0.56, 0.94, 1.28])).toHaveLength(5);
    })
  })