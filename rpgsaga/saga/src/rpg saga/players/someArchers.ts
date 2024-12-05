import { Bow } from '../weapons/bowClass';
import { getRandom } from '../necessary/getRandomNumber';

import { Archer } from './archerClass';

let archerNames: string[] = [
  'Робин Гуд',
  'Леголас',
  'Соколиный Глаз',
  'Оливер Куин',
  'Мерида',
  'Кэтнисс Эвердин',
  'Зелёная Стрела',
  'Артемис',
  'Смелый Лучник',
  'Стрелец',
  'Лучник',
  'Лучник-Архонт',
  'Дальнобойный',
  'Лучник-Стрелок',
  'Стрелок',
  'Колчан',
  'Лучник-Мастер',
  'Стрелок-Флетч',
  'Лучник-Боец',
  'Рандал Охотник',
];
let bowNames: string[] = [
  'Стрела Смерти',
  'Тень Ветра',
  'Звездный Лучник',
  'Сердце Леса',
  'Огненный Арбалет',
  'Ледяной Лук',
  'Темный Лучник',
  'Светлый Лук',
  'Лук Грома',
  'Лук Вечности',
  'Лук Небес',
  'Лук Земли',
  'Лук Огня',
  'Лук Воды',
  'Лук Воздуха',
  'Лук Металла',
  'Лук Дерева',
  'Лук Камня',
  'Лук Духа',
  'Лук Сумерек',
];

export function getArchers(neededArchers: number): Archer[] {
  const allWarriors = [];
  while (neededArchers != 0) {
    const swordic = new Bow(
      bowNames[getRandom(0, bowNames.length - 1)],
      'Проникающий',
      getRandom(15, 30),
      getRandom(0, 45),
    );
    const priziwnik = new Archer(
      true,
      false,
      'Лучник',
      archerNames[getRandom(0, archerNames.length - 1)],
      getRandom(280, 320),
      swordic,
      getRandom(1, 3), // сила
      getRandom(1, 3), // выносливость
      getRandom(1, 3), // интеллект
    );
    archerNames = archerNames.filter(name => name !== priziwnik._name);
    bowNames = bowNames.filter(name => name !== priziwnik._name);
    allWarriors.push(priziwnik);
    neededArchers--;
  }
  return allWarriors;
}
