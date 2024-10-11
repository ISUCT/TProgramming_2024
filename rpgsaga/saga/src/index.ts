export function mainSolvefunc(x: number): number {
  const ww = Math.round(Math.abs(x) * 100) / 100;
  if (ww < 1) {
    return Math.acos(ww);
  }
  return Math.pow(1.2, ww) - Math.pow(ww, 1.2);
}

export function taskA(xn: number, xk: number, dx: number): [number[], number[]] {
  const listOfx: number[] = [];
  const listOfy: number[] = [];
  for (let i = xn; i <= xk; i += dx) {
    i = Math.round(Math.abs(i) * 100) / 100;
    const y = mainSolvefunc(i);
    listOfx.push(i);
    listOfy.push(y);
  }
  return [listOfx, listOfy];
}

export function taskB(a: number[]): [number[], number[]] {
  const listOfbx: number[] = [];
  const listOfby: number[] = [];
  for (const x of a) {
    listOfby.push(mainSolvefunc(x));
    listOfbx.push(x);
  }
  return [listOfbx, listOfby];
}

console.log('taskA');
const xn = 0.2;
const xk = 2.2;
const dx = 0.4;
let [x, y] = taskA(xn, xk, dx);
for (let i = 0; i < y.length; i++) {
  console.log(`x= ${x[i]} y= ${y[i]}`);
}

console.log('taskB');
const xB = [0.1, 0.9, 1.2, 1.5, 2.3];
[x, y] = taskB(xB);
for (let i = 0; i < y.length; i++) {
  console.log(`x= ${x[i]} y= ${y[i]}`);
}
