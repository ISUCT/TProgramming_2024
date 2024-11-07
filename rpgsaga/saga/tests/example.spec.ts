<<<<<<< HEAD
import { TaskA, TaskB } from '../src';

describe('Tests TaskA', () => {
  it('should return 6 values', () => {
    const result = [
        0.000023767712799773597,
        0.0002255659133457527,
        0.0009002837716797819,
        0.00268923918619863,
        0.006831733643974267
      ];
    expect(TaskA(0.1, 0.5, 0.15, 1.37, 0.25)).toEqual(result);
  });

  it('should return empty array if x_start is greater than x_end', () => {
    expect(TaskA(0.1, 0.5, 1.37, 0.15, 0.25)).toEqual([]);
  });

  it('should return empty array if x_delta is zero', () => {
    expect(TaskA(0.1, 0.5, 0.15, 1.37, 0)).toEqual([]);
  });

  it('should return empty array if x_delta is negative and x_start is less than x_end', () => {
    expect(TaskA(0.1, 0.5, 0.15, 1.37, -0.25)).toEqual([]);
  });

  it('should return correct values if x_start is equal to x_end', () => {
    const result = [0.000023767712799773597]; 
    expect(TaskA(0.1, 0.5, 0.15, 0.15, 0.25)).toEqual(result);
  });

  it('should return correct values if x_delta is negative and x_start is greater than x_end', () => {
    const result = [
        0.01427166143546088,
        0.006146786148998875,
        0.002382331600443176,
        0.0007773415055814521,
        0.00018471786315547907
      ];
    expect(TaskA(0.1, 0.5, 1.37, 0.15, -0.25)).toEqual(result);
  });
});

describe('Tests TaskB', () => {
  it('should return 5 values', () => {
    const result = [
        0.00004401801731316296,
        0.00011050796997444056,
        0.0002901304462442073,
        0.000703217341847386,
        0.0005720129283157486
    ];
    expect(TaskB(0.1, 0.5, [0.2, 0.3, 0.44, 0.6, 0.56])).toEqual(result);
  });

  it('should return empty array if xValues is empty', () => {
    expect(TaskB(0.1, 0.5, [])).toEqual([]);
  });

  it('should return undefined values if any xValue causes dTan to be zero', () => {
    const result = [
        undefined,
        0.00011050796997444056,
        0.0002901304462442073,
        0.000703217341847386,
        0.0005720129283157486
      ];
    expect(TaskB(0.1, 0.5, [0, 0.3, 0.44, 0.6, 0.56])).toEqual(result);
  });
});
=======
describe('Example', () => {
  it('should return 5 as result of 2 and 3 sum', () => {
    const a = 3;
    const b = 2;
    expect(a + b).toEqual(5);
  });
});
>>>>>>> 7f8d04cfd2d04386cfbf726a22c688d614dba812
