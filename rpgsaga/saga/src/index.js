// Levin Roman 2/279
// 11 var
function formula(x) {
    return Math.asin(Math.pow(x, 2.0)) + Math.asin(Math.pow(x, 3.0));
}
function TaskA(xn, xk, dx) {
    const y = [];
    for (let i = xn; i <= xk; i += dx) {
        y.push(formula(i));
    }
    return y;
}

function TaskB(x) {
    const y = [];
    for (const i of x) {
        y.push(formula(i));
    }
    return y;
}
console.log("Задача A");
const xn = 0.11;
const xk = 0.36;
const dx = 0.05;
let y = TaskA(xn, xk, dx);
for (let i = 0; i < 5; i++) {
    console.log(`y = ${y[i]}`);
}
console.log("Задача B");
const xArr = [0.08, 0.26, 0.37, 0.48, 0.56];
y= TaskB(xArr);
for (let i = 0; i < xArr.length; i++) {
    console.log(`y = ${y[i]}`);
}