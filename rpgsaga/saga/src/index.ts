import { taskA, taskB } from './labs/formula';
import { Phone } from './labs/classes';

// ---------------------FORMULA---------------------
console.log('taskA');
const xn = 0.2;
const xk = 2.2;
const dx = 0.4;
let [x, y] = taskA(xn, xk, dx);
for (let i = 0; i < y.length; i++) {
  console.log(`x= ${x[i]} y= ${y[i]}`);
}

console.log('taskB');
const xB = [0.1, 0.9, 1.2, 1.5, 2.3];
[x, y] = taskB(xB);
for (let i = 0; i < y.length; i++) {
  console.log(`x= ${x[i]} y= ${y[i]}`);
}

// ---------------------CLASSES---------------------

const phone = new Phone(89158121337, 'iPhone', '11');
console.log(phone);
const phone1 = new Phone(88123456789, 'Samsung', 's23');
console.log(phone1);
console.log(phone1.phoneNumber);
phone1.phoneNumber = 89098765432;
console.log(phone1.phoneNumber);
phone1.phoneNumber = 8;
