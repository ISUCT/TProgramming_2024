import { funcRes } from './functions';

export function taskB(sliceOfXValues: number[]): number[] | number {
  const answerB: number[] = [];
  for (const element of sliceOfXValues) {
    const result = funcRes(element);
    answerB.push(result);
  }
  // Проверяем, содержит ли массив только NaN
  if (answerB.every(value => isNaN(value))) {
    return NaN;
  }
  return answerB;
}
