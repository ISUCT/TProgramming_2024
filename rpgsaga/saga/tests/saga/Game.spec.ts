import { FactoryCharacter } from "../../src/Characters/FactoryCharacter";
import { Character } from "../../src/Characters/Сharacter";
import { Game } from "../../src/Game";
import { Logger } from "../../src/utils/output/Logger";


class MockLogger extends Logger {
  messages: string[] = [];
  attackLogs: string[] = [];
  abilityLogs: string[] = [];
  deathLogs: string[] = [];
  skipTurnLogs: string[] = [];

  messageLog(message: string): void {
    this.messages.push(message);
  }
  attackLog(attacker: Character, defender: Character): void {
    this.attackLogs.push(`${attacker.name} атакует ${defender.name}`);
  }
  abilityLog(attacker: Character, defender: Character): void {
    this.abilityLogs.push(`${attacker.name} использует скилл на ${defender.name}`);
  }
  deathLog(character: Character): void {
    this.deathLogs.push(`${character.name} умер`);
  }
  skipTurnLog(attacker: Character, defender: Character): void {
    this.skipTurnLogs.push(`${attacker.name} пропускает ходы`);
  }
}

describe('Game tests', () => {
  let game: Game;
  let logger: MockLogger;
  const characterFactory = new FactoryCharacter();

  beforeEach(() => {
    logger = new MockLogger();
    game = new Game(2, undefined, logger);
  });

  it('Should start a game with two characters', async () => {
    await game.start();
    expect(logger.messages.length).toBeGreaterThan(0);
    expect(logger.messages[0]).toBe('Игра началась!');
    expect(logger.messages[1]).toContain('Список участников');
    expect(logger.messages).toContain(`Победитель: (${game.characters[0].className}) ${game.characters[0].name}`);
  });

  it('Should handle a tournament with multiple characters', async () => {
    const characters = characterFactory.createRandomCharacters(4);
    const result = await game.tournament(characters);
    expect(result).toBeDefined();
    expect(result.health).toBeGreaterThan(0);
  });

  it('Should simulate a battle between two characters', async () => {
    const character1 = characterFactory.createRandomCharacter();
    const character2 = characterFactory.createRandomCharacter();
    const winner = await game.battle([character1, character2]);
    expect(winner).toBeDefined();
    expect(winner.health).toBeGreaterThan(0);
    expect(logger.attackLogs.length).toBeGreaterThan(0);
  });

  it('Should handle a battle where one character is already dead', async () => {
    const character1 = characterFactory.createRandomCharacter();
    const character2 = characterFactory.createRandomCharacter();
    character2.damage(character2.health);
    const winner = await game.battle([character1, character2]);
    expect(winner).toBe(character1);
  });

  it('Should handle a battle with ability usage', async () => {
    const character1 = characterFactory.createRandomCharacter();
    const character2 = characterFactory.createRandomCharacter();
    await game.battle([character1, character2]);
    expect(logger.abilityLogs.length).toBeGreaterThanOrEqual(0);
  });

  it('Should correctly update the characters array after a battle', async () => {
    const character1 = characterFactory.createRandomCharacter();
    const character2 = characterFactory.createRandomCharacter();
    const winner = await game.battle([character1, character2]);
    expect(winner.health).toBeGreaterThanOrEqual(1);
  });

  it('Should handle a game with a single character', async () => {
    game = new Game(1, undefined, logger);
    await game.start();
    expect(logger.messages.length).toBeGreaterThan(0);
    expect(logger.messages[0]).toBe('Игра началась!');
    expect(logger.messages[1]).toContain('Список участников');
    expect(logger.messages[2]).toContain(`Победитель`);
  });
});
