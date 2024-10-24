import { solution, taskA, taskB } from "../src/Laba1";

describe('Тесты для функций 1 лабораторной работы', () => {
    it('should return 1.6 for solution(2, 3, 0.2)', () => {
        const res = solution(2, 3, 0.2)
        expect(res).toBeCloseTo(1.6, 1);
    })
    it('should return 1.6 for solution(0, 0, 0)', () => {
        const res = solution(0, 0, 0);
        expect(res).toBeCloseTo(1.6, 1);
    });
    it('should return NaN for solution(0, -1, 0)', () => {
        const res = solution(0, -1, 0);
        expect(res).toBeNaN();
    });
    it('should return correct array for task_A(2, 3, 0, 1, 0.1)', () => {
        const expected = [];
        for (let i = 0; i < 1; i += 0.1) {
            expected.push(solution(2, 3, i));
        }
        const res = taskA(2, 3, 0, 1, 0.1);
        expect(res).toEqual(expected);
    });
    it('should return an empty array for task_A(2, 3, 1, 1, 0.1)', () => {
        const res = taskA(2, 3, 1, 1, 0.1);
        expect(res).toEqual([]);
    });
    it('should return an empty array for task_A(0, 0, 0, 0, 0)', () => {
        const res = taskA(0, 0, 0, 0, 0);
        expect(res).toEqual([]);
    });
    it('should return an empty array for task_A(2, 3, 0.21, 0.16, 0.05)', () => {
        const res = taskA(2, 3, 0.21, 0.16, 0.05);
        expect(res).toEqual([]);
    });
    it('should return correct array for task_B(2, 3, [0, 0.2, 0.5])', () => {
        const input = [0, 0.2, 0.5];
        const expected = input.map(x => solution(2, 3, x));
        const res = taskB(2, 3, input);
        expect(res).toEqual(expected);
    });
    it('should return an empty array for task_B(2, 3, [])', () => {
        const res = taskB(2, 3, []);
        expect(res).toEqual([]);
    });
    it('should handle negative values in the input array for task_B(2, 3, [-0.5, -0.2])', () => {
        const input = [-0.5, -0.2];
        const expected = input.map(x => solution(2, 3, x));
        const res = taskB(2, 3, input);
        expect(res).toEqual(expected);
    });
})
