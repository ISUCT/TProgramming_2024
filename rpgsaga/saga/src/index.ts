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
const warrior = new Warrior('Charly', 'Warrior', 50, 200, 200);
console.log(`Класс воин: ${warrior.toString()}`);
warrior.toString();

// Класс Лучник
const archer = new Archer('Robinn', 'Archer', 50, 200, 200);
console.log(`Класс лучник: ${archer.toString()}`);
// archer.toString();
archer.attack();

// Класс Маг
const mag = new Mage('Zorian', 'Arhymag', 50, 200, 200);
console.log(`Класс маг: ${mag.toString()}`);
// mag.toString();
mag.attack();

// Получение имени
console.log(`Name: ${warrior.name}`);

// Изменение уровня (как пример)
console.log(`Warrior health not changed: ${warrior.health}`);
warrior.health = 5;
console.log(`Warrior health before: ${warrior.health}`);

// Попытка установления неверного заначения уровня
try {
  warrior.health = -10;
} catch (err) {
  console.log(err);
}
