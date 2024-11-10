declare interface Math {
  log10(x: number): number;
}

function calculate19(a: number, x: number): number {
return Math.pow(Math.log10(a + x), 2) / Math.pow(a + x, 2);
}

function task15A(a: number, xn: number, xk: number, dx: number): number[] {
const results: number[] = [];
for (let x = xn; x <= xk; x += dx) {
  results.push(calculate19(a, x));
}
return results;
}

function task15B(a: number, xs: number[]): number[] {
return xs.map(x => calculate19(a, x));
}
