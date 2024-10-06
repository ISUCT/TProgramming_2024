import { getTaskA, getTaskB } from "./CalcOfFunc";

const xN = 0.26,
    xK = 0.66,
    xD = 0.08,
    numbersX = [0.1, 0.35, 0.4, 0.55, 0.6];

console.log(getTaskA(xN, xK, xD));
console.log(getTaskB(numbersX));

export {getTaskA, getTaskB};
