import { Logger } from "../../src/RPGsaga/utils/Logger";
import { Player } from "../../src/RPGsaga/Player";

describe('Logger', () => {
  let consoleSpy: jest.SpyInstance;  //Тип переменной указывает, что она будет содержать шпион для какого-либо метода

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore(); //Восстанавливает оригинальный метод console.log, убирая все изменения, внесенные шпионом. 
  });

  it('should log the start of the game', () => {
    Logger.startOfTheGame();
    expect(consoleSpy).toHaveBeenCalledWith('Let the show begin!');
  });

  it('should log the start of the round', () => {
    Logger.startOFTheRound(2);
    expect(consoleSpy).toHaveBeenCalledWith('-----------Round number 2 begins!-----------');
  });

  it('should log when the number of players is not even', () => {
    Logger.notEvenPlayers();
    expect(consoleSpy).toHaveBeenCalledWith('Number of players is not even. Try again.');
  });

  it('should log the death of a player', () => {
    const mockPlayer = { getName: () => 'TestPlayer' } as Player;
    Logger.death(mockPlayer);
    expect(consoleSpy).toHaveBeenCalledWith('The player under the name of TestPlayer is dead!\n');
  });

  it('should log the winner of a round', () => {
    const mockPlayer = { getName: () => 'WinnerPlayer' } as Player;
    Logger.winner(mockPlayer);
    expect(consoleSpy).toHaveBeenCalledWith(' WinnerPlayer won! \n');
  });

  it('should log the game over with the winner', () => {
    const mockPlayer = { getName: () => 'ChampionPlayer' } as Player;
    Logger.gameOver(mockPlayer);
    expect(consoleSpy).toHaveBeenCalledWith('-----------Game is over. The winner is ChampionPlayer!-----------');
  });

  it('should log custom messages', () => {
    Logger.log('Custom message test');
    expect(consoleSpy).toHaveBeenCalledWith('Custom message test');
  });
});
