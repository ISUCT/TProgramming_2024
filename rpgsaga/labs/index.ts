import { Cat } from './cat';
import { RedCat } from './redCat';
import { BlackPersian } from './BlackPersian';
import { RedPersian } from './RedPersian';
import { Shelter } from './shelter';
import { Dog } from './dog';
import { RedSiberian } from './RedSiberian';
import { BlackSiberian } from './BlackSiberian';
import { Toy } from './toy';

const blackPers = new BlackPersian('Гриша', 2, 5);

try {
  blackPers.age = -5;
} catch (error) {
  console.error(error.message);
}

try {
  blackPers.age = 35;
} catch (error) {
  console.error(error.message);
}

blackPers.meow();

const redPers = new RedPersian('Фрося', 3, 2);
redPers.bite();

const redSib: Cat = new RedSiberian('Кефир', 1, 7);
console.log(redSib);

const tmp = redSib as RedCat;
tmp.bite();

const cats: Cat[] = [blackPers, redSib];
for (const cat of cats) {
  cat.meow();
}

const blackSib = new BlackSiberian('Пушок', 5, 2);

const shelter = new Shelter();
shelter.addItem(blackSib);
shelter.addItem(redSib);
shelter.addItem(redPers);
shelter.addItem(blackPers);

const dog = new Dog();
dog.bark();

shelter.addItem(dog);
shelter.showItems();

const mouseTease = new Toy('mouse tease');
blackSib.buyToy(mouseTease);
blackSib.addToy('mouse tease');
