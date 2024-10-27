import { getTaskA, getTaskB } from './CalcOfFunc';
import { Character } from './Сharacter';

// Константы для Лабы 1(CalcOfFunc)
const xN = 0.26;
const xK = 0.66;
const xD = 0.08;
const numbersX = [0.1, 0.35, 0.4, 0.55, 0.6];
// Вычисления и вывод для Лабы 1 (CalcOfFunc)
console.log(getTaskA(xN, xK, xD));
console.log(getTaskB(numbersX));

// Создание класса "воин" и вывод его
const warrior = new Character('Charly', 'Voin', 1);
console.log('Класс воин:');
console.log(`Name: ${warrior.name}, class: ${warrior.class}, level: ${warrior.level}`);
// Получение имени (get - получить)
console.log(`Name: ${warrior.name}`);

// Изменение уровня (как пример)
console.log(`level: ${warrior.level}`);
warrior.level = 5;
console.log(`level: ${warrior.level}`);

// Попытка установления неверного заначения уровня
try {
  warrior.level = -10;
} catch (err) {
  console.log(err);
}
