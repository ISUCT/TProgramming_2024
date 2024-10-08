import { taskA, taskB} from "../src";

describe('Test of taskA and taskB', () => {
    it('Function "taskA" should return answer with correct length', () => {
        const [x, y] = taskA();
        expect(y).toHaveLength(6);
    });
    it('Function "taskB" should return answer with correct length', () => {
        const [x, y] = taskB();
        expect(y).toHaveLength(5);
    });
});