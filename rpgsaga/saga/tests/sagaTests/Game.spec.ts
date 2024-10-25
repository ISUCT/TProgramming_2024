import { Game } from '../../src/gameplay/Game';

describe('Game class methods tests', () => {
  it('Constructor test', () => {
    let newGame = new Game(4);
    expect(newGame.playersCount.length).toEqual(4);
  });
  it('should create players with random names, health, and strength', () => {
    let newGame = new Game(2);
    expect(
      newGame.playersCount.every(p => p.playerName !== undefined && p.healthPoints > 0 && p.strengthPoints > 0),
    ).toBe(true);
  });
  it('should create players of different types (Knight, Archer, Vizard)', () => {
    let newGame = new Game(10);
    const playerTypes = newGame.playersCount.map(p => p.constructor.name);
    expect(playerTypes.includes('Knight')).toBe(true);
    expect(playerTypes.includes('Archer')).toBe(true);
    expect(playerTypes.includes('Vizard')).toBe(true);
  });
  describe('Get methods tests', () => {
    let newGame = new Game(20);
    it('Players get test', () => {
      expect(newGame.playersCount.length).toEqual(20);
    });
  });
});
