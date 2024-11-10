import { taskA, taskB } from './tasks';

console.log('Задача A');
let y = taskA();
for (const i of y) {
  console.log(`y = ${i}`);
}
console.log('Задача B');
y = taskB();
for (const i of y) {
  console.log(`y = ${i}`);
}
