import { Game } from '../sagaCode/game';
import { characterGenerator } from '../sagaCode/randomGenerator';

const randomPlayer = new characterGenerator();
const players = randomPlayer.initializePlayers(2);
players.forEach(player => {
  console.log(
    `Игрок: ${player.name}, Класс: ${player.constructor.name}, Здоровье: ${player.health}, Оружие: ${player.weapon.type} (${player.weapon.damageAmount} урона), Кол-во эффектов за игру: ${player.statusEffect}`,
  );
});

const tournament = new Game(players);

tournament.startGame();
