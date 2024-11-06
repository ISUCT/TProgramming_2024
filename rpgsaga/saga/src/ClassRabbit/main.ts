import { Animal } from './Animal';
import { Rabbit } from './Rabbit';
import { Cat } from './Cat';

const animals: Animal[] = [new Rabbit(2, 'Vitalik', 'grey', 7), new Cat(5, 'Murzik', 'orange', 'munchkin')];

animals.forEach(animal => {
  console.log(animal.toString());
  animal.makeSound();
});
