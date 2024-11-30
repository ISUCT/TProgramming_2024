import { taskA, taskB } from './lab1';
import { Film } from './lab2';

main();

function main() {
  console.log('Сысуйкин Денис Дмитриевич');

  const sliceTaskA = taskA(2.25, 1.2, 2.7, 0.3);
  console.log('Результаты TaskA:', sliceTaskA);

  const sliceForTaskB = [2.25, 1.31, 1.39, 1.44, 1.56, 1.92];
  const resultS = taskB(sliceForTaskB, 2.25);
  console.log('Результаты TaskB:', resultS);

  const film1 = new Film('В поисках утраченного времени', 'Марк Дэниел', 120);
  film1.play();
  console.log(film1.getInfo());
  const film2 = new Film('Джентельмены', 'Гай Ричи', 170);
  console.log(film2.getInfo());
}
