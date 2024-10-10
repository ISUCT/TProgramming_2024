export function calculate(x: number) {
  const arcSin2 = Math.asin(x) ** 2;
  const arcCos4 = Math.acos(x) ** 4;
  const y = (arcSin2 + arcCos4) ** 3;
  return y;
}

export function getTaskA(xN: number, xK: number, xD: number) {
  const ansverA: number[] = [];
  for (let i = xN; i <= xK; i += xD) {
    ansverA.unshift(calculate(i));
  }
  return ansverA;
}

export function getTaskB(numbersX: number[]) {
  const ansverB: number[] = [];
  for (const X of numbersX) {
    ansverB.unshift(calculate(X));
  }
  return ansverB;
}
