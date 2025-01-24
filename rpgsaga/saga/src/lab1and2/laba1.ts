export function calc(x: number): number {
    return Math.pow(Math.abs(Math.pow(x, 2) - 2.5), 1 / 4) + Math.pow(Math.log10(Math.pow(x, 2)), 1 / 3);
}

export function taskA(xn: number, xk: number, deltax: number): [number[], number[]] {
    const answersY: number[] = [];
    const answersX: number[] = [];
    for (let x = xn; x <= xk; x += deltax) {
        const y = calc(x);
        answersY.push(y);
        answersX.push(x);
    }
    return [answersX, answersY];
}

export function taskB(znX: number[]): [number[], number[]] {
    const answersY: number[] = [];
    for (const x of znX) {
        const y = calc(x);
        answersY.push(y);
    }
    return [znX, answersY];
}