import { taskA, taskB } from './labs/formula';
import { Film } from './labs/film';
import { workOfArt } from './labs/superClass';

export function labTests(): void {
  console.log(
    `\n======================================================= lab 1 =======================================================\n`,
  );
  console.log('Задача А');
  let [x, y] = taskA();
  for (const i of y) {
    console.log(`При x = ${x[y.indexOf(i)].toFixed(1)}, y = ${i.toFixed(2)}`);
  }
  console.log('Задача B');
  [x, y] = taskB();
  for (const i of y) {
    console.log(`При x = ${x[y.indexOf(i)].toFixed(2)}, y = ${i.toFixed(2)}`);
  }
  console.log(
    `\n======================================================= classes =======================================================\n`,
  );
  const godFather= new Film('The Godfather', 'Francis Ford Coppola', 1972, 'USA', 'drama', 18, 175);
  const terrifier = new Film('Terrifier', 'Damien Leone', 2016, 'USA', 'horror', 18, 85);
  console.log(godFather.display());
  console.log(terrifier.display());
  terrifier.playFilm();
  console.log(terrifier.howOldFilmIs());
  console.log(godFather.howOldFilmIs());
  terrifier.ageLimit = 16;
  console.log(terrifier.display());
}
