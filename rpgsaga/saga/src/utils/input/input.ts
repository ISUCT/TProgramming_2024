import * as readline from 'readline';

import { Game } from '../../gameplay/Game';

export function input(): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function askForPlayers() {
    rl.question('Введите число игроков (должно делиться на 4): ', inputNumber => {
      const number = parseInt(inputNumber);
      if (isNaN(number) || number < 1 || number % 4 !== 0) {
        console.log('Некорректный ввод. Пожалуйста, попробуйте снова.');
        askForPlayers();
      } else {
        const game = new Game(number);
        game.start();
        rl.close();
      }
    });
  }

  askForPlayers();
}
