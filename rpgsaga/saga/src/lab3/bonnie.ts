import { Animal } from './animal';

export class Bonnie extends Animal {
  override getView(): string {
    return '! !\n^o^';
  }
}
