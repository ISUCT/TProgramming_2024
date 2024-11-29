import { Archer } from './Character/Archer';
import { Mage } from './Character/Mage';
import { Warrior } from './Character/Warrior';
// import { getTaskA, getTaskB } from './CalcOfFunc';

/*
// import { Character } from './Сharacter'r
import { Archer } from './Archer';
// Константы для Лабы 1(CalcOfFunc)
const xN = 0.26;
const xK = 0.66;
const xD = 0.08;
const numbersX = [0.1, 0.35, 0.4, 0.55, 0.6];
// Вычисления и вывод для Лабы 1 (CalcOfFunc)
console.log(getTaskA(xN, xK, xD));
console.log(getTaskB(numbersX));
*/

// Создание класса и вывод его значений
// Класс Воин
const warrior = new Warrior('Charly', 'Voin', 1);
console.log('Класс воин:');
warrior.toString();

// Класс Лучник
const archer = new Archer('Robbin', 'Archer', 2);
console.log('Класс лучник:');
archer.toString();
archer.attac();

// Класс Маг
const mag = new Mage('Garry', 'Wizard', 1);
mag.toString();
mag.attac();

// Получение имени
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
