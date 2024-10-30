import { taskA, taskB } from './labs/formula';
import { Film } from './labs/film';
import { Picture } from './labs/picture';

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
  const godFather = new Film('The Godfather', 'Francis Ford Coppola', 1972, 'USA', 'drama', 18, 175);
  const terrifier = new Film('Terrifier', 'Damien Leone', 2016, 'USA', 'horror', 18, 85);
  console.log(godFather.filmInfo());
  console.log(terrifier.filmInfo());
  terrifier.display();
  console.log(terrifier.howOldFilmIs());
  console.log(godFather.howOldFilmIs());
  terrifier.ageLimit = 16;
  console.log(terrifier.filmInfo());
  const monaLisa = new Picture(
    'Mona Lisa',
    'Leonardo da Vinci',
    1518,
    'Italy',
    'The Renaissance',
    'https://avatars.mds.yandex.net/get-entity_search/2028178/494640495/S600xU_2x',
  );
  const classes = [godFather, terrifier, monaLisa];
  for (let i = 0; i < 3; i++) {
    classes[i].display();
  }
}
