function result(x: number, a: number, b: number): number {
  const numerator = 1 + Math.pow(Math.log10(x / a), 2);
  const denominator = b - Math.exp(x / a);
  const y = numerator / denominator;
  return y;
}

export function taskA(a: number, b: number, xBegin: number, xEnd: number, xDelta: number): number[] {
  const y: number[] = [];
  for (let x = xBegin; x <= xEnd; x += xDelta) {
    if (xDelta === 0) {
      return [];
    }
    y.push(result(x, a, b));
  }
  return y;
}

export function taskB(a: number, b: number, values: number[]): number[] {
  if (values.length === 0) {
    return [];
  }
  const y: number[] = [];
  for (const x of values) {
    y.push(result(x, a, b));
  }
  return y;
}

export function output(taskName: string, results: number[]): string {
  let resMsg = `Solution to task ${taskName}:\n`;

  results.forEach(resultNum => {
    resMsg += `${resultNum},\n`;
  });
  return resMsg;
}
