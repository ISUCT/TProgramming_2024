import { solution, task_A, task_B, Table} from "../src";

describe('Testing functions from 1 laboratory work', () => {
    it('should return 97.14 for solution(0.03, 0.02, 0.13)', () => {
        const res = solution(0.03, 0.02, 0.13)
        expect(res).toBeCloseTo(97.14, 2);
    })
    it('should return Infinity for solution(0, 0, 0)', () => {
        const res = solution(0, 0, 0);
        expect(res).toBe(Infinity);
    });
    it('should return an array of results for valid inputs', () => {
        const res = task_A(0.03, 0.02, 0, 0.1, 0.01);
        expect(res).toHaveLength(11);
        expect(res[0]).toBeCloseTo(solution(0.03, 0.02, 0), 2);
        expect(res[1]).toBeCloseTo(solution(0.03, 0.02, 0.01), 2);
    });
    it('should return an empty array when x_start is greater than x_end', () => {
        const res = task_A(0.03, 0.02, 1, 0, 0.1);
        expect(res).toEqual([]);
    });
    it('should return an empty array when x_start equals x_end', () => {
        const res = task_A(0.03, 0.02, 0.1, 0.1, 0.01);
        expect(res).toEqual([]);
    });
    it('should return an empty array when input list is empty', () => {
        const res = task_B(0.03, 0.02, []);
        expect(res).toEqual([]);
    });
    it('should handle negative values in the input list', () => {
        const input = [-0.01, -0.02, -0.03];
        const res = task_B(0.03, 0.02, input);
        expect(res).toHaveLength(input.length);
        expect(res[0]).toBeCloseTo(solution(0.03, 0.02, -0.01), 2);
        expect(res[1]).toBeCloseTo(solution(0.03, 0.02, -0.02), 2);
        expect(res[2]).toBeCloseTo(solution(0.03, 0.02, -0.03), 2);
    });
    it('should return NaN for large input values', () => {
        const input = [100, 200, 300];
        const res = task_B(0.03, 0.02, input);
        expect(res).toHaveLength(input.length);
        expect(res[0]).toBeNaN();
    });
})

describe('Table class', () => {
    let table = new Table(100, 60, 70);
    it('should return correct dimensions', () => {
        expect(table.getDimensions()).toBe('Table dimensions: Length - 100 sm, Width - 60 sm, Height - 70 sm');
    });
    it('should set new dimensions', () => {
        table.setDimensions(120, 80, 75);
        expect(table.getDimensions()).toBe('Table dimensions: Length - 120 sm, Width - 80 sm, Height - 75 sm');
    });
    it('should categorize table as Small', () => {
        table.setDimensions(100, 60, 50);
        expect(table.tableCategory()).toBe('Small');
    });
    it('should categorize table as Medium', () => {
        table.setDimensions(150, 70, 75);
        expect(table.tableCategory()).toBe('Medium');
    });
    it('should categorize table as Large', () => {
        table.setDimensions(200, 100, 90);
        expect(table.tableCategory()).toBe('Large');
    });
    it('should return unknown category for non-standard dimensions', () => {
        table.setDimensions(50, 30, 20);
        expect(table.tableCategory()).toBe('Well, I do not know what kind of table you have there');
    });
    it('should identify standard table', () => {
        table.setDimensions(120, 80, 75);
        expect(table.isStandard()).toBe(true);
    });
    it('should not identify non-standard table', () => {
        table.setDimensions(100, 60, 70);
        expect(table.isStandard()).toBe(false);
    });
});