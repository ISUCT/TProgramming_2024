import { formula, taskA, taskB } from "./formuls";

const a: number = 1.6;
console.log("Задача А");
let xstart: number = 1.2;
let xend: number = 3.7;
let xstep: number = 0.5;
let yTaskA: number[] = taskA(a, xstart, xend, xstep);
for (let i of yTaskA) {
    console.log(`y = ${i}`);
}

console.log("Задача B");
let arr: number[] = [1.28, 1.36, 2.47, 3.68, 4.56];
let yTaskB: number[] = taskB(a, arr);
for (let i of yTaskB) {
    console.log(`y = ${i}`);
}
console.log(formula(4.56))