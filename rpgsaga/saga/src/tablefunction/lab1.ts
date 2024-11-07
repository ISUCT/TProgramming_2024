import { b as numB, nums as eyNums } from '..';

export function calculate(x: number, b: number): number {
  const resA = Math.pow(
    1 + Math.pow(Math.sin(b), 3) + Math.pow(x, 3),
    2 / Math.pow(Math.pow(b, 3) + Math.pow(x, 3), 1 / 3),
  );
  return resA;
}

export function solveTaskA(xN: number, xK: number, xS: number, b: number): number[] {
  const arrSlice: number[] = [];

  for (let x = xN; x <= xK; x += xS) {
    arrSlice.push(calculate(x, b));
  }
  return arrSlice;
}

export function solveTaskB(nums: number[], b: number): number[] {
  const resB: number[] = [];
  for (const i of nums) {
    resB.unshift(calculate(i, b));
  }
  return resB;
}

console.log(`Задача Б: ${solveTaskB(eyNums, numB)}`);
