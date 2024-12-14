export function calculateFuncA(xStart: number, xFinish: number, step: number): number[] {
  if (step === 0) {
    throw new Error('Шаг не может быть нулевым');
  }
  if (xStart === 0 || xFinish === 0) {
    throw new Error('lg не может быть вычиселен для нуля');
  }
  let result: number;
  const results: number[] = [];
  let x = xStart;
  for (x; x <= xFinish; x += step) {
    result = Math.pow(Math.abs(x ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(x ** 2), 1 / 3);
    results.push(result);
  }
  return results;
}

export function calculateFuncB(a: number, b: number, c: number, d: number, e: number): number[] {
  const values = [a, b, c, d, e];
  const results: number[] = [];
  for (let i = 0; i < values.length; i++) {
    let result: number;
    const num = values[i];
    if (num === 0) {
      throw new Error('lg не может быть вычиселен для нуля');
    }
    result = result = Math.pow(Math.abs(num ** 2 - 2.5), 1 / 4) + Math.pow(Math.log10(num ** 2), 1 / 3);
    results.push(result);
  }
  return results;
}
