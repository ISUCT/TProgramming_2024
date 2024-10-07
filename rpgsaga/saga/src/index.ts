import { fox } from './fox';

const xStart = 1.14;
const xEnd = 3.28;
const xStep = 0.4;
const xArray = [1.1, 2.4, 3.6, 1.7, 3.9];

function taskA(start: number, end: number, step: number) {
  let count = 0;
  const a = 1.35;
  const b = 0.98;
  if (step < 0) {
    return 0;
  }
  for (let i = start; i < end; i = i + step) {
    count += 1;
    console.log(calculateFunc(a, b, i));
  }
  return count;
}
function taskB(array: number[]) {
  let count = 0;
  const a = 1.35;
  const b = 0.98;
  for (const i of array) {
    count += 1;
    console.log(calculateFunc(a, b, i));
  }
  return count;
}
function calculateFunc(a: number, b: number, x: number): number {
  const topPart = Number(Math.pow(a * x + b, 1.0 / 3).toFixed(2));
  const bottomPart = Math.pow(Math.log10(x), 2);
  const y = Number((topPart / bottomPart).toFixed(2));
  return y;
}
function createFox() {
  const newFox = new fox('RedFox', 10, 'female');
  console.log(newFox);
  console.log(newFox.whatTheFoxSay());
  console.log(newFox.foxSleep(10));
  console.log(newFox.foxRun(10, 15));
}
taskA(xStart, xEnd, xStep);
taskB(xArray);
createFox();
export { calculateFunc, taskA, taskB };
