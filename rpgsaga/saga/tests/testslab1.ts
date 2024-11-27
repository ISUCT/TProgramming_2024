import {task19A, task19B} from '../src/math';


describe('calculate19', () => {
    it('...', () => {
      expect(calculate19(2, 1)).toBeCloseTo(0.0144, 4); 
    });
  });
  
  describe('task19A', () => {
    it('...', () => {
      const a = 2.0;
      const xn = 1.2;
      const xk = 4.2;
      const dx = 0.6;
      const expectedResults = [0.0249, 0.0233, 0.0214, 0.0195, 0.0179, 0.0163]; 
      const results = task19A(a, xn, xk, dx);
      expect(results).toEqual(expectedResults);
    });
  });
  
  describe('task19B', () => {
    it('...', () => {
      const a = 2.0;
      const x1 = 1.16;
      const x2 = 1.32;
      const x3 = 1.47;
      const x4 = 1.65;
      const x5 = 1.93;
      const xs = [x1, x2, x3, x4, x5];
      const expectedResults = [0.0250, 0.0246, 0.0242, 0.0237, 0.0229];
      const results = task19B(a, xs);
      expect(results).toEqual(expectedResults);
    });
  });
  
