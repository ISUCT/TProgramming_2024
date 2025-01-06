import { drob, solution, taskA, taskB } from '../src/lab1';

describe('Math Functions Testing', () => {
    
    describe('solution function', () => {
        it('should return correct value for solution(1)', () => {
            const res = solution(1);
            const expectedResult = (Math.pow(Math.pow((1 - 0.8), 2), drob(3.0)) + Math.pow(Math.abs(1 + 0.4), drob(5.0))) /
                                    Math.pow((Math.pow(1, 2) - Math.pow((0.8 + 0.4), 2)), drob(9.0));
            if (expectedResult !== expectedResult) {
                expect(res).toBeNaN();
            } else {
                expect(res).toBeCloseTo(expectedResult, 5);
            }
        });

        it('should handle large values for solution(10)', () => {
            const res = solution(10);
            const expectedResult = (Math.pow(Math.pow((10 - 0.8), 2), drob(3.0)) + Math.pow(Math.abs(10 + 0.4), drob(5.0))) /
                                    Math.pow((Math.pow(10, 2) - Math.pow((0.8 + 0.4), 2)), drob(9.0));
            expect(res).toBeCloseTo(expectedResult, 5);
        });

        it('should return NaN for negative scenarios that lead to invalid calculations', () => {
            const res = solution(-0.4);
            expect(res).toBeNaN();
        });

        it('should return correct value for solution(3.14)', () => {
            const res = solution(3.14);
            const expectedResult = (Math.pow(Math.pow((3.14 - 0.8), 2), drob(3.0)) + Math.pow(Math.abs(3.14 + 0.4), drob(5.0))) /
                                    Math.pow((Math.pow(3.14, 2) - Math.pow((0.8 + 0.4), 2)), drob(9.0));
            expect(res).toBeCloseTo(expectedResult, 5);
        });
    });

    describe('taskA function', () => {
        it('should return an array for taskA(0, 1, 0.1)', () => {
            const expectedOutputs = [];
            for (let i = 0; i <= 1; i += 0.1) {
                expectedOutputs.push(solution(i));
            }
            const result = taskA(0, 1, 0.1);
            expect(result).toEqual(expectedOutputs);
        });

        it('should return an empty array for taskA with inverted range (2, 1, 0.5)', () => {
            const result = taskA(2, 1, 0.5);
            expect(result).toEqual([]);
        });

        it('should return correct results for taskA using negative range (-1, -0.5, 0.1)', () => {
            const expectedOutputs = [];
            for (let i = -1; i <= -0.5; i += 0.1) {
                expectedOutputs.push(solution(i));
            }
            const result = taskA(-1, -0.5, 0.1);
            expect(result).toEqual(expectedOutputs);
        });
    });

    describe('taskB function', () => {
        it('should return correct results for taskB([3, 6])', () => {
            const input = [3, 6, 9];
            const expectedOutputs = input.map(x => solution(x));
            const result = taskB(input);
            expect(result).toEqual(expectedOutputs);
        });

        it('should return an empty array for taskB with no input', () => {
            const result = taskB([]);
            expect(result).toEqual([]);
        });

        it('should handle decimal inputs for taskB([0.2, 0.5, 0.9])', () => {
            const input = [0.2, 0.5, 0.9];
            const expectedOutputs = input.map(x => solution(x));
            const result = taskB(input);
            expect(result).toEqual(expectedOutputs);
        });

        it('should return correct values for taskB with negative inputs([-1, -2])', () => {
            const input = [-1, -3];
            const expectedOutputs = input.map(x => solution(x));
            const result = taskB(input);
            expect(result).toEqual(expectedOutputs);
        });
    });
});