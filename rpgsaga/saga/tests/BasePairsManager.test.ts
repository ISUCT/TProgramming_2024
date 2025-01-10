import { BasePairsManager } from "../src/services";
import { Player, Knight, Archer, Mage } from "../src/services";

describe('test for BasePairsManager', () => {
  it('Проверяем перемешивание игроков в пары', () => {
    const manager = new BasePairsManager()

    const arrPlayer: Player[] = [new Knight(), new Archer(), new Mage(), new Archer()]

    const pairs = manager.createPairs(arrPlayer)
    const pairs2 = manager.createPairs(arrPlayer)

    expect(pairs).toBeDefined()
    expect(pairs2).toBeDefined()
    
    expect(pairs.flatMap((el) => el)).not.toEqual(arrPlayer)
    expect(pairs2).not.toEqual(pairs)
  })
})
