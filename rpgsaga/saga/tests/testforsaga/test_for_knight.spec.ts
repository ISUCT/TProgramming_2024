import { Knight } from '../../src/classes/laba3Knight';
import { Player } from '../../src/laba3CreatingPlayer';
import { Logs } from '../../src/laba3Logs';

jest.mock('./laba3Logs');

describe('Knight', () => {
  let knight: Knight;
  let target: Player;
  let mockLogs: jest.Mocked<Logs>;

  beforeEach(() => {
    mockLogs = new Logs() as jest.Mocked<Logs>;
    knight = new Knight('Олегадруг', 200, 30);
    target = new Player('Enemy', 200, 30);
  });

  it('should initialize with valid parameters', () => {
    expect(knight.getHealth()).toBeGreaterThanOrEqual(80);
    expect(knight.getHealth()).toBeLessThanOrEqual(200);
    expect(knight.getStrength()).toBeGreaterThanOrEqual(20);
    expect(knight.getStrength()).toBeLessThanOrEqual(100);
    expect(knight.getAbilities()).toEqual(['Короночка']);
  });

  describe('Ability Usage', () => {
    it('should deal 1.5x damage with Короночка', () => {
      knight.setStrength(40);
      knight.setSelectedAbility('Короночка');
      
      const initialHealth = target.getHealth();
      knight.useAbility(target, mockLogs);
      
      const expectedDamage = 40 * 1.5;
      expect(target.getHealth()).toBe(initialHealth - expectedDamage);
      expect(mockLogs.logAbility).toHaveBeenCalledWith(
        knight, 
        'Короночка', 
        target, 
        `который получает ${expectedDamage} урона`
      );
    });

    it('should prevent ability reuse without reset', () => {
      knight.setSelectedAbility('Короночка');
      knight.useAbility(target, mockLogs);
      const afterFirstUse = target.getHealth();
      
      // Попытка повторного использования
      knight.useAbility(target, mockLogs);
      expect(target.getHealth()).toBe(afterFirstUse); // Здоровье не изменилось
    });
  });

  describe('Stat Validation', () => {
    it('should throw error for invalid strength', () => {
      expect(() => knight.setStrength(19)).toThrow('Strength for Knight must be between 20 and 100');
      expect(() => knight.setStrength(101)).toThrow('Strength for Knight must be between 20 and 100');
    });

    it('should throw error for invalid health', () => {
      expect(() => knight.setHealth(79)).toThrow('Health for Knight must be between 80 and 200');
      expect(() => knight.setHealth(201)).toThrow('Health for Knight must be between 80 and 200');
    });
  });

  describe('Ability Reset', () => {
    it('should reset ability cooldown', () => {
      knight.setSelectedAbility('Короночка');
      knight.useAbility(target, mockLogs);
      knight.resetAbilityUsed();
      
      const healthAfterFirstHit = target.getHealth();
      knight.useAbility(target, mockLogs);
      
      expect(target.getHealth()).toBeLessThan(healthAfterFirstHit);
    });
  });

  it('should clear selected ability after use', () => {
    knight.setSelectedAbility('Короночка');
    knight.useAbility(target, mockLogs);
    expect(knight.getSelectedAbility()).toBeNull();
  });
});