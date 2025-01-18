export function formula(x: number, a: number = 1.6): number {
    return Math.pow(a, (Math.pow(x, 2) - 1)) - Math.log10(Math.pow(x, 2) - 1) + Math.pow((Math.pow(x, 2) - 1), (1/3));
}

export function taskA(a: number, xstart: number, xend: number, xstep: number): number[] {
    const y: number[] = [];
    for (let i = xstart; i <= xend; i += xstep) {
        y.push(formula(i, a));
    }
    return y;
}

export function taskB(a: number, arr: number[]): number[] {
    const y: number[] = [];
    for (let i of arr) {
        y.push(formula(i, a));
    }
    return y;
}