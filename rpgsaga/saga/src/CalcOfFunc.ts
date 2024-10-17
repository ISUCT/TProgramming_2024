export function calculate(x: number): number {
  return (Math.acos(x) ** 4 + Math.asin(x) ** 2) ** 3;
}

export function getTaskA(xN: number, xK: number, xD: number): number[] {
  const ansverA: number[] = [];
  for (let i = xN; i <= xK; i += xD) {
    ansverA.unshift(calculate(i));
  }
  return ansverA;
}

export function getTaskB(numbersX: number[]): number[] {
  const ansverB: number[] = [];
  for (const X of numbersX) {
    ansverB.unshift(calculate(X));
  }
  return ansverB;
}
