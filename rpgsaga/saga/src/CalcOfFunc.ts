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

/*
// import { Character } from './Сharacter'r
import { Archer } from './Archer';
// Константы для Лабы 1(CalcOfFunc)
const xN = 0.26;
const xK = 0.66;
const xD = 0.08;
const numbersX = [0.1, 0.35, 0.4, 0.55, 0.6];
// Вычисления и вывод для Лабы 1 (CalcOfFunc)
console.log(getTaskA(xN, xK, xD));
console.log(getTaskB(numbersX));
*/
