export function calculate(x: number): number {
  return Math.pow(Math.pow(Math.asin(x), 2) + Math.pow(Math.acos(x), 4), 3);
}

export function taskone(x_s: number, x_e: number, x_k: number): number[] {
  const results: number[] = [];
  for (let x = x_s; x < x_e; x += x_k) {
    results.push(calculate(x));
  }
  return results;
}

export function tasktwo(x1: number, x2: number, x3: number, x4: number, x5: number): number[] {
  const results2: number[] = [];
  for (const a of [x1, x2, x3, x4, x5]) {
    results2.push(calculate(a));
  }
  return results2;
}
