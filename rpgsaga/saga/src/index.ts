import { death, taskA, taskB } from './laba1';
import { Animal } from './Animal';
import { Piggy } from './Piggy';
import { Sheep } from './Sheep';

// Вариант_21

const xStart = 0.11;
const xEnd = 0.36;
const xStep = 0.05;
const listX = [0.2, 0.3, 0.38, 0.43, 0.57];

console.log('Хабибулина Алина 2/280');
console.log('Лаба №1 Функция');
console.log(death(0.1));
console.log(`Ответы к задаче A: ${taskA(xStart, xEnd, xStep)}`);
console.log(`Ответы к задаче B: ${taskB(listX)}`);

console.log('Лаба №2 Классы');
try {
  const pig = new Piggy('Yorik', 10, 'male', 'brown');
  console.log(pig.name);
  console.log(pig.age);
} catch (ex) {
  console.log(`Ошибка при создании класса: ${ex.message}`);
}

console.log('Лаба №3 Полиморфизм');
try {
  const piggy = new Piggy('Borya', 3, 'male', 'black');
  const sheep = new Sheep('Barash', 34, 'female', 'white');
  const animals: Animal[] = [piggy, sheep];

  for (const el of animals) {
    console.log(el.voice());
  }
} catch (ex) {
  console.log(`Ошибка при создании класса: ${ex.message}`);
}
