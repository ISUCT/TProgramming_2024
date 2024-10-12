export function solveTaskA(xBeg: number, xEnd: number, xStep: number): number[] {
  const res: number[] = new Array<number>(Math.round((xEnd - xBeg) / xStep), 0);

  let index: number = 0;
  for (let x = xBeg; x <= xEnd; x += xStep) {
    res[index] = solveExpression(2.5, x);
    index++;
  }

  return res;
}

export function solveTaskB(xArr: number[]): number[] {
  const res: number[] = new Array<number>(xArr.length, 0);

  for (const i in xArr) {
    res[i] = solveExpression(2.5, xArr[i]);
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

try {
  console.log(solveTaskA(1.28, 3.28, 0.4));
} catch (err) {
  console.error(err);
}

const xArr: number[] = [1.1, 2.4, 3.6, 1.7, 3.9];

try {
  console.log(solveTaskB(xArr));
} catch (err) {
  console.error(err);
}
