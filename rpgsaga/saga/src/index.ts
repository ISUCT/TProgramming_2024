import { taskA, taskB } from "./lab_1";
import { Table } from "./Table";

const a = 0.05;
const b = 0.06;
const xStart = 0.2;
const xEnd = 0.95;
const xStep = 0.15;
const listOfX = [0.15, 0.26, 0.37, 0.48, 0.56];

console.log('Kochetov Danil 2/280');
console.log('laboratory work №1 option 10:');
console.log('task A answers:');
console.log(taskA(a, b, xStart, xEnd, xStep));
console.log('task B answers:');
console.log(taskB(a, b, listOfX));

console.log('Laboratory work №2 (Classes)')
try {
    let table = new Table(100, 70, 60)
    console.log(table.dimensions);
    console.log(table.height);
    console.log(`Table category: ${table.tableCategory()}`);
} catch(ex) {
    console.log(`Error creating table ${ex.message}`)
}
