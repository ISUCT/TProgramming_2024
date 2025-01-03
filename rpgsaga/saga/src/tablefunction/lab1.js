"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = calculate;
exports.solveTaskA = solveTaskA;
exports.solveTaskB = solveTaskB;
var __1 = require("..");
function calculate(x, b) {
    var resA = Math.pow(1 + Math.pow(Math.sin(b), 3) + Math.pow(x, 3), 2 / Math.pow(Math.pow(b, 3) + Math.pow(x, 3), 1 / 3));
    return resA;
}
function solveTaskA(xN, xK, xS, b) {
    var arrSlice = [];
    for (var x = xN; x <= xK; x += xS) {
        arrSlice.push(calculate(x, b));
    }
    return arrSlice;
}
function solveTaskB(nums, b) {
    var resB = [];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var i = nums_1[_i];
        resB.unshift(calculate(i, b));
    }
    return resB;
}
console.log("\u0417\u0430\u0434\u0430\u0447\u0430 \u0411: ".concat(solveTaskB(__1.nums, __1.b)));
