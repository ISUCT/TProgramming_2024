const DEFAULT_B_VALUE: number = 2.5;

export function solveTaskA(xBeg: number, xEnd: number, xStep: number): number[] {
  let res: number[] = new Array<number>();

  for (let x = xBeg; x <= xEnd; x += xStep) {
    res.push(solveExpression(DEFAULT_B_VALUE, x));
  }

  return res;
}

export function solveTaskB(xArr: number[]): number[] {
  const res: number[] = new Array<number>();

  for (const i in xArr) {
    res.push(solveExpression(DEFAULT_B_VALUE, xArr[i]));
  }

  return res;
}

export function solveExpression(b: number, x: number): number {
  if (x === -2.5) {
    throw new Error("'x' doesn't belong to the function's domain.");
  }

  return (
    (1 + Math.pow(Math.sin(degToRad(Math.pow(b, 3) + Math.pow(x, 3))), 2)) /
    Math.pow(Math.pow(b, 3) + Math.pow(x, 3), 1 / 3)
  );
}

function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}
