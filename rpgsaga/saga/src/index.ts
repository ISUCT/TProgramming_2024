import { Animal } from './Animal';
import { Cat } from './Cat';
import { Dog } from './Dog';
import { taskA, taskB } from './Laba1';

const a = 2;
const b = 3;
const xStart = 0.11;
const xEnd = 0.36;
const xStep = 0.05;
const listOfX = [0.08, 0.26, 0.35, 0.41, 0.53];

console.log(taskA(2, 3, 0.21, 0.16, 0.05));
console.log('Кочетов Максим группа 2/280 11 вариант');
console.log('Ответы для задачи А:');
console.log(taskA(a, b, xStart, xEnd, xStep));
console.log('Ответы для задачи В:');
console.log(taskB(a, b, listOfX));

console.log('Лабораторная работа с классами: собака');
try {
  const dog = new Dog('Sharik', 10, 'rottweiler');
  console.log(`The dog's name is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
} catch (ex) {
  console.log(`Error creating dog: ${ex.message}`);
}

console.log('Лаба №3 Полиморфизм');
try {
  const dog = new Dog("Zhychka", 6, "male");
  const cat = new Cat("Myska", 4, "female");
  const animals: Animal[] = [dog, cat];

  for (const el of animals) {
    console.log(el.voice());
  }
} catch (ex) {
  console.log(`Ошибка при создании класса: ${ex.message}`);
}
