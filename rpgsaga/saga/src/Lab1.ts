export function workCalc(a: number, b: number, x: number): number {
  return Math.pow(Math.log10(a + x), 2) / Math.pow(a + x, 2);
}

export function work1(a: number, b: number, xn: number, xk: number, deltaX: number): number[] {
  const sliceForWork1: number[] = [];
  for (let x = xn; x <= xk; x += deltaX) {
    sliceForWork1.push(workCalc(a, b, x));
  }
  return sliceForWork1;
}

export function work2(slice: number[], a: number, b: number): number[] {
  return slice.map(x => workCalc(a, b, x));
}
