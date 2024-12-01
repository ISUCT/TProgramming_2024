export function mathCalc(x: number, a: number = 7.2, b: number = 4.2): number {
  if (x <= 0) {
    return NaN;
  }
  return Math.sqrt(Math.abs(a - b * x) / Math.pow(Math.log10(x), 3));
}

export function taskA(xBegin: number, xEnd: number, xDelta: number, a: number = 7.2, b: number = 4.2): number[] {
  const list: number[] = [];
  for (let i = xBegin; i <= xEnd; i += xDelta) {
    list.push(mathCalc(i, a, b));
  }
  return list;
}

export function taskB(arr: number[], a: number = 7.2, b: number = 4.2): number[] {
  const list: number[] = [];
  for (const item of arr) {
    list.push(mathCalc(item, a, b));
  }
  return list;
}
