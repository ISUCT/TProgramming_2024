export function solution(a: number, b: number, x: number): number {
  const result = Math.acos(Math.pow(x, 2) - Math.pow(b, 2)) / Math.asin(Math.pow(x, 2) - Math.pow(a, 2));
  return result;
}

export function taskA(a: number, b: number, xStart: number, xEnd: number, xStep: number): Array<number> {
  const listOfAnswers = [];
  for (let i = xStart; i < xEnd; i += xStep) {
    listOfAnswers.push(solution(a, b, i));
  }
  return listOfAnswers;
}

export function taskB(a: number, b: number, listOfX: Array<number>): Array<number> {
  const listOfAnswers = [];
  for (const i of listOfX) {
    listOfAnswers.push(solution(a, b, i));
  }
  return listOfAnswers;
}

const a = 0.05;
const b = 0.06;
const xStart = 0.2;
const xEnd = 0.95;
const xStep = 0.15;
const listOfX = [0.15, 0.26, 0.37, 0.48, 0.56];

console.log('Kochetov Danil 2/280');
console.log('laboratory work №1 option 10:');
console.log('task A answers:');
console.log(taskA(a, b, xStart, xEnd, xStep));
console.log('task B answers:');
console.log(taskB(a, b, listOfX));
