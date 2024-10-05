import * as pointEngine from './lab1/funcs';

if (require.main === module) {
  // To not spam if importing.
  console.log(pointEngine.calculateSteps(4.1, 2.7, 1.2, 5.2, 0.8));
  console.log(pointEngine.calculatePoints(4.1, 2.7, [1.9, 2.15, 2.34, 2.73, 3.16]));
}
