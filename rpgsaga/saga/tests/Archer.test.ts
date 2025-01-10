import { Archer } from "../src/services"

describe('test for Archer', () => {
  it('Проверяем корректное создание игрока', () => {
    const player1 = new Archer()
    expect(player1).toBeDefined()
  })

  it('Проверяем корректное создание игрока', () => {
    const playerParams = {
        name: "Gandalf",
        health: 70,
        power: 25,
      };
    const player2 = new Archer(playerParams)
    expect(player2).toBeDefined()
  })
})