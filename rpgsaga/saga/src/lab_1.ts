export function solution(a: number, b: number, x: number): number {
  return Math.acos(Math.pow(x, 2) - Math.pow(b, 2)) / Math.asin(Math.pow(x, 2) - Math.pow(a, 2));
}

export function taskA(a: number, b: number, xStart: number, xEnd: number, xStep: number): number[] {
  const listOfAnswers: number[] = [];
  for (let i = xStart; i < xEnd; i += xStep) {
    listOfAnswers.push(solution(a, b, i));
  }
  return listOfAnswers;
}

export function taskB(a: number, b: number, listOfX: number[]): number[] {
  const listOfAnswers: number[] = [];
  for (const i of listOfX) {
    listOfAnswers.push(solution(a, b, i));
  }
  return listOfAnswers;
}
