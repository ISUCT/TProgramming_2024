import { Archer, logger, Mage } from "../src/services"
import { FireArrows } from "../src/services/Ability"

jest.mock('../src/services/Logger', () => ({
    logger: {
      info: jest.fn(), // Мок для info
      debug: jest.fn(), // Мок для debug (если нужно)
      log: jest.fn(), // Мок для log (если нужно)
    },
  }));
  

describe('FireArrows.test', () => {
    let player1 = new Archer()
    let player2 = new Mage()
    player2.setSideEffects = jest.fn();
    let ability = new FireArrows(player1)

    beforeEach(() => {
      ability = new FireArrows(player1)
    })
    
    it('Тестируем метод activate', () => {
        ability.activate(player2);

        expect(logger.info).toHaveBeenCalledWith(
          `Игрок ${player1.name} использует супер абилку огненые стрелы по игроку ${player2.name}`
        );

        expect(player2.setSideEffects).toHaveBeenCalled();

      });
})