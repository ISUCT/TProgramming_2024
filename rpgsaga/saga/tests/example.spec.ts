import { death, task_A, task_B} from "../src";

describe('Testing functions from laboratory work', () => {
    it('should return -2.3 for death(0.1)', () => {
        const res = death(0.1);
        expect(res).toBeCloseTo(-2.3, 1);
    });

    it('should return -Infinity for death(0)', () => {
        const res = death(0);
        expect(res).toBe(-Infinity);
    });

    it('should return a positive value for death(1)', () => {
        const res = death(1);
        expect(res).toBe(0);
    });

    it('should return a negative value for death(0.5)', () => {
        const res = death(0.5);
        expect(res).toBeLessThan(0);
    });

    it('should return a valid number for death(0.2)', () => {
        const res = death(0.2);
        expect(res).toBeDefined();
        expect(typeof res).toBe('number');
    });

    it('should return an empty array for an invalid range', () => {
        const res = task_A(1, 0, 0.1);
        expect(res).toEqual([]);
    });

    it('should handle a step of 0.5 correctly', () => {
        const res = task_A(0, 1, 0.5);
        expect(res).toEqual([
            death(0),
            death(0.5),
            death(1)
        ]);
    });

    it('should return results for a single value when start and end are the same', () => {
        const res = task_A(0.2, 0.2, 0.1);
        expect(res).toEqual([death(0.2)]);
    });

    it('should return correct results for negative values', () => {
        const res = task_A(-1, -0.5, 0.1);
        expect(res).toEqual([
            death(-1),
            death(-0.9),
            death(-0.8),
            death(-0.7),
            death(-0.6),
            death(-0.5)
        ]);
    });

    it('should return an array of results for a given list of numbers', () => {
        const input = [0.1, 0.2, 0.3];
        const res = task_B(input);
        expect(res).toEqual([
            death(0.1),
            death(0.2),
            death(0.3)
        ]);
    });

    it('should return an empty array for an empty input', () => {
        const input = [];
        const res = task_B(input);
        expect(res).toEqual([]);
    });

    it('should handle negative values correctly', () => {
        const input = [-0.5, -0.1];
        const res = task_B(input);
        expect(res).toEqual([
            death(-0.5),
            death(-0.1)
        ]);
    });

    it('should return results for a single value', () => {
        const input = [0.5];
        const res = task_B(input);
        expect(res).toEqual([death(0.5)]);
    });

    it('should return results for large numbers', () => {
        const input = [100, 200, 300];
        const res = task_B(input);
        expect(res).toEqual([
            death(100),
            death(200),
            death(300)
        ]);
    });
});