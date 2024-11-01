import { taskone, tasktwo } from './tasks';
import { Character } from './character';

console.log(taskone(0.26, 0.66, 0.08));
console.log(tasktwo(0.1, 0.35, 0.4, 0.55, 0.6));

const chel = new Character('Владик Пармезан', 7, 8, 7, 8);
chel.printOverallInfo();
chel.event();

try {
  const gendarme = new Character('Жан Поль', 1, 4, 8, 8);
  gendarme.printOverallInfo();
  gendarme.intellect = 69;
} catch (error) {
  console.error(error.message);
}
