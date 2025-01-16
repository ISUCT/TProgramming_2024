import { taskA, taskB } from '../labs/formula';

describe('Test of taskA and taskB', () => {
  it('Function "taskA" should return answer with correct length', () => {
    const [, y] = taskA();
    expect(y).toHaveLength(6);
  });
  it('Function "taskB" should return answer with correct length', () => {
    const [, y] = taskB();
    expect(y).toHaveLength(5);
  });
});
