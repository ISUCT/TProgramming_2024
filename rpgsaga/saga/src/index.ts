function TaskA(a: number, b: number, x: number): number {
    return Math.log10(Math.pow(x, 3) - 1) / (Math.log2(a * Math.pow(x, 2) - b) / Math.log2(5));
}

function Task1Slice(a: number, b: number, xn: number, xk: number, deltaX: number): number[] {
    const size = Math.floor((xk - xn) / deltaX) + 1;
    const sliceForTask1: number[] = [];
    for (let x = xn; x <= xk; x += deltaX) {
        sliceForTask1.push(TaskA(a, b, x));
    }
    return sliceForTask1;
}

function TaskB(slice: number[], a: number, b: number): number[] {
    const result: number[] = [];
    for (const x of slice) {
        result.push(TaskA(a, b, x));
    }
    return result;
}

function main() {
    // Task1
    console.log("AnswerOnTask1:");
    const resultSliceTaskA = Task1Slice(1.1, 0.09, 1.2, 2.2, 0.2);
    console.log(resultSliceTaskA);

    // Task2
    const mySliceForTaskB = [1.21, 1.76, 2.53, 3.48, 4.52];
    console.log("AnswerOnTask2:");
    const resultSlice = TaskB(mySliceForTaskB, 1.1, 0.09);
    console.log(resultSlice);
}
main();