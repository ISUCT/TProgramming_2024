export function calcYA(a: number, b: number, x1: number, x2: number): number[] {
    const result: number[] = [];
    for(x1; x1 <= x2; x1 += 0.2){
        const numerator = Math.log10(x1 * x1 - 1);
        const denominator = Math.log(a * x1 * x1 - b) / Math.log(5);
        result.push(numerator/denominator);
    }
    return result;
}

export function calcYB(a: number, b: number, x_val: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < x_val.length; i++) {
        const numerator = Math.log10(x_val[i] * x_val[i] - 1);
        const denominator = Math.log(a * x_val[i] * x_val[i] - b) / Math.log(5);
        result.push(numerator/denominator);
    }
    return result;
}