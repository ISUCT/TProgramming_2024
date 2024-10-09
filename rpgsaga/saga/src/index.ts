// 22 var

// ======================================================= lab 1 =======================================================
console.log(
  `\n======================================================= lab 1 =======================================================\n`,
);
function form(x: number, a: number = 2.25) {
  return a ** (x ** 2 - 1) - Math.log(x ** 2 - 1) + Math.cbrt(x ** 2 - 1);
}

function taskA(xStart: number = 1.2, xEnd: number = 2.7, step: number = 0.3, a: number = 2.25) {
  const y: number[] = [];
  const x: number[] = [];
  for (let i: number = xStart; i <= xEnd; i += step) {
    y.push(form(i, a));
    x.push(i);
  }
  return [x, y];
}

function taskB(a: number = 2.25, xArr: number[] = [1.31, 1.39, 1.44, 1.56, 1.92]) {
  const y: number[] = [];
  const x: number[] = [];
  for (const i of xArr) {
    y.push(form(i, a));
    x.push(i);
  }
  return [x, y];
}

console.log('Задача А');
let [x, y] = taskA();
for (const i of y) {
  console.log(`При x = ${x[y.indexOf(i)].toFixed(1)}, y = ${i.toFixed(2)}`);
}
console.log('Задача B');
[x, y] = taskB();
for (const i of y) {
  console.log(`При x = ${x[y.indexOf(i)].toFixed(2)}, y = ${i.toFixed(2)}`);
}

export { taskA, taskB, form };
