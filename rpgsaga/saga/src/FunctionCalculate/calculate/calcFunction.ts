export function calcYA(a: number, b: number, startX: number, endX: number, xStep: number): number[] {
  const result: number[] = [];
  for (let x = startX; x <= endX; x += xStep) {
    const xSquared = x * x;
    const logArg1 = xSquared - 1;
    const logArg2 = a * xSquared - b;

    if (logArg1 <= 0 || logArg2 <= 0) {
      result.push(NaN);
      continue;
    }

    const numerator = Math.log10(logArg1);
    const denominator = Math.log(logArg2) / Math.log(5);

    if (denominator === 0) {
      result.push(NaN);
      continue;
    }

    result.push(numerator / denominator);
  }
  return result;
}

export function calcYB(a: number, b: number, xVal: number[]): number[] {
  const result: number[] = [];
  for (const i of xVal) {
    const xSquared = i * i;
    const logArg1 = xSquared - 1;
    const logArg2 = a * xSquared - b;

    if (logArg1 <= 0 || logArg2 <= 0) {
      result.push(NaN);
      continue;
    }

    const numerator = Math.log10(logArg1);
    const denominator = Math.log(logArg2) / Math.log(5);

    if (denominator === 0) {
      result.push(NaN);
      continue;
    }

    result.push(numerator / denominator);
  }
  return result;
}
