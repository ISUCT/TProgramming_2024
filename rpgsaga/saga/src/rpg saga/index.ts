import { error } from 'console';

import { getWarriors } from './players/someWarriors';
import { getArchers } from './players/someArchers';
import { getWizards } from './players/someWizards';
import { Game } from './necessary/gameScript';

// в работе не фикшен линтер, нет тестов

// максимум сейчас можно добавить 20 персонажей каждого типа
const allWarriors = getWarriors(2);
const allArchers = getArchers(2);
const allWizards = getWizards(2);
if ((allWarriors.length + allArchers.length + allWizards.length) % 2 !== 0) {
  throw new error('Количество добавляемых персонажей должно быть четным');
}
const currentGame = new Game(allWarriors, allArchers, allWizards);
currentGame.allGame();
