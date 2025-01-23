import { Knight } from "../../src/RPGsaga/Knight";
import { TestPlayer } from "../../src/RPGsaga/utils/TestPlayer";

describe('Knight', () => {
  let knight;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    knight = new Knight();
    // Перенаправление вывод console.log на spy
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore(); 
  });

  test('should have Retribution Strike ability', () => {
    const retributionStrike = knight.getAbilities().find(a => a.name === 'Retribution Strike');
    expect(retributionStrike).not.toBeUndefined();
  });

  test('should use Retribution Strike ability', () => {
    const target = new TestPlayer('TargetPlayer', 100, 10, 0.5);

    knight.useAbility(target);

    expect(consoleSpy).toHaveBeenCalled(); 
  });
});
