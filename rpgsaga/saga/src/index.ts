function calcY(a: number, b: number, x: number): number | undefined{
    if ((b * x - Math.PI / 2) % Math.PI === 0) {
        return undefined;
    }
    if ((a*x)% Math.PI === 0) {
        return undefined;
    }
    var n = a + Math.pow(Math.tan(b * x), 2);
    var d = b + (1 / Math.tan(Math.pow(a * x, 2)));
    if (d === 0) {
        return undefined;
    }
    var Y = n / d;
    return Y;
}

function TaskA(a: number, b: number, x_start: number, x_end: number, x_delta: number): number[] | undefined{
    let result = [];
    if (x_delta === 0) {
        return [];
    }
    if (x_delta > 0) {
        for (let i = x_start; i <= x_end; i+=x_delta) {
            result.push(calcY(a,b,i))
        }
    }
    else {
        for (let i = x_start; i >= x_end; i+=x_delta) {
            if ((b * i - Math.PI / 2) % Math.PI === 0) {
                continue;
            }
            if ((a*i)% Math.PI === 0) {
                continue;
            }
            result.push(calcY(a,b,i));
        }
    }
    return result;
}

function TaskB(a: number, b: number, xValues: number[]): number[] {
    let result = [];
    for (let i = 0; i < xValues.length; i++) {
        const x = xValues[i];
        result.push(calcY(a, b, x));
    }
    return result;
}

console.log("Ответы на задание A");
console.log(TaskA(0.1, 0.5, 0.15, 1.37, 0.25));
console.log(TaskA(0.1, 0.5, 1.37, 0.15, -0.25));
console.log(TaskA(0.1, 0.5, 0.15, 0.15, 0.25));
console.log("Ответы на задание B");
console.log(TaskB(0.1, 0.5, [0, 0.3, 0.44, 0.6, 0.56])); 
console.log(TaskB(0.1, 0.5, [0.2, 0.3, 0.44, 0.6, 0.56]));
export { TaskA, TaskB };
