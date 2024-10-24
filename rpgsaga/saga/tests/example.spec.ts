import { solution, taskA, taskB } from "../src/lab_1";
import { Table } from "../src/Table";


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
        const res = taskA(0.03, 0.02, 0, 0.1, 0.01);
        expect(res).toHaveLength(11);
        expect(res[0]).toBeCloseTo(solution(0.03, 0.02, 0), 2);
        expect(res[1]).toBeCloseTo(solution(0.03, 0.02, 0.01), 2);
    });
    it('should return an empty array when x_start is greater than x_end', () => {
        const res = taskA(0.03, 0.02, 1, 0, 0.1);
        expect(res).toEqual([]);
    });
    it('should return an empty array when x_start equals x_end', () => {
        const res = taskA(0.03, 0.02, 0.1, 0.1, 0.01);
        expect(res).toEqual([]);
    });
    it('should return an empty array when input list is empty', () => {
        const res = taskB(0.03, 0.02, []);
        expect(res).toEqual([]);
    });
    it('should handle negative values in the input list', () => {
        const input = [-0.01, -0.02, -0.03];
        const res = taskB(0.03, 0.02, input);
        expect(res).toHaveLength(input.length);
        expect(res[0]).toBeCloseTo(solution(0.03, 0.02, -0.01), 2);
        expect(res[1]).toBeCloseTo(solution(0.03, 0.02, -0.02), 2);
        expect(res[2]).toBeCloseTo(solution(0.03, 0.02, -0.03), 2);
    });
    it('should return NaN for large input values', () => {
        const input = [100, 200, 300];
        const res = taskB(0.03, 0.02, input);
        expect(res).toHaveLength(input.length);
        expect(res[0]).toBeNaN();
    });
})

describe('Table Class', () => {
    let table: Table = new Table(120, 80, 75); 
    it('should create a table with correct dimensions', () => {
        expect(table.length).toBe(120);
        expect(table.width).toBe(80);
        expect(table.height).toBe(75);
        expect(table.dimensions).toBe('Table dimensions: Length - 120 sm, Width - 80 sm, Height - 75 sm');
    });
    it('should set valid dimensions', () => {
        table.length = 150;
        table.width = 90;
        table.height = 100;
        expect(table.length).toBe(150);
        expect(table.width).toBe(90);
        expect(table.height).toBe(100);
    });
    it('should throw error for invalid length', () => {
        expect(() => {
            table.length = 50; 
        }).toThrow('Incorrect length value');
        expect(() => {
            table.length = 550;
        }).toThrow('Incorrect length value');
    });
    it('should throw error for invalid width', () => {
        expect(() => {
            table.width = 30; 
        }).toThrow('Incorrect width value');
        expect(() => {
            table.width = 320; 
        }).toThrow('Incorrect width value');
    });
    it('should throw error for invalid height', () => {
        expect(() => {
            table.height = 20; 
        }).toThrow('Incorrect height value');
        expect(() => {
            table.height = 140; 
        }).toThrow('Incorrect height value');
    });
    it('should return correct table category', () => {
        const smallTable = new Table(80, 50, 40);
        expect(smallTable.tableCategory()).toBe('Small');

        const mediumTable = new Table(150, 70, 75);
        expect(mediumTable.tableCategory()).toBe('Medium');

        const largeTable = new Table(300, 150, 100);
        expect(largeTable.tableCategory()).toBe('Large');

        const unknownTable = new Table(110, 50, 90);
        expect(unknownTable.tableCategory()).toBe('Well, I do not know what kind of table you have there');
    });
    it('should correctly identify standard table', () => {
        const standartTable = new Table(120, 80, 75);
        expect(standartTable.isStandard()).toBe(true);

        const nonStandardTable = new Table(100, 70, 80);
        expect(nonStandardTable.isStandard()).toBe(false);
    });
});


