import { Knight, logger, Player } from "../src/services";
import { IceArrowDamageEffect } from "../src/services/SideEffect";

// Мокаем logger.info
jest.mock('../src/services/Logger', () => ({
  logger: {
    info: jest.fn(), // Мок для info
    debug: jest.fn(), // Мок для debug (если нужно)
    log: jest.fn(), // Мок для log (если нужно)
  },
}));

describe('IceArrowDamageEffect', () => {
  let player: Player;
  let effect: IceArrowDamageEffect;

  beforeEach(() => {
    player = new Knight();
    effect = new IceArrowDamageEffect(2); // usageCount = 2
    effect.bindToPlayer(player);
  });

  it('should reduce player health on activation', () => {
    const initialHealth = player.health;
    effect.activate();

    // Проверяем, что здоровье уменьшилось
    expect(player.health).toBe(initialHealth - 2);

    // Проверяем, что логгер был вызван
    expect(logger.info).toHaveBeenCalledWith(
      `${player.getFullName()} теряет 2 так как замарозка херачит`
    );
    expect(logger.info).toHaveBeenCalledWith(
      `${player.getFullName()}: Здоровье - ${player.health}`
    );
  });

  it('should deactivate after max usage', () => {
    effect.activate(); // Первое использование
    effect.activate(); // Второе использование

    // Проверяем, что эффект деактивирован
    expect(effect.isActiveEffect).toBe(false);
  });
});