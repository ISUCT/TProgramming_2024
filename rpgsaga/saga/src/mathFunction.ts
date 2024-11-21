function toRadians(deg: number): number {
    return deg * (Math.PI / 180.0);
}

function calculate(a: number, b: number, x: number): number {
    let exp: number;
    if (x < 5) {
        exp = Math.pow(Math.log10(Math.pow(a, 2) + x), 2) / Math.pow(a + x, 2);
    } else {
        exp = Math.pow(a + b * x, 2.5) / (1.8 + Math.pow(Math.cos(toRadians(a * x)), 3));
    }
    return exp;
}

function taskA(a: number, b: number, begX: number, endX: number, detX: number): [number[], number[]] {
    const ylist: number[] = [];
    const xlist: number[] = [];
    for (let x = begX; x <= endX; x += detX) {
        ylist.push(calculate(a, b, x));
        xlist.push(x);
    }
    return [ylist, xlist];
}

function taskB(xlist: number[], a: number, b: number): number[] {
    const ylist: number[] = [];
    for (const v of xlist) {
        ylist.push(calculate(a, b, v));
    }
    return ylist;
}