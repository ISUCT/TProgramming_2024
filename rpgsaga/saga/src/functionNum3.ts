function result(x : number, a: number, b: number): number {
    const numerator = 1 + Math.pow(Math.log10(x / a), 2) ;
    const denominator = b - Math.exp(x / a);
    const y = numerator / denominator;
    return y;
}

function taskA(a: number, b: number, xBegin: number, xEnd: number, xDelta: number): number[] {
    const y: number[] = [];
    for (let x = xBegin; x <= xEnd; x += xDelta) {

        if (xDelta === 0) {
            return [];
        }

        if (xDelta > 0) {
            for (let x = xBegin; x <= xEnd; x += xDelta) {
                y.push(result(x, a, b));
            }
        } else {
            for (let x = xBegin; x >= xEnd; x += xDelta) {
                if (1 + Math.pow(Math.log10(x / a), 2) <= 0) {
                    continue;
                }
                y.push(result(x, a, b));
            }
        }
        return y;
    }
}

function taskB(a : number, b: number, values: number[]): number[] {
    if (values.length === 0) {
        return [];
    }
    const y: number[] = [];
    for (const x of values) {
        y.push(result(x, a, b));
    }
    return y;
}

function output(taskName: string, results: number[]): string {
    let resMsg = `Solution to task ${taskName}:\n`;

    results.forEach(resultNum => {
        resMsg += `${resultNum},\n`;
    });
    return resMsg;
}

const taskARes = taskA(2, 0.95, 1.25, 2.75, 0.3);
console.log(output('A', taskARes));

const taskBRes = taskB(2, 0.95, []);
console.log(output('B', taskBRes));

export {taskA, taskB};