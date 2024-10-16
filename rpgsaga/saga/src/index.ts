import { Dish } from './DishStruct/DishStruct';
import { TaskA, TaskB } from './MathCalc/MathCal';

console.log('Лабораторная работа по мат.функции:');
console.log('Номер под А:');
console.log(TaskA(1.81, 5.31, 0.7));
console.log('Номер под Б');
console.log(TaskB([2.4, 2.8, 3.9, 4.7, 3.16]));
console.log('Лабораторная работа по классам:');
console.log('Лаба на классы');
const dish = new Dish(50, 277.9, 'Картошка с мясом');
console.log(dish);
dish.name = 'Борщ';
console.log(dish.calorie);
