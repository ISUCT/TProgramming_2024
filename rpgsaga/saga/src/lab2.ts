export function calcY(a: number, b: number, x: number): number {
    return (a * Math.sqrt(x) - b * (Math.log(x) / Math.log(5))) / (Math.log10(Math.abs(x - 1)));
}

export function Task1(a: number, b: number, x1: number, x2: number, deltax: number): number[] {
    const answersA: number[] = [];
    for (let x = x1; x <= x2; x += deltax) {
        const y = calcY(a, b, x);
        answersA.push(y);
    }
    return answersA;
}

export function Task2(a: number, b: number, xValues: number[]): number[] {
    const answersB: number[] = [];
    for (const x of xValues) {
        const y = calcY(a, b, x);
        answersB.push(y);
    }
    return answersB;
}

export function main() {
    const n1 = Task1(4.1, 2.7, 1.2, 5.2, 0.7);
    console.log(n1);
    const n2 = Task2(4.1, 2.7, [1.9, 2.15, 2.34, 2.73, 3.16]);
    console.log(n2);
}
