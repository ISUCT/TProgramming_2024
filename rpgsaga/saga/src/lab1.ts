export function solution(x: number): number {
  if (x >= 1) {
    return Math.pow(1.2, x) - Math.pow(x, 1.2);
  } else {
    return Math.acos(x);
  }
}

export function taskA(start: number, end: number, step: number): number[] {
  const answers: number[] = [];
  for (let i = start; i < end; i += step) {
    answers.push(solution(i));
  }
  return answers;
}

export function taskB(numbers: number[]): number[] {
  const answers: number[] = [];
  for (const num of numbers) {
    answers.push(solution(num));
  }
  return answers;
}
