
function formulamain(x, a, b) {
    if (x <= 5) {
        return Math.pow(a + b * x, 3.5) / 1.8 + Math.pow(Math.cos(a * x), 3);
    } else {
        return Math.pow(Math.log10(Math.pow(a, 2) + x), 2) / Math.pow(a + x, 2);
    }
}

function TaskA(xNach, xKon, shag, a, b) {
    const y = [];
    const x = [];
    for (let i = xNach; i <= xKon; i += shag) {
        x.push(i);
        y.push(formulamain(i, a, b));
    }
    return [x, y];
}

function TaskB(xArr, a, b) {
    const y = [];
    const x = [];
    for (let i = 0; i < xArr.length; i++) {
        x.push(xArr[i]);
        y.push(formulamain(xArr[i], a, b));
    }
    return [x, y];
}
console.log("Гвоздарёв Ярослав Владимирович");
console.log("Задача A");
const xNach = 3.5;
const xKon = 6.5;
const shag = 0.6;
const a = -2.5;
const b = 3.4;
let [x, y] = TaskA(xNach, xKon, shag, a, b);
for (let i = 0; i < y.length; i++) {
    console.log(`При x= ${x[i]} y= ${y[i]}`);
}
console.log("Задача B");
const xArr = [2.89, 3.54, 5.21, 6.28, 3.48];
[x, y] = TaskB(xArr, a, b);
for (let i = 0; i < y.length; i++) {
    console.log(`При x= ${x[i]} y= ${y[i]}`);
}

