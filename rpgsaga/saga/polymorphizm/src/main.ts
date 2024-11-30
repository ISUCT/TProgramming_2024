
import { Animal } from './animal';
import { Cat } from './cat';
import { Dog } from './dog';


const animals: Animal[] = [
    new Cat("Barsik", 3, 5), 
    new Dog("Bobik", 5, 10) 
];


for (const animal of animals) {
    console.log(`${animal.toString()} makes sound: ${animal.sound()}`);
}

try {
    const invalidCat = new Cat("InvalidCat", 2, -1);
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message); 
    } else {
        console.error("An unknown error occurred");
    }
}