import { Game } from '../../Game';
import { Logger } from '../output/Logger';
import { readAnswer } from './readAnswer';

import { createCharacter } from './createCharacter';

export function startGame(): void {
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
    const inputString: string = await readAnswer('\nХотите ли вы создать своего персонажа? (Yes/no) ');
    const game = new Game(number, undefined, logger);
    switch (inputString.toLowerCase()) {
      case 'yes':
        createCharacter(number);
        break;
      case 'y':
        createCharacter(number);
        break;
      case 'no':
        await game.start();
        break;
      case 'n':
        await game.start();
        break;
      default:
        createCharacter(number);
        break;
    }
  }

  askForPlayers();
}
