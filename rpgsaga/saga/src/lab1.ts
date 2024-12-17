export function formula(x: number, a: number = 1.6): number {
  if (Math.abs(x - 1) < 1e-6) {
    return NaN;
  }
  const result = Math.pow(a, Math.pow(x, 2) - 1) - Math.log10(Math.pow(x, 2) - 1) + Math.pow(Math.pow(x, 2) - 1, 1 / 3);
  return Math.fround(result * 1e12) / 1e12;
}

export function taskA(xn: number = 1.2, xk: number = 3.7, dx: number = 0.5, a: number = 1.6): number[] {
  const y: number[] = [];
  for (let x = xn; x <= xk; x += dx) {
    y.push(formula(x, a));
  }
  return y;
}

export function taskB(x: number[] = [1.28, 1.36, 2.47, 3.68, 4.56], a: number = 1.6): number[] {
  const y: number[] = [];
  for (const xi of x) {
    y.push(formula(xi, a));
  }
  return y;
}
