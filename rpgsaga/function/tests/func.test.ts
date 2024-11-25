import { calc, task1, task2 } from '../src/func'; // Adjust the import according to your file structure

describe('calc function', () => {
    test('should calculate correctly for positive numbers', () => {
        const result = calc(2, 3, 10);
        expect(result).toBeCloseTo(2, 3); // Example expected value
    });

    test('should handle edge case where log10(x) is undefined (x <= 0)', () => {
        expect(() => calc(2, 3, 0)).toThrow();
        expect(() => calc(2, 3, -10)).toThrow();
    });

    test('should handle very large x values', () => {
        const result = calc(1, 2, 1e6);
        expect(result).toBeGreaterThan(0);
    });
});

describe('task1 function', () => {
    test('should calculate array correctly with uniform step size', () => {
        const result = task1(2, 3, 1, 5, 1);
        expect(result).toHaveLength(5);
        expect(result[0]).toBeCloseTo(calc(2, 3, 1), 3);
        expect(result[4]).toBeCloseTo(calc(2, 3, 5), 3);
    });

    test('should return single element when xn equals xk', () => {
        const result = task1(2, 3, 4, 4, 1);
        expect(result).toHaveLength(1);
        expect(result[0]).toBeCloseTo(calc(2, 3, 4), 3);
    });

    test('should handle negative deltax by throwing an exception', () => {
        expect(() => {task1(2, 3, 1, 5, -1);}).toThrow();
    });

    test('should throw error if deltax is zero (division by zero)', () => {
        expect(() => task1(2, 3, 1, 5, 0)).toThrow();
    });
});

describe('task2 function', () => {
    test('should calculate values correctly for an array of inputs', () => {
        const znX = [1, 2, 3];
        const result = task2(2, 3, znX);
        expect(result).toHaveLength(3);
        expect(result[0]).toBeCloseTo(calc(2, 3, 1), 3);
        expect(result[1]).toBeCloseTo(calc(2, 3, 2), 3);
        expect(result[2]).toBeCloseTo(calc(2, 3, 3), 3);
    });

    test('should handle empty input array', () => {
        const result = task2(2, 3, []);
        expect(result).toEqual([]);
    });

    test('should throw error for invalid x values in znX', () => {
        const znX = [1, -2, 3];
        expect(() => task2(2, 3, znX)).toThrow();
    });
});