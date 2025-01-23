import { PlayerFactory } from "../../src/RPGsaga/PlayerFactory";
import { Player } from "../../src/RPGsaga/Player";
import { Archer } from "../../src/RPGsaga/Archer";
import { Knight } from "../../src/RPGsaga/Knight";
import { Mage } from "../../src/RPGsaga/Mage";

describe('PlayerFactory', () => {
  test('createRandomPlayer should return a Player instance', () => {
    const player = PlayerFactory.createRandomPlayer();
    expect(player).toBeInstanceOf(Player);
  });

  test('createRandomPlayer should return a valid subclass of Player', () => {
    const player = PlayerFactory.createRandomPlayer();
    expect(player instanceof Archer || player instanceof Knight || player instanceof Mage).toBe(true);
  });

  test('createRandomPlayer should return a random subclass (Archer, Knight, or Mage)', () => {
    const results = new Set();
    for (let i = 0; i < 100; i++) {
      const player = PlayerFactory.createRandomPlayer();
      results.add(player.getClass());
    }

    // Проверяем, что все классы были сгенерированы
    expect(results).toEqual(new Set(['Archer', 'Knight', 'Mage']));
  });

  test('createRandomArcher should return an Archer instance', () => {
    const archer = PlayerFactory['createRandomArcher'](); // Вызывается метод createRandomKnight из объекта PlayerFactory
    expect(archer).toBeInstanceOf(Archer);
    expect(archer.getClass()).toBe('Archer');
  });

  test('createRandomKnight should return a Knight instance', () => {
    const knight = PlayerFactory['createRandomKnight'](); 
    expect(knight).toBeInstanceOf(Knight);
    expect(knight.getClass()).toBe('Knight');
  });

  test('createRandomMage should return a Mage instance', () => {
    const mage = PlayerFactory['createRandomMage'](); 
    expect(mage).toBeInstanceOf(Mage);
    expect(mage.getClass()).toBe('Mage');
  });

  test('Created player has valid attributes', () => {
    const player = PlayerFactory.createRandomPlayer();

    expect(player.getName()).toBeDefined();
    expect(player.getHealth()).toBeGreaterThan(0);
    expect(player.getStrength()).toBeGreaterThan(0);
    expect(player.getSpeed()).toBeGreaterThan(0);
  });
});
