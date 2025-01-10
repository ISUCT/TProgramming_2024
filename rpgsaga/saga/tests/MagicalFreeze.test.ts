import { Archer, logger, Mage } from "../src/services";
import { MagicalFreeze } from "../src/services/Ability";

// Мок для логгера
jest.mock('../src/services/Logger', () => ({
  logger: {
    info: jest.fn(), // Мок для info
    debug: jest.fn(), // Мок для debug (если нужно)
    log: jest.fn(), // Мок для log (если нужно)
  },
}));

describe('MagicalFreeze.test', () => {
  let player1: Mage;
  let player2: Archer;
  let ability: MagicalFreeze;

  beforeEach(() => {
    player1 = new Mage();
    player2 = new Archer();
    player2.setSideEffects = jest.fn();
    jest.clearAllMocks();
    ability = new MagicalFreeze(player1);
  });

  it('Тестируем метод activate', () => {
    ability.activate(player2);

    expect(logger.debug).toHaveBeenCalledWith({
      message: 'MagicalFreeze active ulta',
      metaInfo: `MagicalFreeze.activate(${player2})`,
    });

    expect(logger.info).toHaveBeenCalledWith(
      `${player1.getFullName()} использует ульту - Обворожение`
    );

    expect(player2.setSideEffects).toHaveBeenCalled();
  });

});