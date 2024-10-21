import { Work1, Work2, WorkCalc } from './Lab1';

function main() {
// Work1
console.log("AnswerOnWork1:");
const resultWork1 = Work1(2.0, 0, 1.2, 4.2, 0.6);
console.log(resultWork1);

// Work2
const SliceWork2: number[] = [1.16, 1.32, 1.47, 1.65, 1.93];
console.log("AnswerOnWork2:");
const resultSlice = Work2(SliceWork2, 2.0, 0);
console.log(resultSlice);
}
main();
