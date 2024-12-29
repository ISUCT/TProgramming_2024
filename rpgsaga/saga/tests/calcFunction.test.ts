import { calcYA, calcYB } from '../src/FunctionCalculate/calculate/calcFunction';

describe('CalcYA', () => {
  it('должно вернуть правильные значения для calcYA с параметрами по умолчанию', () => {
    const a = 1.1;
    const b = 0.09;
    const startX = 1.2;
    const endX = 2.2;
    const xStep = 0.2;

    const result = calcYA(a, b, startX, endX, xStep);

    const roundedResult = result.map(value => parseFloat(value.toFixed(2)));

    const expected = [
      -1.43,

      -0.04,

      0.31,

      0.45,

      0.53,

      0.57,
    ];

    expect(roundedResult).toEqual(expected);
  });

  it('должно вернуть правильные значения для calcYA с измененным шагом', () => {
    const a = 1.1;
    const b = 0.09;
    const startX = 1.2;
    const endX = 2.2;
    const xStep = 0.5;

    const result = calcYA(a, b, startX, endX, xStep);

    const roundedResult = result.map(value => parseFloat(value.toFixed(2)));

    const expected = [
      -1.43,

      0.39,

      0.57,
    ];

    expect(roundedResult).toEqual(expected);
  });

  it('должно вернуть правильные значения для calcYA с измененными границами', () => {
    const a = 1.1;
    const b = 0.09;
    const startX = 1.5;
    const endX = 3.0;
    const xStep = 0.5;

    const result = calcYA(a, b, startX, endX, xStep);

    const roundedResult = result.map(value => parseFloat(value.toFixed(2)));

    const expected = [
      0.18,

      0.53,

      0.61,

      0.64,
    ];

    expect(roundedResult).toEqual(expected);
  });

  it('должно вернуть правильные значения для calcYA с измененными параметрами a и b', () => {
    const a = 2.0;
    const b = 0.1;
    const startX = 1.2;
    const endX = 2.2;
    const xStep = 0.2;

    const result = calcYA(a, b, startX, endX, xStep);

    const roundedResult = result.map(value => parseFloat(value.toFixed(2)));

    const expected = [
      -0.56,

      -0.02,

      0.19,

      0.3,

      0.37,

      0.42,
    ];

    expect(roundedResult).toEqual(expected);
  });

  it('должно вернуть NaN для некорректных значений x', () => {
    const a = 1.1;
    const b = 0.09;
    const startX = 0.5;
    const endX = 1.0;
    const xStep = 0.1;

    const result = calcYA(a, b, startX, endX, xStep);

    expect(result).toContainEqual(NaN);
  });
});

describe('CalcYB', () => {
  it('должно вернуть правильные значения для calcYB с параметрами по умолчанию', () => {
    const a = 1.1;
    const b = 0.09;
    const xVal = [1.21, 1.76, 2.53, 3.48, 4.52];

    const result = calcYB(a, b, xVal);

    const roundedResult = result.map(value => parseFloat(value.toFixed(2)));

    const expected = [
      -1.28,

      0.43,

      0.61,

      0.65,

      0.67,
    ];

    expect(roundedResult).toEqual(expected);
  });

  it('должно вернуть правильные значения для calcYB с измененными значениями xVal', () => {
    const a = 1.1;
    const b = 0.09;
    const xVal = [1.5, 2.0, 2.5, 3.0, 3.5];

    const result = calcYB(a, b, xVal);

    const roundedResult = result.map(value => parseFloat(value.toFixed(2)));

    const expected = [
      0.18,

      0.53,

      0.61,

      0.64,

      0.65,
    ];

    expect(roundedResult).toEqual(expected);
  });

  it('должно вернуть правильные значения для calcYB с измененными параметрами a и b', () => {
    const a = 2.0;
    const b = 0.1;
    const xVal = [1.21, 1.76, 2.53, 3.48, 4.52];

    const result = calcYB(a, b, xVal);

    const roundedResult = result.map(value => parseFloat(value.toFixed(2)));

    const expected = [
      -0.52,

      0.29,

      0.46,

      0.53,

      0.56,
    ];

    expect(roundedResult).toEqual(expected);
  });

  it('должно вернуть NaN для некорректных значений xVal', () => {
    const a = 1.1;
    const b = 0.09;
    const xVal = [0.5, 1.0, 1.5, 2.0, 2.5];

    const result = calcYB(a, b, xVal);

    expect(result).toContainEqual(NaN);
  });
});
