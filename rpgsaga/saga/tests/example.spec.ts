import { solution, task_A, task_B } from "../src";

describe('Test lab 1', () => {
    it('should calculate the correct result for positive integers', () => {
        expect(solution(2, 1, 3)).toBeCloseTo(12.7, 1);
    });
    it('should handle equal inputs', () => {
        expect(solution(2, 2, 3)).toBeNaN();
    });
    it('should handle larger numbers', () => {
        expect(solution(100, 10, 2)).toBeCloseTo(42995.15, 2);
    });
    it('should handle small numbers', () => {
        expect(solution(0.1, 0.01, 2)).toBeCloseTo(0.0004, 4);
    });
    it('should return correct results for positive integers', () => {
        expect(task_A(2, 1, 0, 5, 1)).toEqual([
            solution(2, 1, 0),
            solution(2, 1, 1),
            solution(2, 1, 2),
            solution(2, 1, 3),
            solution(2, 1, 4),
        ]);
    });
    it('should handle equal inputs', () => {
        expect(task_A(2, 2, 0, 5, 1)).toEqual([NaN, NaN, NaN, NaN, NaN]);
    });
    it('should return an empty array for invalid ranges', () => {
        expect(task_A(2, 1, 5, 5, 1)).toEqual([]);
        expect(task_A(2, 1, 5, 1, 1)).toEqual([]);
    });
    it('should return correct results for positive integers', () => {
        expect(task_B(2, 1, [0, 1, 2, 3, 4])).toEqual([
            solution(2, 1, 0),
            solution(2, 1, 1),
            solution(2, 1, 2),
            solution(2, 1, 3),
            solution(2, 1, 4),
        ]);
    });
    it('should handle equal inputs', () => {
        expect(task_B(2, 2, [0, 1, 2, 3, 4])).toEqual([NaN, NaN, NaN, NaN, NaN]);
    });
    it('should handle empty input array', () => {
        expect(task_B(2, 1, [])).toEqual([]);
    });
    it('should handle large numbers', () => {
        const result = task_B(1000, 10, [1, 2, 3]);
        expect(result).toEqual([
            solution(1000, 10, 1),
            solution(1000, 10, 2),
            solution(1000, 10, 3),
        ]);
    });
    it('should handle small numbers', () => {
        const result = task_B(0.1, 0.01, [1, 2, 3]);
        expect(result).toEqual([
            solution(0.1, 0.01, 1),
            solution(0.1, 0.01, 2),
            solution(0.1, 0.01, 3),
        ]);
    });
});
