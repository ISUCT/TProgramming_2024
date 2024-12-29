import { calcYA, calcYB } from './calculate/calcFunction';

const a = 1.1;
const b = 0.09;
const xVal = [1.21, 1.76, 2.53, 3.48, 4.52];
const startX = 1.2;
const endX = 2.2;
const xStep = 0.2;

console.log('Задача А:', calcYA(a, b, startX, endX, xStep));
console.log('Задача B:', calcYB(a, b, xVal));
