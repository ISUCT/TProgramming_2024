import {task14A, task14B} from './lab1';

const a = 7.2;
const b = 4.2;
let xn = 1.81;
let xk = 5.31;
let dx = 0.7;
const xs: number[] = [2.4, 2.8, 3.9, 4.7, 3.16];

console.log(task14A(a, b, xn, xk, dx));
console.log(task14B(a, b, xs));
