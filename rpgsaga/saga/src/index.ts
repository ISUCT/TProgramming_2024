export const calc = (a: number, b: number, x: number): number => {
    const answer = ((a + Math.tan(b * x)) ^ 2) / ((b + 1 / Math.tan(a * x)) ^ 2);
    return answer;
  };

  export const taskA = (a: number, b: number, x1: number, x2: number, deltax: number): number[] => {
    const answersA: number[] = [];
    let x = x1;
    for (x; x < x2; x += deltax) {
      answersA.push(calc(a, b, x));
    }
    return answersA;
  };

  export const taskB = (a: number, b: number, znX: number[]): number[] => {
    const answersB: number[] = [];
    for (let i = 0; i < 5; i++) {
      answersB.push(calc(a, b, znX[i]));
    }
    return answersB;
  };

  console.log(taskA(0.1, 0.5, 0.15, 1.37, 0.25));
  console.log(taskB(0.1, 0.5, [0.2, 0.3, 0.44, 0.6, 0.56]));