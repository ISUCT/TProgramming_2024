import { Archer, logger, Mage } from "../src/services";
import { IceArrows } from "../src/services/Ability";


// Мок для логгера
jest.mock('../src/services/Logger', () => ({
  logger: {
    info: jest.fn(), // Мок для info
    debug: jest.fn(), // Мок для debug (если нужно)
    log: jest.fn(), // Мок для log (если нужно)
  },
}));

describe('IceArrows.test', () => {
  let player1 = new Archer()
  let player2 = new Mage()
  player2.setSideEffects = jest.fn();
  let ability = new IceArrows(player1);

  beforeEach(() => {
    ability = new IceArrows(player1)
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Тестируем метод activate', () => {
    ability.activate(player2);
    expect(logger.info).toHaveBeenCalledWith(
      `${player1.getFullName()} использует абилку Ледяные стрелы по игроку ${player2.name}`
    );
    expect(player2.setSideEffects).toHaveBeenCalled();
  })

  it('Тестируем ограничение на использование способности', () => {
    const limitedAbility = new IceArrows(player1, 1);
  
    limitedAbility.activate(player2);
    expect(logger.info).toHaveBeenCalledWith(
      `${player1.getFullName()} использует абилку Ледяные стрелы по игроку ${player2.name}`
    );
  
    limitedAbility.activate(player2);
    expect(logger.info).toHaveBeenCalledTimes(2); 
  });

  it('Тестируем sideEffectUsageCount', () => {
    const abilityWithSideEffects = new IceArrows(player1, 1, 2);

    abilityWithSideEffects.activate(player2);

    // Проверяем, что sideEffectUsageCount был передан в IceArrowDamageEffect
    expect(player2.setSideEffects).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ _maxUsageCount: 2 }),
      ])
    );
  })
})