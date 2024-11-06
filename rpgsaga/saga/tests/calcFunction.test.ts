import { calcYA, calcYB } from '../src/FunctionCalculate/calculate/calcFunction';

describe('CalcYA', () => {
  it('должно вернуть правильные значения для calcYA', () => {
    const a = 1.1;
    const b = 0.09;
    const x1 = 1.2;
    const x2 = 2.2;

    const result = calcYA(a, b, x1, x2);

    const expected = [
      -1.4293950687029888,

      -0.0393230217579651,

      0.3099432579827624,

      0.45266154436417616,

      0.5256192162655812,

      0.5681842518372162,
    ];

    expect(result).toEqual(expected);
  });
});

describe('CalcYB', () => {
  it('должно вернуть правильные значения для calcYB', () => {
    const a = 1.1;
    const b = 0.09;
    const xVal = [1.21, 1.76, 2.53, 3.48, 4.52];

    const result = calcYB(a, b, xVal);

    const expected = [
      -1.2804518624985726,

      0.4317928048011021,

      0.6080088912659228,

      0.6516842499124879,

      0.6671547427339599,
    ];

    expect(result).toEqual(expected);
  });
});
