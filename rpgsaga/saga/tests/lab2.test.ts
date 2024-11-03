import { calcY, task1, task2 } from '../src/lab2';

describe('calcY', () => {
    it('should calculate y correctly for given inputs', () => {
        const a = 4.1;
        const b = 2.7;
        const x = 2.5;
        const expectedY = (4.1 * Math.sqrt(2.5) - 2.7 * (Math.log(2.5) / Math.log(5))) / (Math.log10(Math.abs(2.5 - 1)));
        const result = calcY(a, b, x);
        expect(result).toBeCloseTo(expectedY, 5);
    });

    it('should handle edge cases', () => {
        const a = 0;
        const b = 0;
        const x = 1;
        const result = calcY(a, b, x);
        expect(result).toBe(-0);
    });
});

describe('task1', () => {
    it('should generate correct array of y values for given range', () => {
        const a = 4.1;
        const b = 2.7;
        const x1 = 1.2;
        const x2 = 5.2;
        const deltax = 0.7;
        const expectedYValues = [
            calcY(a, b, 1.2),
            calcY(a, b, 1.9),
            calcY(a, b, 2.6),
            calcY(a, b, 3.3),
            calcY(a, b, 4.0),
            calcY(a, b, 4.7),
            calcY(a, b, 5.2),
        ];
        const result = task1(a, b, x1, x2, deltax);

        result.forEach((value, index) => {
            expect(value).toBeCloseTo(expectedYValues[index], 5);
        });
    });

    it('should handle edge cases', () => {
        const a = 4.1;
        const b = 2.7;
        const x1 = 1.2;
        const x2 = 1.2;
        const deltax = 0.7;
        const expectedYValues = [calcY(a, b, 1.2)];
        const result = task1(a, b, x1, x2, deltax);
        expect(result).toEqual(expectedYValues);
    });
});
describe('task2', () => {
    it('should generate correct array of y values for given x values', () => {
        const a = 4.1;
        const b = 2.7;
        const xValues = [1.9, 2.15, 2.34, 2.73, 3.16];

        const expectedYValues = [
            calcY(a, b, 1.9),
            calcY(a, b, 2.15),
            calcY(a, b, 2.34),
            calcY(a, b, 2.73),
            calcY(a, b, 3.16),
        ];

        const result = task2(a, b, xValues);

        expect(result).toEqual(expectedYValues);
    });

    it('should handle edge cases', () => {
        const a = 4.1;
        const b = 2.7;
        const xValues = [1.2];
        const expectedYValues = [calcY(a, b, 1.2)];
        const result = task2(a, b, xValues);
        expect(result).toEqual(expectedYValues);
    });
});