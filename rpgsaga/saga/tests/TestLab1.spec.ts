import { part1,part2 } from "../src/lab1";


describe('part1', () => {
    it('should calculate the correct values for TaskA', () => {
      const testresultpart1 = part1(2.0, 4.1, 0.77, 1.77, 0.2);
      const trueresultpart1 = [
        2.7388481081393565, 2.8586746436996493, 3.030860332204392, 3.286466191357752, 3.700369898628302, 4.528000430532366
      ];
      expect(testresultpart1).toEqual(trueresultpart1);
    });
  });
  
  describe('part2', () => {
    it('should calculate the correct values for TaskB', () => {
      const sliceb = [1.24, 1.38, 2.38, 3.21, 0.68];
      const testresultpart2 = part2(sliceb, 2.0, 4.1);
      const trueresultpart2 = [
        3.1084211139855484, 3.3024374288757143, 3.788908792535114, 2.577238078784193, 2.6976203242814814
      ];
      expect(testresultpart2).toEqual(trueresultpart2);
    });
  });
  