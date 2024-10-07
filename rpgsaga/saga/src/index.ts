import { log } from "console";

function form(x: number, a: number) {
    return ((a ** (x ** 2 - 1)) - Math.log((x ** 2) - 1) + Math.cbrt((x ** 2) - 1))
}

function taskA(xStart: number, xEnd: number, step: number, a: number) {
    const y: number[] = [];
    const x: number[] = [];
    for (let i: number = xStart; i <= xEnd; i += step) {
        y.push(form(i, a));
        x.push(i)
    }
    return [x, y];
}

function taskB(a: number, xArr: number[]) {
    const y: number[] = [];
    const x: number[] = [];
    for (let i of xArr) {
        y.push(form(i, a));
        x.push(i);
    }
    return [x, y];
}

const a: number = 2.25;
console.log('Задача А');
const xStart: number = 1.2;
const xEnd: number = 2.7;
const step: number = 0.3;
let [x, y] = taskA(xStart, xEnd, step, a);
for (let i of y) {
    console.log(`При x = ${x[y.indexOf(i)].toFixed(1)}, y = ${i.toFixed(2)}`);
}
console.log('Задача B');
const listX: number[] = [1.31, 1.39, 1.44, 1.56, 1.92];
[x, y] = taskB(a, listX);
for (let i of y) {
    console.log(`При x = ${x[y.indexOf(i)].toFixed(2)}, y = ${i.toFixed(2)}`);
}

export { taskA, taskB, form }
