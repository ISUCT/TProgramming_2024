import { Game } from '../../sagaCode/game';
import { Knight } from '../../sagaCode/heroClasses/knight'; 
import { Weapon } from '../../sagaCode/weapon'; 

describe('Game Class', () => {
  let game: Game;
  let player1: Knight;
  let player2: Knight;
  let weapon: Weapon;

  beforeEach(() => {
    weapon = new Weapon('Sword', 20);
    player1 = new Knight('Player1', 100, weapon, 1);
    player2 = new Knight('Player2', 100, weapon, 1);
    game = new Game([player1, player2]);
  });

  test('Проверка параметров игры', () => {
    expect(game.players.length).toBe(2);
    expect(game.round).toBe(1);
  });

  test('Проверка на четность', () => {
    expect(() => new Game([player1])).toThrow('Количество игроков должно быть равно двум или быть кратно 4!');
  });

  test('Проверка игры и выявления победителя', () => {
    const winners = game.playRound([player1, player2]);
    expect(winners.length).toBe(1);
  });
});