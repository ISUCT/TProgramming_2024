import * as pointer from '../src/index';

describe('calc', () => {
  it('should not be NaN', () => {
    expect(Number.isNaN(pointer.calc(1.2, 0.48, 0.7))).toStrictEqual(false);
  });
  it('should be NaN', () => {
    expect(pointer.calc(1.2, 0.48, 15)).toStrictEqual(0);
  });
});

describe('taskA', () => {
  it('should be empty if x1 > x2', () => {
    expect(pointer.taskA(1.2, 0.48, 2, 0.5, 0.3)).toStrictEqual([]);
  });
});

describe('taskB', () => {
  const expected = 5;
  it('length of resulting array should equal 6', () => {
    expect(pointer.taskB(1.2, 0.48, [0.25, 0.36, 0.56, 0.94, 1.28, 1.7]).length).toStrictEqual(expected);
  });
});