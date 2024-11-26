import { Furniture } from './Furniture';
import { taskA, taskB } from './lab_1';
import { Table } from './Table';
import { Wardrobe } from './Wardrobe';

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

console.log('Laboratory work №2 (Classes)');
try {
  const table = new Table(100, 70, 60, 'wood', 35);
  console.log(table.length);
  console.log(table.toString());
} catch (ex) {
  console.log(`Error creating table: ${ex.message}`);
}

console.log('Laboratory work №3 (Severe polymorphism and inheritance hierarchy)');
try {
  const table = new Table(100, 50, 60, 'wood', 67);
  const wardrobe = new Wardrobe(60, 69, 200, 'metal', 67);
  const furniture: Furniture[] = [table, wardrobe];

  for (const el of furniture) {
    console.log(el.purpose());
    console.log();
  }
} catch (ex) {
  console.log(`Error creating class: ${ex.message}`);
}
