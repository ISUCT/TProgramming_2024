export const calc = (a: number, b: number, x: number): number => {
    return (Math.pow(b, 3) + Math.pow(Math.sin(a*x), 2))/(Math.acos(x*b*x) + Math.exp(-x/2));
}

export const taskA = (a: number, b: number, x1: number, x2: number, deltax: number): number [] => {
    let answersA: number [] = [];
    for (x1; x1 < x2; x1 += deltax){
        answersA.push(calc(a, b, x1));
    }
    return answersA
}

export const taskB = (a: number, b: number, znX: number []): number [] => {
    let answersB: number [] = [];
    for (let i = 0; i < znX.length; i++){
        answersB.push(calc(a, b, znX[i]));
    }
    return answersB
}

console.log(taskA(1.2, 0.48, 0.7, 2.2, 0.3))
console.log(taskB(1.2, 0.48, [0.25, 0.36, 0.56, 0.94, 1.28]))