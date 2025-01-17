import { Knight } from '../../sagaCode/heroClasses/knight'; 
import { Weapon } from '../../sagaCode/weapon'; 

describe('Knight Class', () => {
  let knight: Knight;
  let weapon: Weapon;

  beforeEach(() => {
    weapon = new Weapon('Sword', 20);
    knight = new Knight('TestKnight', 120, weapon, 1);
  });

  test('Проверка крит урона', () => {
    const enemy = new Knight('Enemy', 100, weapon, 1);
    jest.spyOn(Math, 'random').mockReturnValue(0.05); 
    knight.attack(enemy);
    expect(enemy.health).toBeLessThan(100);
  });

  test('Проверка способности лечения', () => {
    knight.health = 50;
    knight.useHealEffect();
    expect(knight.health).toBe(65);
    expect(knight.statusEffect).toBe(0);
  });
});