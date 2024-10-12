import { TaskA, TaskB } from './lab1';

function main() {
    // TaskA
    console.log("AnswerOnTaskA:");
    const resultSliceTaskA = TaskA(1.1, 0.09, 1.2, 2.2, 0.2);
    console.log(resultSliceTaskA);

    // TaskB
    const mySliceForTaskB = [1.21, 1.76, 2.53, 3.48, 4.52];
    console.log("AnswerOnTaskB:");
    const resultSlice = TaskB(mySliceForTaskB, 1.1, 0.09);
    console.log(resultSlice);
}
main();