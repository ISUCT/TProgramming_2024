import { calculate, solveTaskA, solveTaskB } from "./lab1";
import { Cat } from "./lab2";

export const xN = 1.28;
export const xK = 3.28;
export const xS = 0.4;
export const nums = [1.1, 2.4, 3.6, 1.7, 3.9];
export const b = 2.5; 

console.log(solveTaskA(xN, xK, xS, b));
console.log(solveTaskB(nums, b));

const cat1 = new Cat('Barsik', 5, 'Siamese'); 
console.log(cat1.getInfo);
const cat2 = new Cat('Marsik', 2, 'The Lop-eared Scotsman');
console.log(`Cat's name: ${cat2.name}`);
const cat3 = new Cat('Marsik', 2, "The Lop-eared Scotsman");
console.log(cat3.changeCatName('HamsterKombat'))
