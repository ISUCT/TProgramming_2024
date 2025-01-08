

// Подставьте ваши импорты, если они отличаются от указанных выше.

import { Game } from "../src/core/Game";
import { Knight } from "../src/services";

describe('Game', () => {
  let game: Game;
  
  beforeEach(() => {
    game = new Game(); // Создаем новый экземпляр игры перед каждым тестом
  });

  it('should initialize with default players count', () => {
    expect(game['_playersCount']).toBe(2); // Проверяем количество игроков по умолчанию
  });

  it('should create pairs correctly', () => {
    const mockCreatePairs = jest.spyOn(game['_pairsBehavior'], 'createPairs'); // Шпионим за методом createPairs
    const mockPlayers = [
      new Knight(), // Пример создания игрока
      new Knight(),
    ];
    game['_createPairs'](mockPlayers);
    expect(mockCreatePairs).toHaveBeenCalledWith(mockPlayers); // Проверяем вызов метода createPairs
  });

  it('should run battles until there is a winner', () => {
    const mockRunBattles = jest.spyOn(game, '_runBattles' as any); // Шпионим за методом _runBattles
    game.start();
    expect(mockRunBattles).toHaveBeenCalledTimes(1); // Проверяем вызов метода _runBattles
  });

  it('should check and set the winner correctly', () => {
    const mockCheckAndSetWinners = jest.spyOn(game, '_checkAndSetWinnerGame' as any); // Шпионим за методом _checkAndSetWinners
    const mockWinnersInBattle = [[new Knight()]]; // Пример списка победителей
    game['_winnersInBattle'].push(mockWinnersInBattle[0]);
    game['_checkAndSetWinnerGame']();
    expect(mockCheckAndSetWinners).toHaveBeenCalledTimes(1); // Проверяем вызов метода _checkAndSetWinners
    expect(game['_winner']).toEqual(mockWinnersInBattle[0][0]); // Проверяем установку победителя
  });
});