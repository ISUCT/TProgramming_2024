import { Animal } from './class_animal';
import { Cat } from './class_cat';
import { Bird } from './class_bird';

const myCat = new Cat('Barsik', 3, 'female', 'Siamese', true);
const myBird = new Bird('Acha', 2, 'male', 'Canary', true);

const animals: Animal[] = [myCat, myBird];

animals.forEach(animal => {
  console.log(animal.toString());
  console.log(animal.makeSound());
});
