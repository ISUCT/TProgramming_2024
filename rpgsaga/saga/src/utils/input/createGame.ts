import { Game } from '../../Game';
import { Logger } from '../output/Logger';
import { readAnswer } from './readAnswer';

import { createCharacter } from './createCharacter';

export function createGame(): void {
  const logger = new Logger();

  let number: number;
  async function askForPlayers() {
    const inputNumber: string = await readAnswer('Введите число игроков (должно делиться на 4): ');
    number = parseInt(inputNumber);
    if (isNaN(number) || number < 1 || number % 4 !== 0) {
      console.log('Некорректный ввод. Пожалуйста, попробуйте снова.');
      await askForPlayers();
    } else {
      await askForCreating();
    }
  }

  async function askForCreating() {
    const inputString: string = await readAnswer('Хотите ли вы создать своего персонажа? (да/нет) ');
    const game = new Game(number, undefined, logger);
    switch (inputString.toLowerCase()) {
      case 'да':
        createCharacter(number);
        break;
      case 'нет':
        await game.start();
        break;
      default:
        console.log('Некорректный ввод. Пожалуйста, попробуйте снова.');
        await askForCreating();
        break;
    }
  }

  askForPlayers();
}
