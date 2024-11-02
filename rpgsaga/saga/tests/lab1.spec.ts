import { solution, taskA, taskB } from '../src/lab1';

describe('Solution', () => {
    it('should return correct value for solution(2)', () => {
        const res = solution(2);
        expect(res).toBeCloseTo(Math.pow(1.2, 2) - Math.pow(2, 1.2), 5);
    });

    it('should return correct value for solution(0)', () => {
        const res = solution(0);
        expect(res).toBeCloseTo(Math.acos(0), 5);
    });

    it('should return correct value for solution(0.5)', () => {
        const res = solution(0.5);
        expect(res).toBeCloseTo(Math.acos(0.5), 5);
    });

    it('should return correct array for taskA(0.2, 2.2, 0.4)', () => {
        const expected = [];
        for (let i = 0.2; i < 2.2; i += 0.4) {
            expected.push(solution(i));
        }
        const res = taskA(0.2, 2.2, 0.4);
        expect(res).toEqual(expected);
    });

    it('should return correct values for taskB([0.1, 0.9, 1.2])', () => {
        const input = [0.1, 0.9, 1.2];
        const expected = input.map(x => solution(x));
        const res = taskB(input);
        expect(res).toEqual(expected);
    });

    it('should return an empty array for taskB([])', () => {
        const res = taskB([]);
        expect(res).toEqual([]);
    });

    it('should handle negative values in the input array for taskB([-0.5, -0.2])', () => {
        const input = [-0.5, -0.2];
        const expected = input.map(x => solution(x));
        const res = taskB(input);
        expect(res).toEqual(expected);
    });
});