"use strict";
function solveTaskA(xBeg, xEnd, xStep) {
    let res = new Array(Math.round((xEnd - xBeg) / xStep), 0);
    let index = 0;
    for (let x = xBeg; x <= xEnd; x += xStep) {
        res[index] = solveExpression(2.5, x);
        index++;
    }
    return res;
}
function solveTaskB(xArr) {
    let res = new Array(xArr.length, 0);
    for (let i in xArr) {
        res[i] = solveExpression(2.5, xArr[i]);
    }
    return res;
}
function solveExpression(b, x) {
    if (x == -2.5) {
        throw new Error("'x' doesn't belong to the function's domain.");
    }
    return (1 + Math.pow(Math.sin(degToRad(Math.pow(b, 3) + Math.pow(x, 3))), 2)) / Math.pow(Math.pow(b, 3) + Math.pow(x, 3), 1 / 3);
}
function degToRad(deg) {
    return (deg * Math.PI) / 180;
}
try {
    console.log(solveTaskA(1.28, 3.28, 0.4));
}
catch (err) {
    console.error(err);
}
const xArr = [1.1, 2.4, 3.6, 1.7, 3.9];
try {
    console.log(solveTaskB(xArr));
}
catch (err) {
    console.error(err);
}
//# sourceMappingURL=main.js.map