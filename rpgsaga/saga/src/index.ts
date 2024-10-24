import { death, taskA, taskB } from "./laba1";

// Вариант_21

const xStart = 0.11;
const xEnd = 0.36;
const xStep = 0.05;
const listX = [0.2, 0.3, 0.38, 0.43, 0.57];

console.log('Хабибулина Алина 2/280');
console.log(death(0.1));
console.log(`Ответы к задаче A: ${taskA(xStart, xEnd, xStep)}`);
console.log(`Ответы к задаче B: ${taskB(listX)}`);


