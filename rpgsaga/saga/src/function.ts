const StartingX = 1.5;
const EndingX = 3.5;
const Step = 0.4;
const ArrayOfX = [1.9, 2.15, 2.34, 2.74, 3.16];

function getBaseLog(base: number, numb: number): number {
  return Number((Math.log(numb) / Math.log(base)).toFixed(2));
}

export function mainFunction(a: number, b: number, x: number): number {
  const top = a * Math.pow(x, 1.0 / 3) - b * getBaseLog(5, x);
  const bottom = Math.pow(Math.log10(x - 1), 3.0);
  const result = (top / bottom).toFixed(2);
  return Number(result);
}

export function taskA(startingX: number, endingX: number, step: number): [number[], number[]] {
  if (step === 0 && startingX !== endingX) {
    return [[], []];
  }

  const A = 4.1;
  const B = 2.7;

  const x: number[] = [];
  const y: number[] = [];

  for (let i = startingX; i <= endingX; i += step) {
    x.push(Number(i.toFixed(2)));
    y.push(mainFunction(A, B, i));
  }

  return [x, y];
}

export function taskB(arrayOfX: number[]): [number[], number[]] {
  const A = 4.1;
  const B = 2.7;

  const x: number[] = [];
  const y: number[] = [];

  for (let i = 0; i < arrayOfX.length; i++) {
    x.push(arrayOfX[i]);
    y.push(mainFunction(A, B, arrayOfX[i]));
  }

  return [x, y];
}

function testingA() {
  const [x, y] = taskA(StartingX, EndingX, Step);
  for (const i of y) {
    console.log(`При x = ${x[y.indexOf(i)]} y = ${i}`);
  }
}

function testingB() {
  console.log('Задача B');
  const [x, y] = taskB(ArrayOfX);
  for (const i of y) {
    console.log(`При x = ${x[y.indexOf(i)]} y = ${i}`);
  }
}

testingA();
testingB();
