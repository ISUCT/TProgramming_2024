export function calc(a: number, b: number, x: number): number {
    const y = (Math.log2(Math.pow(b, 2) + Math.pow(x, 2)) / Math.pow(Math.abs(Math.pow(x, 2) - Math.pow(a, 2)), 1.0 / 3.0));
    return y;
}

export function part1(a: number, b: number, xn: number, xk: number, dx: number): number[] {
    const size = Math.floor((xk - xn) / dx) + 1;
    const r_a: number[] = [];
    for (let x = xn; x <= xk; x += dx) {
        const y = calc(a, b, x);
        r_a.push(y);
    }
    return r_a;
}

export function part2(slice: number[], a: number, b: number): number[] {
    const r_b: number[] = [];
    for (let i = 0; i < slice.length; i++) {
        const x = slice[i];
        const y = calc(a, b, x);
        r_b.push(y);
    }
    return r_b;
}