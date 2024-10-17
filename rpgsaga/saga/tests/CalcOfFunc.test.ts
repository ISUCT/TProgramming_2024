import { getTaskA, getTaskB } from '../src/CalcOfFunc';

describe('TaskA', () => {
  it('correct answer A', () => {
    const expectedResult = [
      1.1298385487203866, 1.7472761588502188, 3.220397731030495, 6.447227535266805, 13.21117766406966,
      26.84410487237168,
    ];
    const result = getTaskA(0.26, 0.66, 0.08);
    expect(result).toEqual(expectedResult);
  });
  it('length returned array A', () => {
    const ansverA = getTaskA(0, 4, 1);
    expect(ansverA).toHaveLength(5);
  });

  it('checking empty array A', () => {
    expect(getTaskA(1, 0, 0)).toHaveLength(0);
  });
});

describe('TaskB', () => {
  it('correct answer B', () => {
    const expectedResult = [
      1.5347282613199904, 2.16507891445927, 7.709481911813682, 12.078220437571701, 102.99803805648071,
    ];
    const result = getTaskB([0.1, 0.35, 0.4, 0.55, 0.6]);
    expect(result).toEqual(expectedResult);
  });
  it('length returned array B', () => {
    const ansverB = getTaskB([0, 1, 2, 3, 4]);
    expect(ansverB).toHaveLength(5);
  });

  it('checking empty array B', () => {
    expect(getTaskB([])).toHaveLength(0);
  });
});
