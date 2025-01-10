import { Idrawable } from './IDrawable';

export class Dog implements Idrawable {
  display() {
    console.log(`I'm a dog`);
  }
  bark() {
    console.log('barking');
  }
}
