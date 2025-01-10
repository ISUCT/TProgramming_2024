import { funcRes } from './functions';

export function taskA(xStart: number, xEnd: number, xStep: number): number[] | number {
  const answerA: number[] = [];
  for (let i = xStart; i < xEnd; i += xStep) {
    const result = funcRes(i);
    // Добавляем результат в массив только если он не NaN
    if (!isNaN(result)) {
      answerA.push(result);
    }
  }
  // Если массив пуст, возвращаем NaN
  if (answerA.length === 0) {
    return NaN;
  }
  return answerA;
}
