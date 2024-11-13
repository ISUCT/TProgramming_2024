import { Animal, Male } from './AbstractClass/AnimalAbstractClass';
import { Cat } from './AbstractClass/CatClass';
import { Dog } from './AbstractClass/DogClass';

const animals: Animal[] = [new Cat('Whiskers', 2, 'female', Male.woman), new Dog('Buddy', 3, 'male', Male.man)];

animals.forEach(animal => {
  console.log(animal.toString());
  console.log(animal.makeSound());
});
