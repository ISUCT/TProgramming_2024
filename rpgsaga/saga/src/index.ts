import { solveTaskA, solveTaskB } from './tablefunction/lab1';
import { Kitten } from './catclass/lab2';
import { Animal } from './polymorphism/Animals';
import { Dog } from './polymorphism/Dog';
import { Cat } from './polymorphism/Cat';

//lab1
export const xN = 1.28;
export const xK = 3.28;
export const xS = 0.4;
export const nums = [1.1, 2.4, 3.6, 1.7, 3.9];
export const b = 2.5;

console.log(solveTaskA(xN, xK, xS, b));
console.log(solveTaskB(nums, b));
//lab2
const cat1 = new Kitten('Barsik', 5, 'Siamese');
console.log(cat1.getInfo);
const cat2 = new Kitten('Marsik', 2, 'The Lop-eared Scotsman');
console.log(`Cat's name: ${cat2.name}`);
console.log(cat2.changeCatName('HamsterKombat'));

//lab3 (polymorphism)
const pets: Animal[] = [new Cat('Kompot', 6, 'Sphinx', 'Kazakhstan'), new Dog('Shrek', 11, 'Alabai', 'Gray')];
pets.forEach(Animal => {
    console.log(Animal.getFullInfo());
    console.log(Animal.eat());
    console.log(Animal.makeSound());
})
