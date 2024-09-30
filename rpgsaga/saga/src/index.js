function znachenie_funkcii(x) {
    x = Math.round(Math.abs(x) * 100) / 100;
    if (x < 1) {
        return Math.acos(x);
    }
    return Math.pow(1.2, x) - Math.pow(x, 1.2);
}

function TaskA(xn, xk, dx) {
    let list_of_x = [];
    let list_of_y = [];
    for (let i = xn; i <= xk; i += dx) {
        i = Math.round(Math.abs(i) * 100) / 100;
        let y = znachenie_funkcii(i);
        list_of_x.push(i);
        list_of_y.push(y);
    }
    return [list_of_x, list_of_y];
}

function TaskB(a) {
    let list_of_bx = []
    let list_of_by = [];
    for (let i = 0; i < a.length; i++) {
        let y = znachenie_funkcii(a[i]);
        list_of_by.push(y);
        list_of_bx.push(a[i])
    }
    return [list_of_bx, list_of_by];
}
console.log('TaskA')
let xn = 0.2
let xk = 2.2
let dx = 0.4
let [x, y] = TaskA(xn,xk,dx);
for (let i = 0; i < y.length; i++) {
    console.log(`x= ${x[i]} y= ${y[i]}`);
}
console.log('TaskB')
let xB = [0.1, 0.9, 1.2, 1.5, 2.3];
[x, y] = TaskB(xB);
for (let i = 0; i < y.length; i++) {
    console.log(`x= ${x[i]} y= ${y[i]}`);
}