import { PlayerFactory } from "../src/lib";
import { BasePlayersManager, Player } from "../src/services";

describe('test BasePlayersManager', () => {
  it('Проверяем корректное создание игроков', () => {
    let manager = new BasePlayersManager(PlayerFactory)

    const players = manager.createPlayers(2)

    players.map((pl) => {
      expect(pl).toBeDefined()
      expect(pl).toBeInstanceOf(Player)
    })
  })

  it('Проверяем отображение ошибок', () => {
    let manager = new BasePlayersManager(PlayerFactory)

    expect(() => manager.createPlayers(1)).toThrow('Game: U have to choose only an even number of players');
  })
})
