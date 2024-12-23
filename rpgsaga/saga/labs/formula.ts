export function form(x: number, a: number = 2.25): number {
  return a ** (x ** 2 - 1) - Math.log(x ** 2 - 1) + Math.cbrt(x ** 2 - 1);
}

export function taskA(xStart: number = 1.2, xEnd: number = 2.7, step: number = 0.3, a: number = 2.25): number[][] {
  const y: number[] = [];
  const x: number[] = [];
  for (let i: number = xStart; i <= xEnd; i += step) {
    y.push(form(i, a));
    x.push(i);
  }
  return [x, y];
}

export function taskB(a: number = 2.25, xArr: number[] = [1.31, 1.39, 1.44, 1.56, 1.92]): number[][] {
  const y: number[] = [];
  const x: number[] = [];
  for (const i of xArr) {
    y.push(form(i, a));
    x.push(i);
  }
  return [x, y];
}
