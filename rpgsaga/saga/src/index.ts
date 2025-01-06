import { game } from '../sagaCode/game';
import { characterGenerator } from '../sagaCode/randomGenerator';

// const player_1 = new knight('Makus', 150, Weapons.sword, 2);
// const player_2 = new archer('Леголас', 120, Weapons.icedBow, 1);
// const player_3 = new mage('Колдун', 110, Weapons.wizardStuff, 1);

const randomPlayer = new characterGenerator();
const players = randomPlayer.initializePlayers(2);
players.forEach(player => {
  console.log(
    `Игрок: ${player.name}, Класс: ${player.constructor.name}, Здоровье: ${player.health}, Оружие: ${player.weapon.type} (${player.weapon.damageAmount} урона), Кол-во эффектов за игру: ${player.statusEffect}`,
  );
});

const fight = new game(players);
fight.start();
