import { taskA,taskB } from "../src/tasks";

describe('Test of tasks forms', () => {
  it('Func "taskA" return correct length', () => {
    const y = taskA();
    expect(y).toHaveLength(6);
  });
  it('Func "taskB" return correct length', () => {
    const y = taskB();
    expect(y).toHaveLength(5);
  });
});