import { taskA, taskB } from './tasks';
import { DocumentClass } from './classes';

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

const document1 = new DocumentClass('License', 1024, 2008);
console.log(document1);
console.log(document1.getDocumentDate());
console.log(document1.setSize(2048));
console.log(document1);
console.log(document1.deleteDocument());
