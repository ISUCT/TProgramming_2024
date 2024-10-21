function result(a: number, x: number): number {
  return Math.pow(a, Math.pow(x, 2) - 1) - Math.log10(Math.pow(x, 2) - 1) + Math.cbrt(Math.pow(x, 2) - 1);
}

function taskA(a: number, xBegin: number, xEnd: number, xDelta: number): number[] {
  const y: number[] = [];
  if (xDelta === 0) {
    return [];
  }
  if (xDelta > 0) {
    for (let x = xBegin; x <= xEnd; x += xDelta) {
      y.push(result(a, x));
    }
  } else {
    for (let x = xBegin; x >= xEnd; x += xDelta) {
      if (Math.pow(x, 2) - 1 <= 0) {
        continue;
      }
      y.push(result(a, x));
    }
  }
  return y;
}

function taskB(a: number, values: number[]): number[] {
  if (values.length === 0) {
    return [];
  }
  const y: number[] = [];
  for (const x of values) {
    y.push(result(a, x));
  }
  return y;
}

function output(nameOfTask: string, results: number[]): string {
  let resMsg = `Solutions to task ${nameOfTask}:\n`;

  results.forEach(resultNum => {
    resMsg += `${resultNum},\n`;
  });
  return resMsg;
}

const taskAResult = taskA(1.6, 2, 10, 0);
console.log(output('A', taskAResult));

const taskBResult = taskB(1.6, []);
console.log(output('B', taskBResult));

export { taskA, taskB };
