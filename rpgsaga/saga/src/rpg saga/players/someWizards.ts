import { Wand } from '../weapons/wandClass';
import { getRandom } from '../necessary/getRandomNumber';

import { Wizard } from './wizardClass';

let wizardNames: string[] = [
  'Аларик',
  'Бельфегор',
  'Вольфрам',
  'Гаррик',
  'Драгон',
  'Эйден',
  'Зандир',
  'Игнис',
  'Кайрос',
  'Лоркан',
  'Магнус',
  'Некрос',
  'Орион',
  'Палладин',
  'Квин',
  'Регар',
  'Солмир',
  'Таргон',
  'Улрик',
  'Феникс',
];
let wandNames: string[] = [
  'Сердце Волшебника',
  'Око Пророчества',
  'Ключ к Бездне',
  'Свиток Тайн',
  'Перо Истины',
  'Кольцо Силы',
  'Зеркало Времени',
  'Книга Заклинаний',
  'Сфера Знаний',
  'Кольцо Бездны',
  'Свиток Света',
  'Перо Тьмы',
  'Ключ к Звездным Вратам',
  'Зеркало Сумерек',
  'Книга Судеб',
  'Сфера Жизни',
  'Кольцо Смерти',
  'Свиток Вечности',
  'Перо Иллюзий',
  'Ключ к Пророчествам',
];
export function getWizards(neededWizards: number): Wizard[] {
  const allWizards = [];
  while (neededWizards != 0) {
    const swordic = new Wand(
      wandNames[getRandom(0, wandNames.length - 1)],
      'Магическое',
      getRandom(30, 50),
      getRandom(0, 45),
    );
    const priziwnik = new Wizard(
      true,
      false,
      'Маг',
      wizardNames[getRandom(0, wizardNames.length - 1)],
      getRandom(320, 380),
      swordic,
      getRandom(1, 3), // сила
      getRandom(1, 3), // выносливость
      getRandom(1, 3), // интеллект
    );
    wizardNames = wizardNames.filter(name => name !== priziwnik._name);
    wandNames = wandNames.filter(name => name !== priziwnik._name);
    allWizards.push(priziwnik);
    neededWizards--;
  }
  return allWizards;
}
