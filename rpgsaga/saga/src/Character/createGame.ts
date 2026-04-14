import { Game } from './Game';
import { Logger } from './Logger';
import { readInput } from './Functions/readInput';

export function createGame(): void {
  const logger = new Logger();

  let number: number;
  async function askForPlayers() {
    const inputNumber: string = await readInput('Введите число игроков (должно делиться на 4): ');
    number = parseInt(inputNumber);
    if (isNaN(number) || number < 1 || number % 4 !== 0) {
      console.log('Некорректный ввод. Пожалуйста, попробуйте снова.');
      await askForPlayers();
    } else {
      const game = new Game(number, logger);
      await game.start();
    }
  }

  askForPlayers();
}