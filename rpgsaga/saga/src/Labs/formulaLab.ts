export function formulaMain(x: number, a: number, b: number): number {
  if (x <= 5) {
    return Number(((a + b * x) ** 2.5 / 1.8 + Math.cos(a * x) ** 3).toFixed(2));
  } else {
    return Number((Math.log(Math.pow(a, 2) + x) ** 2 / (a + x) ** 2).toFixed(2));
  }
}

export function taskA(xNach: number, xKon: number, shag: number, a: number, b: number): [number[], number[]] {
  const y: number[] = [];
  const x: number[] = [];
  for (let i = xNach; i <= xKon; i += shag) {
    x.push(Number(i.toFixed(2)));
    y.push(formulaMain(i, a, b));
  }
  return [x, y];
}

export function taskB(xArr: number[], a: number, b: number): [number[], number[]] {
  const y: number[] = [];
  const x: number[] = [];
  for (let i = 0; i < xArr.length; i++) {
    x.push(xArr[i]);
    y.push(formulaMain(xArr[i], a, b));
  }
  return [x, y];
}

const a: number = -2.5;
const b: number = 3.4;
function printingTaskA() {
  console.log('Задача А');
  const xNach: number = 3.5;
  const xKon: number = 6.5;
  const shag: number = 0.6;
  const [x, y] = taskA(xNach, xKon, shag, a, b);
  for (const i of y) {
    console.log(`При x= ${x[y.indexOf(i)]} y= ${i}`);
  }
}

function printingTaskB() {
  console.log('Задача B');
  const xArr: number[] = [2.89, 3.54, 5.21, 6.28, 3.48];
  const [x, y] = taskB(xArr, a, b);
  for (const i of y) {
    console.log(`При x= ${x[y.indexOf(i)]} y= ${i}`);
  }
}

printingTaskA();
printingTaskB();
