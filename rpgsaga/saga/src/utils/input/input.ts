import { Game } from '../../gameplay/Game';
import * as readline from 'readline';

export function input(): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function askForPlayers() {
    rl.question('Введите число игроков (должно быть чётным): ', input => {
      const number = parseInt(input);
      if (isNaN(number) || number < 1 || number % 2 !== 0) {
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
