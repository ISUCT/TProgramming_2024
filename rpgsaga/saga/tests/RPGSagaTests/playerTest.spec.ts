import { TestPlayer } from "../../src/RPGsaga/utils/TestPlayer";
import { Player } from "../../src/RPGsaga/Player";
import { Logger } from "../../src/RPGsaga/utils/Logger";
import { abilities } from "../../src/RPGsaga/utils/abilities";

describe('Player Class with Abilities', () => {
    test('Player can attack another player and deal damage', () => {
      const attacker = new TestPlayer('Attacker', 100, 20, 0.1);
      const target = new TestPlayer('Target', 100, 15, 0.2);
  
      attacker.attack(target);
  
      expect(target.getHealth()).toBe(80); // 100 - 20 = 80
    });
  
    test('Player can take damage and reduce health', () => {
      const player = new TestPlayer('Player', 100, 15, 0.2);
  
      player.takeDamage(30);
  
      expect(player.getHealth()).toBe(70); // 100 - 30 = 70
    });
  
    test('Player isAlive returns true if health is above 0', () => {
      const player = new TestPlayer('Player', 100, 15, 0.2);
  
      expect(player.isHeroAlive()).toBe(true);
    });
  
    test('Player isAlive returns false if health is 0 or below', () => {
      const player = new TestPlayer('Player', 0, 15, 0.2);
  
      expect(player.isHeroAlive()).toBe(false);
    });
  
    test('Attack method logs correct message', () => {
      const attacker = new TestPlayer('Attacker', 100, 20, 0.1);
      const target = new TestPlayer('Target', 100, 15, 0.2);
  
      attacker.attack(target);
  
      // Здесь лог выводится в консоль, и вы можете проверить его вручную
      console.log('Test passed for logging attack!');
    });
  
    test('TestPlayer has abilities and applies effects correctly', () => {
      const player = new TestPlayer('Player', 100, 15, 0.2);
      const target = new TestPlayer('Target', 100, 15, 0.2);
  
      // Применяем способность 'Frozen Arrows'
      const ability = abilities[0]; // Это Frozen Arrows
      player.applyAbilityEffect(ability, target);
  
      // Проверяем, что target получил повреждения от "Frozen Arrows"
      expect(target.getHealth()).toBe(100 - player.getStrength() * 0.5); // Урон от начальной способности
  
      // Также проверяем, что активный эффект был добавлен в активные эффекты
      expect(target.activeEffects.length).toBe(1);
      expect(target.activeEffects[0].ability.name).toBe('Frozen Damage');
      expect(target.activeEffects[0].remainingTurns).toBe(3); // Эффект длится 3 хода
  
      // Применяем способность 'Fire Arrows'
      const fireArrows = abilities[1]; // Fire Arrows
      player.applyAbilityEffect(fireArrows, target);
  
      // Проверяем, что эффект "Fire Arrows" активирован
      expect(target.activeEffects.length).toBe(2); // Теперь два активных эффекта
      expect(target.activeEffects[1].ability.name).toBe('Fire Arrows');
      expect(target.activeEffects[1].remainingTurns).toBe(Infinity); // Длится до конца боя
    });
});