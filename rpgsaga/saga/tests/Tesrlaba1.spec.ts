import { taskA, taskB, calc } from "../src/laba1";


describe('calc function', () => {
    test('calculates correctly for x = 1.25', () => {
        expect(calc(1.25)).toBeCloseTo(1.56);
    });

    test('calculates correctly for x = 1.65', () => {
        expect(calc(1.65)).toBeCloseTo(1.44);
    });
});

describe('taskA function', () => {
    test('returns correct arrays for given range', () => {
        const [xValues, yValues] = taskA(1.25, 3.25, 0.4);
        const roundedXValues = xValues.map(x => parseFloat(x.toFixed(2)));
        expect(roundedXValues).toEqual([1.25, 1.65, 2.05, 2.45, 2.85, 3.25]);
        expect(yValues[0]).toBeCloseTo(1.56);
        expect(yValues[1]).toBeCloseTo(1.44);
        expect(yValues[2]).toBeCloseTo(2.00);
        expect(yValues[3]).toBeCloseTo(2.29);
        expect(yValues[4]).toBeCloseTo(2.51);
        expect(yValues[5]).toBeCloseTo(2.69);
    });
});

describe('taskB function', () => {
    test('returns correct arrays for given array of x values', () => {
        const xValues = [1.84, 2.71, 3.81, 4.56, 5.62];
        const [xResult, yValues] = taskB(xValues);
        expect(xResult).toEqual(xValues);
        expect(yValues[0]).toBeCloseTo(1.78);
        expect(yValues[1]).toBeCloseTo(2.44);
        expect(yValues[2]).toBeCloseTo(2.91);
        expect(yValues[3]).toBeCloseTo(3.16);
        expect(yValues[4]).toBeCloseTo(3.47);
    });
});