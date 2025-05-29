import { Player } from '../../sagaCode/playerClass/player';
import { Weapon } from '../../sagaCode/weapon';
import { Effect } from '../../sagaCode/effectOfDamage/effect';
import { Archer } from '../../sagaCode/heroClasses/archer';

describe('Player Class', () => {
  let player: Player;
  let weapon: Weapon;
  let effect: Effect;

  beforeEach(() => {
    weapon = new Weapon('Bow', 15);
    effect = new Effect('Ледяная стрела', 10, 3, player);
    player = new Archer('TestArcher', 100, weapon, 1);
  });

  test('Проверка параметров', () => {
    expect(player.name).toBe('TestArcher');
    expect(player.health).toBe(100);
    expect(player.maxHealth).toBe(100);
    expect(player.weapon).toEqual(weapon);
    expect(player.statusEffect).toBe(1);
  });

  test('Проверка урона', () => {
    player.damaged(20);
    expect(player.health).toBe(80);
  });

  test('Проверка смерти персонажа и при хп < 0', () => {
    player.damaged(100);
    expect(player.health).toBe(0);
    expect(player.isAlive()).toBe(false);
  });

  test('Проверка метода атаки', () => {
    const enemy = new Archer('Enemy', 100, weapon, 1);
    const attackMessage = player.attack(enemy);
    expect(attackMessage).toContain('наносит урон');
    expect(enemy.health).toBe(85);
  });

  test('Проверка применения эффекта', () => {
    const applyEffectSpy = jest.spyOn(effect, 'applyEffect');
    player.activesEffect = effect;
    player.applyArrowEffect();
    expect(applyEffectSpy).toHaveBeenCalledWith(player);
  });
});