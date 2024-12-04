import { work1, work2 } from './Lab1';
import { Mouse } from './Lab2';

function main() {
  // Work1
  console.log('AnswerOnWork1:');
  const resultWork1 = work1(2.0, 0, 1.2, 4.2, 0.6);
  console.log(resultWork1);

  // Work2
  const SliceWork2: number[] = [1.16, 1.32, 1.47, 1.65, 1.93];
  console.log('AnswerOnWork2:');
  const resultSlice = work2(SliceWork2, 2.0, 0);
  console.log(resultSlice);

  const mouse1 = new Mouse('Бобик', 2, 'серый');
  mouse1.setAge(3);
  mouse1.displayInfo();
  mouse1.setAge(-1);
}
main();
