
export function znachenie_Funkcii(x: number): number {
    x = Math.round(Math.abs(x) * 100) / 100;
    if (x < 1) {
        return Math.acos(x);
    }
    return Math.pow(1.2, x) - Math.pow(x, 1.2);
}

export function taskA(xn: number, xk: number, dx: number): [number[], number[]] {
    let list_of_x: number[] = [];
    let list_of_y: number[] = [];
    for (let i = xn; i <= xk; i += dx) {
        i = Math.round(Math.abs(i) * 100) / 100;
        let y = znachenie_Funkcii(i);
        list_of_x.push(i);
        list_of_y.push(y);
    }
    return [list_of_x, list_of_y];
}

export function taskB(a: number[]): [number[], number[]] {
    let list_of_bx: number[] = [];
    let list_of_by: number[] = [];
    for (let x of a) {
        list_of_by.push(znachenie_Funkcii(x));
        list_of_bx.push(x);
    }
    return [list_of_bx, list_of_by];
}

console.log('taskA');
let xn = 0.2;
let xk = 2.2;
let dx = 0.4;
let [x, y] = taskA(xn, xk, dx);
for (let i = 0; i < y.length; i++) {
    console.log(`x= ${x[i]} y= ${y[i]}`);
}

console.log('taskB');
let xB = [0.1, 0.9, 1.2, 1.5, 2.3];
[x, y] = taskB(xB);
for (let i = 0; i < y.length; i++) {
    console.log(`x= ${x[i]} y= ${y[i]}`);
}