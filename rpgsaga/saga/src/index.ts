console.log('Hello world');

// Вариант_21

const xStart = 0.11;
const xEnd = 0.36;
const xStep = 0.05;
const listX = [0.2, 0.3, 0.38, 0.43, 0.57];

console.log('Хабибулина Алина 2/280');
console.log(death(0.1));
console.log(`Ответы к задаче A: ${taskA(xStart, xEnd, xStep)}`);
console.log(`Ответы к задаче B: ${taskB(listX)}`);

export function death(x: number) {
  const res = (Math.pow(Math.sin(x), 3) + Math.pow(Math.cos(x), 3)) * Math.log(x);
  return res;
}

export function taskA(xStarts: number, xEnds: number, xSteps: number) {
  const listOfRes = [];
  for (let i = xStarts; i <= xEnds; i += xSteps) {
    listOfRes.push(death(i));
  }
  return listOfRes;
}

export function taskB(listsX: Array<number>) {
  const listOfRes = [];
  for (const i of listsX) {
    listOfRes.push(death(i));
  }
  return listOfRes;
}
