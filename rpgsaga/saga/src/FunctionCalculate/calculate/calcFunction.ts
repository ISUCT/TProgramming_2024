export function calcYA(a: number, b: number, x1: number, x2: number): number[] {
  const result: number[] = [];
  const xStep = 0.2;
  for (let x = x1; x <= x2; x += xStep) {
    const numerator = Math.log10(x1 * x1 - 1);
    const denominator = Math.log(a * x1 * x1 - b) / Math.log(5);
    result.push(numerator / denominator);
  }
  return result;
}

export function calcYB(a: number, b: number, xVal: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < xVal.length; i++) {
    const numerator = Math.log10(xVal[i] * xVal[i] - 1);
    const denominator = Math.log(a * xVal[i] * xVal[i] - b) / Math.log(5);
    result.push(numerator / denominator);
  }
  return result;
}
