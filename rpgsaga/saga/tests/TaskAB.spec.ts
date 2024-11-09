import { taskA, taskB } from "../src/Lab1/formuls";

describe('Tests of task A and task B', () => {
    it('Func "taskA" return correct lenght', () => {
        const y = taskA(1.6, 1.2, 3.7, 0.5);
        expect(y).toHaveLength(6);
    });
    it('Func "taskB" return correct lenght', () => {
        const y = taskB(1.6, [1.28, 1.36, 2.47, 3.68, 4.56]);
        expect(y).toHaveLength(5);
    })
});