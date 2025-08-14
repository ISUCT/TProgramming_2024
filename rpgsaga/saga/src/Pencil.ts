import { IDrawable } from './IDrawable';

export class Pencil implements IDrawable {
  display() {
    console.log(`i'm pencil`);
  }

  draw() {
    console.log('Drawing');
  }
}
