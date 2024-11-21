import { task14A, task14B } from './lab1';
import { Dish } from './lab2';

const a = 7.2;
const b = 4.2;
const xn = 1.81;
const xk = 5.31;
const dx = 0.7;
const xs: number[] = [2.4, 2.8, 3.9, 4.7, 3.16];

console.log(task14A(a, b, xn, xk, dx));
console.log(task14B(a, b, xs));

const dish1 = new Dish("Pizza", 15.99, "Italian");
const dish2 = new Dish("Apple pie", 8.99, "American");

console.log(dish1.getinfo);
console.log(dish2.getinfo);
