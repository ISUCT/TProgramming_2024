import { Weapon } from "../../sagaCode/weapon";

describe('Weapon Class', () => {
  let weapon: Weapon;

  beforeEach(() => {
    weapon = new Weapon('Sword', 20);
  });

  test('Проверка параметров', () => {
    expect(weapon.type).toBe('Sword');
    expect(weapon.damageAmount).toBe(20);
  });

  test('Должно выдать ошибку: "Урон не может быть равен или ниже 0"', () => {
    expect(() => new Weapon('Sword', -5)).toThrow("Урон не может быть равен или ниже 0");
    expect(() => new Weapon('Sword', 0)).toThrow("Урон не может быть равен или ниже 0");
  });
});