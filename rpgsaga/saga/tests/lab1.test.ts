import {task14A, task14B} from '../src/lab1';


describe("task14A", () => {
    it("should return the correct array of calculated values for task A", () => {
      const expectedResult = [
        4.847251589340839,
        7.235104883316567,
        6.953017445001333,
        6.664008196720523,
        6.4497646073821775
      ];
      const result = task14A(7.2, 4.2, 1.81, 5.31, 0.7);
      expect(result).toEqual(expectedResult);
    });
  });
  
  describe("task14B", () => {
    it("should return the correct array of calculated values for task B", () => {
      const expectedResult = [
        7.238670589387374,
        7.141523475559664,
        6.667590340861805,
        6.426877193493389,
        6.976196379251087
      ];
      const result = task14B(7.2, 4.2, [2.4, 2.8, 3.9, 4.7, 3.16]);
      expect(result).toEqual(expectedResult);
    });
  });
