import { taskA, taskB } from './MathCalc/MathCal';
import { Dish } from './DishStruct/DishStruct';
import { Product } from './SuperClass/Product';
import dishSuperClass from './SuperClass/Dish';
import drinkSuperClass from './SuperClass/Drink';

console.log('Лабораторная работа по мат.функции:');
console.log('Номер под А:');
console.log(taskA(1.81, 5.31, 0.7));
console.log('Номер под Б');
console.log(taskB([2.4, 2.8, 3.9, 4.7, 3.16]));
console.log('Лабораторная работа по классам:');
console.log('Лаба на классы');
const dish = new Dish(50, 277.9, 'Картошка с мясом');
console.log(dish);
dish.name = 'Борщ';
console.log(dish.calorie);
console.log('Лабораторная работа по суперклассу:');
const products: Product[] = [new dishSuperClass(350, 'Салат Цезарь', 450), new drinkSuperClass(150, 'Кока-Кола', 500)];
products.forEach(product => {
  console.log(product.toString());
  console.log(product.details());
});
