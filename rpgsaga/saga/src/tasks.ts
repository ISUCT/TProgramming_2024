export function formula(x: number, a: number = 2.0, b: number = 3.0) {
  return Math.asin(Math.pow(x, a)) + Math.asin(Math.pow(x, b));
}
export function taskA(xn: number = 0.11, xk: number = 0.36, dx: number = 0.05) {
  const y = [];
  for (let i = xn; i <= xk; i += dx) {
    y.push(formula(i));
  }
  return y;
}

export function taskB(x: number[] = [0.08, 0.26, 0.37, 0.48, 0.56]) {
  const y = [];
  for (const i of x) {
    y.push(formula(i));
  }
  return y;
}
