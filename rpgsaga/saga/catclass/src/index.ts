import { Animal } from './animal';
import { Cat } from './cat';
import { Dog } from './dog';

const cat: Cat = new Cat(2, 'Kot', 'Siamese');
const dog: Dog = new Dog(6, 9, 'Sharik', "Brodyaga");

const instances: Animal[] = [cat, dog];

for (let i = 0; i < instances.length; i++) {
  console.log(instances[i].interact());
}
