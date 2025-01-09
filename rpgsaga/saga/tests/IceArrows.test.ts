import { Knight, logger, Player } from "../src/services";
import { IceArrows } from "../src/services/Ability";

// Мокаем logger.info
jest.mock('../src/services/Logger', () => ({
  logger: {
    info: jest.fn(), // Мок для info
    debug: jest.fn(), // Мок для debug (если нужно)
    log: jest.fn(), // Мок для log (если нужно)
  },
}));

describe('IceArrows', () => {
  let player: Player;
  let opponent: Player;
  let iceArrows: IceArrows;

  beforeEach(() => {
    player = new Knight();
    opponent = new Knight();
    iceArrows = new IceArrows(player, 1, 3); // abilityUsageCount = 1, sideEffectUsageCount = 3
  });

  it('should apply IceArrowDamageEffect to opponent', () => {
    iceArrows.activate(opponent);

    // Проверяем, что побочный эффект был применен
    expect(opponent.health).toBeLessThan(100); // Предположим, что начальное здоровье 100

    // Проверяем, что логгер был вызван
    expect(logger.info).toHaveBeenCalledWith(
      `${player.getFullName()} использует абилку Ледяные стрелы по игроку ${opponent.name}`
    );
  });

  it('should deactivate after max usage', () => {
    iceArrows.activate(opponent);
    iceArrows.activate(opponent); // Попытка использовать второй раз

    // Проверяем, что способность деактивирована
    expect(iceArrows.canUseAbility()).toBe(false);
  });
});