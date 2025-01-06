export function taskA(start: number, finish: number, delta: number): number[] {
  const slice: number[] = [];
  for (let x = start; x <= finish; x += delta) {
    slice.push(solution(x));
  }
  return slice;
}

export function taskB(long: number[]): number[] {
  const answer: number[] = [];
  for (const val of long) {
    answer.push(solution(val));
  }
  return answer;
}

export function solution(x: number): number {
  const result =
    (Math.pow(Math.pow(x - 0.8, 2), drob(3.0)) + Math.pow(Math.abs(x + 0.4), drob(5.0))) /
    Math.pow(Math.pow(x, 2) - Math.pow(0.8 + 0.4, 2), drob(9.0));
  return result;
}

export function drob(y: number): number {
  return 1 / y;
}
