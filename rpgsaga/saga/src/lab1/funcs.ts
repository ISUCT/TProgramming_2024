// Variant: 13
// Author: Kozlov Egor, 2/278

const logOf5 = Math.log(5);

export function calculateSinglePoint(x: number, a: number, b: number): number {
  return (a * Math.sqrt(x) - b * (Math.log(x) / logOf5)) / Math.log(x - 1);
}

export function calculateSteps(a: number, b: number, xStart: number, xEnd: number, xDelta: number): number[] {
  const arr = new Array<number>();
  for (let xCurrent = xStart; xCurrent < xEnd; xCurrent += xDelta) {
    arr.push(calculateSinglePoint(xCurrent, a, b));
  }

  return arr;
}

export function calculatePoints(a: number, b: number, xes: Array<number>): Array<number> {
  const results: Array<number> = new Array<number>();
  for (const x of xes) {
    results.push(calculateSinglePoint(x, a, b));
  }
  return results;
}
