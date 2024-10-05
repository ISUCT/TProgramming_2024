// Variant: 13
// Author: Kozlov Egor, 2/278

const logOf5 = Math.log(5);

export function calculateSinglePoint(x: number, a: number, b: number): number {
  return (a * Math.sqrt(x) - b * (Math.log(x) / logOf5)) / Math.log(x - 1);
}

export function calculateSteps(a: number, b: number, xStart: number, xEnd: number, xDelta: number): number[] {
  const itemCount: number = Math.floor((xEnd - xStart) / xDelta) + 1;

  if (itemCount <= 0) {
    return [];
  }

  const arr = new Array<number>(itemCount);
  let xCurrent = xStart;
  let index = 0;
  while (xCurrent < xEnd) {
    arr[index] = calculateSinglePoint(xCurrent, a, b);
    index++;
    xCurrent += xDelta;
  }

  return arr;
}

export function calculatePoints(a: number, b: number, xes: Array<number>): Array<number> {
  const results: Array<number> = new Array<number>(xes.length);
  for (const index in xes) {
    results[index] = calculateSinglePoint(xes[index], a, b);
  }
  return results;
}
