import { getTaskA, getTaskB } from './CalcOfFunc';

const xN = 0.26;
const xK = 0.66;
const xD = 0.08;
const numbersX = [0.1, 0.35, 0.4, 0.55, 0.6];

console.log(getTaskA(xN, xK, xD));
console.log(getTaskB(numbersX));

export { getTaskA, getTaskB };
