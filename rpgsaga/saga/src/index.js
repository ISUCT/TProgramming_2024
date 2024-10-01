function formula(x, a) {
    return Math.pow(a, (Math.pow(x, 2) - 1)) - Math.log10(Math.pow(x, 2) - 1) + Math.pow((Math.pow(x, 2) - 1), (1/3)) 
}
function taskA (a, xstart, xend, xstep) {
    const y = [];
    for (let i = xstart; i <= xend; i += xstep) {
        y.push(formula(i, a));
    }
    return y
}
function taskB (a, arr) {
    const y = [];
    for (i of arr) {
        y.push(formula(i, a))
    }
    return y
}

const a = 1.6;
console.log("Задача А");
let xstart = 1.2;
let xend = 3.7;
let xstep = 0.5;
let yTaskA = taskA(a, xstart, xend, xstep);
for (i of yTaskA) {
    console.log(`y = ${i}`)
}

console.log("Задача B");
let arr = [1.28, 1.36, 2.47, 3.68, 4.56];
let yTaskB = taskB(a, arr);
for (i of yTaskB) {
    console.log(`y = ${i}`)
}
