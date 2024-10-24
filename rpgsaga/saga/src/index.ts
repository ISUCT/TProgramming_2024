import { taskA, taskB, output } from './functionNum3';

const taskARes = taskA(2, 0.95, 1.25, 2.75, 0.3);
console.log(output('A', taskARes));

const taskBRes = taskB(2, 0.95, []);
console.log(output('B', taskBRes));
