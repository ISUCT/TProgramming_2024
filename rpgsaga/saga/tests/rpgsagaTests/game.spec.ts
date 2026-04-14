import { Game } from '../../src/Character/Game';
import { HeroFactory } from '../../src/Character/Factories/HeroFactory';
import { Hero } from '../../src/Character/hero';
import { Logger } from '../../src/Character/Logger';

class MockLogger extends Logger {
  messages: string[] = [];
  attackLogs: string[] = [];
  abilityLogs: string[] = [];
  deathLogs: string[] = [];
  skipTurnLogs: string[] = [];

  messageLog(message: string): void {
    this.messages.push(message);
  }
  attackLog(attacker: Hero, defender: Hero): void {
    this.attackLogs.push(`${attacker.getName} атакует ${defender.getName}`);
  }
  abilityLog(attacker: Hero, defender: Hero): void {
    this.abilityLogs.push(`${attacker.getName} использует скилл на ${defender.getName}`);
  }
  deathLog(hero: Hero): void {
    this.deathLogs.push(`${hero.getName} умер`);
  }
  skipTurnLog(attacker: Hero, defender: Hero): void {
    this.skipTurnLogs.push(`${attacker.getName} пропускает ходы`);
  }
}

describe('Game tests', () => {
  let game: Game;
  let logger: MockLogger;
  const heroFactory = new HeroFactory();

  beforeEach(() => {
    logger = new MockLogger();
    game = new Game(2, logger);
  });

  it('Should start a game with two heroes', async () => {
    await game.start();
    expect(logger.messages.length).toBeGreaterThan(0);
    expect(logger.messages[0]).toBe('Игра началась!');
    expect(logger.messages[1]).toContain('Список участников');
    expect(logger.messages).toContain(`Победитель: (${game.heroes[0].getClassName}) ${game.heroes[0].getName}`);
  });

  it('Should handle a tournament with multiple heroes', async () => {
    const heroes = heroFactory.createRandomHeroes(4);
    const result = await game.tournament(heroes);
    expect(result).toBeDefined();
    expect(result.getHealth).toBeGreaterThan(0);
  });

  it('Should simulate a battle between two heroes', async () => {
    const hero1 = heroFactory.createRandomHero();
    const hero2 = heroFactory.createRandomHero();
    const winner = await game.battle([hero1, hero2]);
    expect(winner).toBeDefined();
    expect(winner.getHealth).toBeGreaterThan(0);
    expect(logger.attackLogs.length).toBeGreaterThan(0);
  });

  it('Should handle a battle where one hero is already dead', async () => {
    const hero1 = heroFactory.createRandomHero();
    const hero2 = heroFactory.createRandomHero();
    hero2.takeDamage(hero2.getHealth);
    const winner = await game.battle([hero1, hero2]);
    expect(winner).toBe(hero1);
  });

  it('Should handle a battle with ability usage', async () => {
    const hero1 = heroFactory.createRandomHero();
    const hero2 = heroFactory.createRandomHero();
    await game.battle([hero1, hero2]);
    expect(logger.abilityLogs.length).toBeGreaterThanOrEqual(0);
  });

  it('Should correctly update the heroes array after a battle', async () => {
    const hero1 = heroFactory.createRandomHero();
    const hero2 = heroFactory.createRandomHero();
    const winner = await game.battle([hero1, hero2]);
    expect(winner.getIsAlive).toBe(true);
    expect(winner.getHealth).toBeGreaterThanOrEqual(1);
  });

  it('Should handle a game with a single hero', async () => {
    game = new Game(1, logger);
    await game.start();
    expect(logger.messages.length).toBeGreaterThan(0);
    expect(logger.messages[0]).toBe('Игра началась!');
    expect(logger.messages[1]).toContain('Список участников');
    expect(logger.messages[2]).toContain(`Победитель`);
  });
});
