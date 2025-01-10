import { Archer, logger } from '../src/services';
import {BaseFightManager} from '../src/services/Game'

jest.mock('../src/services/Logger', () => ({
  logger: {
    info: jest.fn(), // Мок для info
    debug: jest.fn(), // Мок для debug (если нужно)
    log: jest.fn(), // Мок для log (если нужно)
  },
}));

describe('BaseFightManager.test', () => {
  let manager = new BaseFightManager()
  let player1 = new Archer()
  let player2 = new Archer()

  beforeEach(() => {
    manager = new BaseFightManager()
  })

  it('Тестируем возвращение игроков', () => {
    let winner = manager.fight(player1, player2)

    expect(winner).toBeDefined()
    expect(logger.info).toHaveBeenCalledWith(
      `И победитель - ${winner.getFullName()}`
    )
  })
});
