import { taskA, taskB, formula } from "../src/tasks";

describe('Test of tasks forms', () => {
  it('Func "formula" handles singularity and calculations correctly', () => {
    expect(formula(1.0)).toBeNaN();
    expect(formula(2.0, 1.6)).toBeCloseTo(1.085597694235, 12);
  });

  it('Func "taskA" returns correct length and values', () => {
    const y = taskA(1.2, 3.7, 0.5, 1.6);
    expect(y).toHaveLength(6);
    expect(y[0]).toBeCloseTo(2.106786926144, 12);
    expect(y[5]).toBeCloseTo(-3.183294253698, 12);
  });

  it('Func "taskB" returns correct length and values', () => {
    const y = taskB([1.28, 1.36, 2.47, 3.68, 4.56], 1.6);
    expect(y).toHaveLength(5);
    expect(y[0]).toBeCloseTo(2.061841065121, 12);
    expect(y[4]).toBeCloseTo(-9.046229847161, 12);
  });
});
