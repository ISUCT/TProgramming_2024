import { solveTaskA, solveTaskB } from './tablefunction/lab1';
import { Kitten } from './lab1and2/catclass/lab2';
import { Animal } from './polymorphism/Animals';
import { Dog } from './polymorphism/Dog';
import { Cat } from './polymorphism/Cat';
import { Hero } from './lastlab/Hero';
import { _Ability } from './ability';
import { Wizard } from './nasledniki/Wizard';
import { Knight } from './nasledniki/Knight';
import { Archer } from './nasledniki/Archer';

// // lab1
// export const xN = 1.28;
// export const xK = 3.28;
// export const xS = 0.4;
// export const nums = [1.1, 2.4, 3.6, 1.7, 3.9];
// export const b = 2.5;

// console.log(solveTaskA(xN, xK, xS, b));
// console.log(solveTaskB(nums, b));

// // lab2
// const cat1 = new Kitten('Barsik', 5, 'Siamese');
// console.log(cat1.getInfo);
// const cat2 = new Kitten('Marsik', 2, 'The Lop-eared Scotsman');
// console.log(`Cat's name: ${cat2.name}`);
// console.log(cat2.changeCatName('HamsterKombat'));

// // lab3 (polymorphism)
// const pets: Animal[] = [
//     new Cat('Kompot', 6, 'Sphinx', 'Kazakhstan'),
//     new Dog('Shrek', 11, 'Alabai', 'Gray')
// ];

// pets.forEach(animal => {
//     console.log(animal.getFullInfo());
//     console.log(animal.eat());
//     console.log(animal.makeSound());
// });

const knight = new Knight('Артур', 120, 20, 30);
// const wizard = new Wizard('Гендальф', 100, 15, 50);
const archer = new Archer('Диоптрий', 90, 15, 40)

// Рыцарь использует способность
console.log(knight.useAbility(archer));

// Маг атакует рыцаря
console.log(archer.getDamage(25));

// Рыцарь получает урон, если способность не активна
console.log(knight.getDamage(30));

console.log(archer.useFireArrows(knight)); // Используем Огненные стрелы
console.log(archer.applyEffects(knight)); // Применяем эффекты

console.log(knight.getDamage(25));
console.log(archer.useIceArrows(knight)); // Используем Ледяные стрелы
console.log(archer.applyEffects(knight)); // Применяем эффекты
console.log(`Здоровье противника: ${knight.getHealth}`); // Проверяем здоровье противника