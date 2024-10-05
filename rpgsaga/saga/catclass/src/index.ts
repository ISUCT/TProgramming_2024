import { Cat } from './cat';
import { testClass } from './tests';

if (testClass()) {
  console.log('Tests have passed');
} else {
  console.error('Tests have failed');
}

const cat: Cat = new Cat(2, 'Kot', 'Siamese');

console.log(cat.age);
console.log(cat.name);
console.log(cat.breed);
