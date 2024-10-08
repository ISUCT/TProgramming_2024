import { taskA, taskB, form } from "../src";

const a: number = 2.25;
const xStart: number = 1.2;
const xEnd: number = 2.7;
const step: number = 0.3;
const listX: number[] = [1.31, 1.39, 1.44, 1.56, 1.92];

describe('Test of taskA and taskB', () => {
    it('Function "taskA" should return answer with correct length', () => {
        const [x, y] = taskA(xStart, xEnd, step, a);
        expect(y).toHaveLength(6);
    });
    it('Function "taskB" should return answer with correct length', () => {
        const [x, y] = taskB(a, listX);
        expect(y).toHaveLength(5);
    });
});
describe('Test of function "form', () => {
    it('Function form should return 3.01 with input 1.2, 2.25', () => {
        expect(form(1.2, a)).toBeCloseTo(3.01);
    });
    it('Function form should return undefined(lg(0)) with input 1, 2.25', () => {
        expect(form(1, a)).toBeUndefined;
    });
    it('Function form should return undefined(lg(negative)) with input 0, 2.25', () => {
        expect(form(0, a)).toBeUndefined;
    });
    it('Function form should return 3.01 with input 2.7, 2.25', () => {
        expect(form(2.7, a)).toBeCloseTo(164.15)
    });
    it('Function form should return 36560.92 with input 3, 3', () => {
        expect(form(3, 3)).toBeCloseTo(6560.92);
    });
}) 