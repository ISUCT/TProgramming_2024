const func = (x: number, a: number = 4.1, b: number = 2.7): number => {
    return ((b * Math.sqrt(x)) - (a * log(x, 5))) / (log(Math.abs(x - 1), 10));
}

const log = (x: number, j: number): number => {
    return Math.log(x) / Math.log(j);
}

const task_a = (x_start: number, x_end: number, x_delta: number): number[] => {
    let a_result: number[] = [];
    for (let i: number = x_start; i<=x_end; i+=x_delta) {
        a_result.push(func(i));
    }
    return a_result;
}

const task_b = (xs: number[]): number[] => {
    let b_result: number[] = [];
    for (let i of xs) {
        b_result.push(func(i));
    }
    return b_result;
}

export {func, log, task_a, task_b};

console.log(func(4));
console.log(task_a(1.2, 5.2, 0.8));
console.log(task_b([1.9, 2.15, 2.34, 2.73, 3.16]));