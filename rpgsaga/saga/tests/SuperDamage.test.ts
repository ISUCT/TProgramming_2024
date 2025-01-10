import { Archer, Knight, logger } from "../src/services";
import { SuperDamage } from "../src/services/Ability";

jest.mock('../src/services/Logger', () => ({
  logger: {
    info: jest.fn(), // Мок для info
    debug: jest.fn(), // Мок для debug (если нужно)
    log: jest.fn(), // Мок для log (если нужно)
  },
}));

describe('BaseFightManager.test', () => {
  let player1 = new Knight()
  let player2 = new Archer()
  let ability = new SuperDamage(player1)

  it('Тестируем метод activate: уменьшение здоровья противника', () => {
    const initialHealth = player2.health;

    ability.activate(player2);

    const expectedDamage = Math.ceil(player1.power * 1.3);
    expect(player2.health).toBe(initialHealth - expectedDamage);

    expect(logger.info).toHaveBeenCalledWith(
      `Игрок ${player1.getFullName()} использует супер удар по игроку ${player2.getFullName()} \n`
    );
  });
})
