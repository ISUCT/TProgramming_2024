import { Archer } from "../../src/RPGsaga/Archer";
import { TestPlayer } from "../../src/RPGsaga/utils/TestPlayer";

describe('Archer', () => {
  let archer;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    archer = new Archer();
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {}); // Перехватываем console.log перед каждым тестом
  });

  afterEach(() => {
    consoleSpy.mockRestore(); // Восстанавливаем оригинальный console.log после каждого теста
  });

  test('should have Fire Arrows ability', () => {
    const fireArrows = archer.getAbilities().find(a => a.name === 'Fire Arrows');
    expect(fireArrows).not.toBeUndefined();
  });

  test('should use Fire Arrows ability', () => {
    const target = new TestPlayer('TargetPlayer', 100, 10, 0.5);

    archer.useAbility(target);
    expect(consoleSpy).toHaveBeenCalled(); // Проверяем, что Logger.log был вызван

  });
});