
import { Game } from '../../src';
import { PlayerFactory } from '../../src/RPGsaga/PlayerFactory';
import { Player } from '../../src/RPGsaga/Player';
import { Ability } from '../../src/RPGsaga/utils/abilities';

describe('Game Class Tests', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  test('should initialize the game correctly', () => {
    expect(game).toBeDefined();
    expect(game['players'].length).toBe(0);
    expect(game['roundNumber']).toBe(0);
  });


  test('should generate correct number of players', () => {
    (game as any).generateThePlayers(4);
    expect(game['players']).toHaveLength(4); 
    expect(game['players'][0]).toBeInstanceOf(Player); 
  });
  
  test('should correctly determine initiative order in battle', () => {
    const player1 = PlayerFactory.createRandomPlayer();
    const player2 = PlayerFactory.createRandomPlayer();
  
    const winner = (game as any).battle(player1, player2);
  
    expect(winner).toBeInstanceOf(Player); // Победитель должен быть игроком
    expect(player1.isHeroAlive() || player2.isHeroAlive()).toBe(true); // Один из героев должен остаться живым
  });
  
  test('should process player effects correctly', () => {
    const player = PlayerFactory.createRandomPlayer();
    player.activeEffects.push({
      ability: {
        name: 'Test Ability',
        duration: 1,
        effect: jest.fn(),
        affectsAttack: false,
        usageLimit: Infinity,
      },
      remainingTurns: 2,
    });
  
    (game as any).processEffects(player);
  
    expect(player.activeEffects).toHaveLength(1); // Проверяем, что эффект остался
    expect(player.activeEffects[0].remainingTurns).toBe(1); // Проверяем, что оставшиеся ходы уменьшились
  });



  test('should correctly declare a winner', () => {
    const player1 = PlayerFactory.createRandomPlayer();
    const player2 = PlayerFactory.createRandomPlayer();

    player2.takeDamage(player2.getMaxHealth());

    const winner = (game as any).battle(player1, player2);

    expect(winner).toBe(player1);
    expect(player1.isHeroAlive()).toBe(true);
    expect(player2.isHeroAlive()).toBe(false);
  });





});
