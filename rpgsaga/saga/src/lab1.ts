export function calculateResult(a: number, x: number): number {
  return Math.pow(a, Math.pow(x, 2) - 1) - Math.log10(Math.pow(x, 2) - 1) + Math.cbrt(Math.pow(x, 2) - 1);
}

export function taskA(a: number, xn: number, xk: number, deltaX: number): number[] {
  let x = xn;
  const sliceTaskA: number[] = [];
  while (x <= xk) {
    sliceTaskA.push(calculateResult(a, x));
    x += deltaX;
  }
  return sliceTaskA;
}

export function taskB(slice: number[], a: number): number[] {
  const results: number[] = [];
  for (const x of slice) {
    results.push(calculateResult(a, x));
  }
  return results;
}
