import * as pointEngine from './lab1/funcs';
import { Foxy } from './lab3/foxy';
import { Bonnie } from './lab3/bonnie';
import { playgroundAnimals } from './lab3/playground';

if (require.main === module) {
  // To not spam if importing.
  console.log(pointEngine.calculateSteps(4.1, 2.7, 1.2, 5.2, 0.8));
  console.log(pointEngine.calculatePoints(4.1, 2.7, [1.9, 2.15, 2.34, 2.73, 3.16]));

  const animalNames: Array<string> = playgroundAnimals([
    new Foxy('Foxer', new Date(Date.now()), 'bb2200', 12),
    new Bonnie('Bonnier', new Date(Date.now()), '0022bb'),
  ]);

  for (const animalName of animalNames) {
    console.log(animalName);
  }
}
