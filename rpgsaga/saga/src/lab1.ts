export function generalCounter(a: number, b: number, x: number): number {
    return Math.log10(Math.pow(x, 3) - 1) / (Math.log2(a * Math.pow(x, 2) - b) / Math.log2(5));
}

export function TaskA(a: number, b: number, xn: number, xk: number, deltaX: number): number[] {
    const sliceForTask1: number[] = [];
    for (let x = xn; x <= xk; x += deltaX) {
        sliceForTask1.push(generalCounter(a, b, x));
    }
    return sliceForTask1;
}

export function TaskB(slice: number[], a: number, b: number): number[] {
    const result: number[] = [];
    for (const x of slice) {
        result.push(generalCounter(a, b, x));
    }
    return result;
}