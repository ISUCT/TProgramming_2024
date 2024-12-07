import { Animal } from './animal';

export function playgroundAnimals(animals: Array<Animal>): Array<string> {
  const representations: Array<string> = new Array<string>();

  for (const animal of animals) {
    representations.push(animal.getView());
  }

  return representations;
}
