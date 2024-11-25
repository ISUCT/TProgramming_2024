function calc(a: number, b: number, x: number): number {
    if (x <= 0) {
        throw new Error("x must be greater than 0");
    }
    return Math.pow((a + b * x) / Math.pow(Math.log10(x), 3), 1 / 5);
}

function task1(a: number, b: number, xn: number, xk: number, deltax: number): number[] {
    if (deltax <= 0) {
        throw new Error("deltax must be greater than 0");
    }
    const numElements = Math.floor((xk - xn) / deltax + 1);
    const answersA: number[] = [];
    for (let x = xn; x <= xk; x += deltax) {
        const y = calc(a, b, x);
        answersA.push(y);
    }
    return answersA;
}

function task2(a: number, b: number, znX: number[]): number[] {
    const answersB: number[] = [];
    for (const x of znX) {
        if (x <= 0) {
            throw new Error("All elements in znX must be greater than 0");
        }
        const y = calc(a, b, x);
        answersB.push(y);
    }
    return answersB;
}

// Exporting functions to use in other modules or for testing
export { calc, task1, task2 };