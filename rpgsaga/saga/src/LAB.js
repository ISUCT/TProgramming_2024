function Log5(x) {
    const base = 5.0;
    return Math.log(x) / Math.log(base);
}

function form(x) {
    const a = 1.1;
    const b = 0.09;

    return Math.log10(x * x - 1) / Log5(a * Math.pow(x, 2) - b);
}

function TaksA(xn, xk, dx) {
    const y = [];
    const x = [];
    for (let i = xn; i <= xk; i += dx) {
        x.push(i);
        y.push(form(i));
    }
    return [x, y];
}

function TaskB(xarray) {
    const y = [];
    const x = [];

    for (let i = 0; i < xarray.length; i++) {
        x.push(xarray[i]);
        y.push(form(xarray[i]));
    }
    return [x, y];
}

console.log("Кульбакин Аким Александрович");
console.log("Задача А");

const xn = 1.2;
const xk = 2.2;
const dx = 0.2;
let [x, y] = TaksA(xn, xk, dx);

for (let i = 0; i < y.length; i++) {
    console.log(`при x = ${x[i]}, y = ${y[i]}`);
}

console.log("Задача B");
let xarray = [1.21, 1.76, 2.53, 3.48, 4.52];
[x, y] = TaskB(xarray);

for (let i = 0; i < y.length; i++) {
    console.log(`при x = ${x[i]}, y = ${y[i]}`);
}
