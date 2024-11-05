export function calculate14(a: number, b: number, x: number) {
    let ans = Math.sqrt(Math.abs(a - b * x) / Math.pow(Math.log10(x), 3));
    return ans;
}

export function task14A(a: number, b: number, xn: number, xk: number, dx: number) {
    const res1: number[] = [];
    for (let x = xn; x <= xk; x += dx) {
        let y = calculate14(a, b, x);
        res1.push(y);
    }
    return res1;
} 



export function task14B(a: number, b: number, xs: number[]) {
    const res2: number[] = [];
    let ans = 0;
    for (let y of xs) {
        ans = calculate14(a, b, y);
        res2.push(ans);
    }
    return res2
}