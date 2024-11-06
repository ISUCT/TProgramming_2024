import { calcYA, calcYB } from './calculate/calcFunction';

const a = 1.1;
const b = 0.09;
const xVal = [1.21, 1.76, 2.53, 3.48, 4.52];
const x1 = 1.2;
const x2 = 2.2;

console.log('Задача А:', calcYA(a, b, x1, x2));
console.log('Задача B:', calcYB(a, b, xVal));
