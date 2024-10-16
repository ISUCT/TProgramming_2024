export function MathCalc(x: number, a: number = 7.2, b: number = 4.2): number {
    return Math.sqrt(Math.abs(a - b * x) / Math.pow(Math.log10(x), 3));
}

export function TaskA(
    xBegin: number,
    xEnd: number,
    xDelta: number,
    a: number = 7.2,
    b: number = 4.2
): number[] {
    const list: number[] = [];
    for (let i = xBegin; i <= xEnd; i += xDelta) {
        list.push(MathCalc(i, a, b));
    }
    return list;
}
export function TaskB(arr: number[], a: number = 7.2, b: number = 4.2): number[] {
    const list: number[] = [];
    for (let item of arr) {
        list.push(MathCalc(item, a, b));
    }
    return list;
}
