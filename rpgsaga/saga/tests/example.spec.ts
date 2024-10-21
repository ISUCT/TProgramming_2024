import { Work1, Work2,} from "../src/Lab1";
  
  describe('Work1', () => {
    it('should calculate the correct values for Work1', () => {
      const test_result_Work1 = Work1(2.0, 0, 1.2, 4.2, 0.6);
      const True_result_Work1 = [
        0.024919580136386867,
        0.02327901792977313,
        0.02138591667754329,
        0.019542362678459768,
        0.01785029731362981,
        0.016334146451246024
    ];
      expect(test_result_Work1).toEqual(True_result_Work1);
    });
  });
  
  describe('Work2', () => {
    it('should calculate the correct values for Work2', () => {
      const mySliceForWork2 = [1.16, 1.32, 1.47, 1.65, 1.93];
      const test_result_Work2 = Work2(mySliceForWork2, 2.0, 0);
      const True_result_Work2 = [
        0.025004724857363752,
        0.024639361870982292,
        0.024247019851321865,
        0.02373227738177274,
        0.022875026963062515
    ];
    expect(test_result_Work2).toEqual(True_result_Work2);
    });
  });