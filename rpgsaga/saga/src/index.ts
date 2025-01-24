import { taskA, taskB } from './lab1and2/laba1';
import { Car } from './lab1and2/laba2';
import { Game } from './laba3Gameplay';
import { Optional } from './laba3Optionals';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  // Функция для асинхронного запроса ввода пользователя
  function askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  }

function output(answersX: number[], answersY: number[]): void {
    for (let i = 0; i < answersX.length; i++) {
        console.log(`x = ${answersX[i].toFixed(2)}, y = ${answersY[i].toFixed(2)}`);
    }
}

async function main()   {
    console.log("Бусыгин Андрей Михайлович");
    let [xL, yL] = taskA(1.25, 3.25, 0.4);
    output(xL, yL);
    console.log("__________________");
    [xL, yL] = taskB([1.84, 2.71, 3.81, 4.56, 5.62]);
    output(xL, yL);


    const car1 = new Car('Toyota Corolla', 'Gasoline');
    car1.setSpeed(120);
    car1.displayInfo();

const optional = new Optional();

  // Запрашиваем у пользователя выбор
  const choice = await askQuestion('Выберите вариант создания игроков (1 - случайные, 2 - вручную): ');
  let players;

  if (choice === '2') {
    const numberOfPlayersInput = await askQuestion('Введите количество игроков: ');
    const numberOfPlayers = parseInt(numberOfPlayersInput, 10);
    players = await optional.createPlayersManually(numberOfPlayers, askQuestion); // Передаем askQuestion
  } else {
    const numberOfPlayers = 6; // По умолчанию 6 игроков
    players = optional.createRandomPlayers(numberOfPlayers);
  }

  const game = new Game(players);
  game.start();

  // Закрываем интерфейс чтения
  rl.close();
}

// Вызываем main
main().catch((error) => {
  console.error('Ошибка:', error);
});
