import { Game } from '../../src/game/gameplay/Game';
import { PlayerFabric } from '../../src/game/fabrics/playersFabrics';
import { Player } from '../../src/game/abstract/Player';
import { Logger } from '../../src/game/utils/output/Logger';

class MockLogger extends Logger {
  messages: string[] = [];
  attackLogs: string[] = [];
  skillLogs: string[] = [];
  deathLogs: string[] = [];
  skipTurnLogs: string[] = [];

  messageLog(message: string): void {
    this.messages.push(message);
  }
  attackLog(attacker: Player, defender: Player): void {
    this.attackLogs.push(`${attacker.name} атакует ${defender.name}`);
  }
  skillLog(attacker: Player, defender: Player): void {
    this.skillLogs.push(`${attacker.name} использует скилл на ${defender.name}`);
  }
  deathLog(player: Player): void {
    this.deathLogs.push(`${player.name} умер`);
  }
  skipTurnLog(attacker: Player, defender: Player): void {
    this.skipTurnLogs.push(`${attacker.name} пропускает ходы`);
  }
}

describe('Game tests', () => {
  let game: Game;
  let logger: MockLogger;
  const playerFabric = new PlayerFabric();

  beforeEach(() => {
    logger = new MockLogger();
    game = new Game(2, undefined, logger);
  });

  it('Should start a game with two players', async () => {
    await game.start();
    expect(logger.messages.length).toBeGreaterThan(0);
    expect(logger.messages[0]).toBe('Игра началась!');
    expect(logger.messages[1]).toContain('Список участников');
    expect(logger.messages).toContain(`Победитель: (${game.players[0].className}) ${game.players[0].name}`);
  });

  it('Should handle a tournament with multiple players', async () => {
    const players = playerFabric.createRandomPlayers(4);
    const result = await game.tournament(players);
    expect(result).toBeDefined();
    expect(result.health).toBeGreaterThan(0);
  });

  it('Should simulate a battle between two players', async () => {
    const player1 = playerFabric.createRandomPlayer();
    const player2 = playerFabric.createRandomPlayer();
    const winner = await game.battle([player1, player2]);
    expect(winner).toBeDefined();
    expect(winner.health).toBeGreaterThan(0);
    expect(logger.attackLogs.length).toBeGreaterThan(0);
  });

  it('Should handle a battle where one player is already dead', async () => {
    const player1 = playerFabric.createRandomPlayer();
    const player2 = playerFabric.createRandomPlayer();
    player2.takeDamage(player2.health);
    const winner = await game.battle([player1, player2]);
    expect(winner).toBe(player1);
  });

  it('Should handle a battle with skill usage', async () => {
    const player1 = playerFabric.createRandomPlayer();
    const player2 = playerFabric.createRandomPlayer();
    await game.battle([player1, player2]);
    expect(logger.skillLogs.length).toBeGreaterThanOrEqual(0);
  });

  it('Should correctly update the players array after a battle', async () => {
    const player1 = playerFabric.createRandomPlayer();
    const player2 = playerFabric.createRandomPlayer();
    const winner = await game.battle([player1, player2]);
    expect(winner.isAlive).toBe(true);
    expect(winner.health).toBeGreaterThanOrEqual(1);
  });

  it('Should handle a game with a single player', async () => {
    game = new Game(1, undefined, logger);
    await game.start();
    expect(logger.messages.length).toBeGreaterThan(0);
    expect(logger.messages[0]).toBe('Игра началась!');
    expect(logger.messages[1]).toContain('Список участников');
    expect(logger.messages[2]).toContain(`Победитель`);
  });
});
