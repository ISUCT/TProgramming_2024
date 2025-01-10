function logBase5(x: number) {
  return Math.log(x) / Math.log(5);
}

export function funcRes(x: number): number {
  const ans: number = (4.1 * x ** (1 / 3) - 2.7 * logBase5(x)) / Math.log(x - 1) ** 3;
  return ans;
}
