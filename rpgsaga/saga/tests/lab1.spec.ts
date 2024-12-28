import { formula, taskA, taskB } from '../src/lab1';

describe('Formula', () => {
    it('should return NaN when x is close to 1', () => {
        const res = formula(1);
        expect(res).toBeNaN();
    });

    it('should return correct value for formula(1.5)', () => {
        const res = formula(1.5);
        const expected = Math.pow(1.6, Math.pow(1.5, 2) - 1) 
                       - Math.log10(Math.pow(1.5, 2) - 1) 
                       + Math.pow(Math.pow(1.5, 2) - 1, 1 / 3);
        const roundedExpected = Math.fround(expected * 1e12) / 1e12;
        expect(res).toBeCloseTo(roundedExpected, 12);
    });

    it('should return correct value for formula(2)', () => {
        const res = formula(2);
        const expected = Math.pow(1.6, Math.pow(2, 2) - 1) 
                       - Math.log10(Math.pow(2, 2) - 1) 
                       + Math.pow(Math.pow(2, 2) - 1, 1 / 3);
        const roundedExpected = Math.fround(expected * 1e12) / 1e12;
        expect(res).toBeCloseTo(roundedExpected, 12);
    });
});

describe('TaskA', () => {
    it('should return correct array for taskA(1.2, 3.7, 0.5)', () => {
        const expected: number[] = [];
        for (let x = 1.2; x <= 3.7; x += 0.5) {
            expected.push(formula(x));
        }
        const res = taskA(1.2, 3.7, 0.5);
        expect(res).toEqual(expected);
    });

    it('should return correct array for taskA(2.0, 3.0, 0.3)', () => {
        const expected: number[] = [];
        for (let x = 2.0; x <= 3.0; x += 0.3) {
            expected.push(formula(x));
        }
        const res = taskA(2.0, 3.0, 0.3);
        expect(res).toEqual(expected);
    });

    it('should return empty array when start > end', () => {
        const res = taskA(3.0, 2.0, 0.5);
        expect(res).toEqual([]);
    });
});

describe('TaskB', () => {
    it('should return correct values for taskB([1.28, 1.36, 2.47, 3.68, 4.56])', () => {
        const input = [1.28, 1.36, 2.47, 3.68, 4.56];
        const expected = input.map(x => formula(x));
        const res = taskB(input);
        expect(res).toEqual(expected);
    });

    it('should return an empty array for taskB([])', () => {
        const res = taskB([]);
        expect(res).toEqual([]);
    });

    it('should handle negative values in the input array for taskB([-0.5, -0.2])', () => {
        const input = [-0.5, -0.2];
        const expected = input.map(x => formula(x));
        const res = taskB(input);
        expect(res).toEqual(expected);
    });

    it('should return correct values for taskB([1.5, 2.0, 2.5]) with custom a = 2.0', () => {
        const input = [1.5, 2.0, 2.5];
        const a = 2.0;
        const expected = input.map(x => formula(x, a));
        const res = taskB(input, a);
        expect(res).toEqual(expected);
    });
});
