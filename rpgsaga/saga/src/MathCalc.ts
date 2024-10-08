export function MathFunction(x: number, a: number = 4.1, b: number = 2.7): number {
  return a * Math.cbrt(x) - (b * getBaseLog(5, x)) / Math.pow(getBaseLog(10, x - 1), 3);
}

const xStart: number = 1.5;
const xEnd: number = 3.5;
const xDelta: number = 0.4;
const xArray: number[] = [1.9, 2.15, 2.34, 2.74, 3.16];

function getBaseLog(x: number, y: number) {
  return Math.log(y) / Math.log(x);
}

type list = number[];

export function TaskA(xBegin: number, xEnd: number, xDelta: number, a: number = 4.1, b: number = 2.7): list {
  let stack: list = [];
  for (let i: number = xBegin; i <= xEnd; i += xDelta) {
    stack.push(MathFunction(i, a, b));
  }
  return stack;
}

export function TaskB(list: number[], a: number = 4.1, b: number = 2.7): list {
  let stack: list = [];
  for (let item of list) {
    stack.push(MathFunction(item, a, b));
  }
  return stack;
}

console.log(TaskA(xStart, xEnd, xDelta));
console.log(TaskB(xArray));

