export function log5(x: number): number {
  const base = 5.0;
  return Math.log(x) / Math.log(base);
}

export function form(x: number): number {
  const a = 1.1;
  const b = 0.09;

  return Math.log10(x * x - 1) / log5(a * Math.pow(x, 2) - b);
}

export function taksA(xn: number, xk: number, dx: number): [number[], number[]] {
  const y: number[] = [];
  const x: number[] = [];
  for (let i = xn; i <= xk; i += dx) {
    x.push(i);
    y.push(form(i));
  }
  return [x, y];
}

export function taskB(xarray: number[]): [number[], number[]] {
  const y: number[] = [];
  const x: number[] = [];

  for (let i = 0; i < xarray.length; i++) {
    x.push(xarray[i]);
    y.push(form(xarray[i]));
  }
  return [x, y];
}

console.log('Кульбакин Аким Александрович');
console.log('Задача А');

const xn = 1.2;
const xk = 2.2;
const dx = 0.2;
let [x, y] = taksA(xn, xk, dx);

for (let i = 0; i < y.length; i++) {
  console.log(`при x = ${x[i]}, y = ${y[i]}`);
}

console.log('Задача B');
const xarray: number[] = [1.21, 1.76, 2.53, 3.48, 4.52];
[x, y] = taskB(xarray);

for (let i = 0; i < y.length; i++) {
  console.log(`при x = ${x[i]}, y = ${y[i]}`);
}
