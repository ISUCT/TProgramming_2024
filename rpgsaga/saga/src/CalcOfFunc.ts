const xN = 0.26,
    xK = 0.66,
    xD = 0.08,
    numbersX = [0.1, 0.35, 0.4, 0.55, 0.6];

function calculate(x: number) {
    let arcSin2 = (Math.asin(x))**2;
    let arcCos4 = (Math.acos(x))**4;
    let y = (arcSin2 + arcCos4)**3
    return y;
}

function getTaskA(xN: number, xK: number, xD: number) {
    const ansverA: number[] = [];
    for (let i = xN; i <= xK; i += xD) {
        ansverA.unshift(calculate(i));
    }
    return ansverA;
}

function getTaskB(numbersX: number[]) {
    const ansverB: number[] = [];
    for (let X of numbersX) {
        ansverB.unshift(calculate(X));
    }
    return ansverB;
}

console.log(getTaskA(xN, xK, xD));
console.log(getTaskB(numbersX));
