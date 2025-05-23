import { Sword } from '../weapons/swordClass';
import { getRandom } from '../necessary/getRandomNumber';

import { Warrior } from './warriorClass';
import { Player } from './playerClass';

let warriorNames: string[] = [
  'Сэр (re)emzy',
  'Сэр tremens',
  'Сэр ownage',
  'Сэр Бедавир',
  'Сэр Тристан',
  'Сэр Персиваль',
  'Сэр Борс',
  'Сэр Кей',
  'Сэр Герайнт',
  'Сэр Гарет',
  'Сэр Паламед',
  'Сэр Ламорак',
  'Сэр Пелеас',
  'Сэр Эктор',
  'Сэр Дагонет',
  'Сэр Агравайн',
  'Сэр Гаэрис',
  'Сэр Мордред',
  'Сэр Ивейн',
  'Сэр Грифлет',
];
let swordNames: string[] = [
  'Экскалибур',
  'Кларент',
  'Дюрандаль',
  'Жойез',
  'Грам',
  'Дурендаль',
  'Морозный Укор',
  'Стинг',
  'Андурил',
  'Гламдринг',
  'Экскалибур II',
  'Калибурн',
  'Кусанаги',
  'Харпе',
  'Зульфикар',
  'Морглай',
  'Хрунтинг',
  'Тицона',
  'Куртане',
  'Аскалон',
]; 
function getSword(): Sword {
    const swordic = new Sword(
        swordNames[getRandom(0, swordNames.length - 1)],
        'Рубящее',
        getRandom(10, 20),
        getRandom(0, 45),
      )
    return swordic
}
export function getWarriors(neededWarriors: number): Warrior[] {
  const allWarriors = [];
  while (neededWarriors != 0) {
    const priziwnik = new Warrior(
      true,
      false,
      [],
      [0,0],
      'Воин',
      warriorNames[getRandom(0, warriorNames.length - 1)],
      getRandom(320, 380),
      getSword(),
      getRandom(1, 3), // сила
      getRandom(1, 3), // выносливость
      getRandom(1, 3), // интеллект
    );
    warriorNames = warriorNames.filter(name => name !== priziwnik._name);
    swordNames = swordNames.filter(name => name !== priziwnik._name);
    allWarriors.push(priziwnik);
    neededWarriors--;
  }
  return allWarriors;
}

export function getCustomWarrior(name: string, healthPoints: number, strength: number, agility: number, intelligence: number): Player{
    const priziwnik = new Warrior(true, false, [], [0, 0], 'Воин', name, healthPoints, getSword(), strength, agility, intelligence)
    return priziwnik
}