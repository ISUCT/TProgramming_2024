import { Mage } from '../../src/classes/laba3Mage';
import { Player } from '../../src/laba3CreatingPlayer';
import { Logs } from '../../src/laba3Logs';

jest.mock('./laba3Logs');

describe('Mage Short Tests', () => {
  let mage: Mage;
  let target: Player;
  const mockLogs = new Logs() as jest.Mocked<Logs>;

  beforeEach(() => {
    mage = new Mage('Погорелый', 100, 20);
    target = new Player('Enemy', 100, 20);
  });

  it('should correctly initialize with default values', () => {
    expect(mage.getHealth()).toBeGreaterThanOrEqual(50);
    expect(mage.getStrength()).toBeGreaterThanOrEqual(10);
    expect(mage.getAbilities()).toEqual(['Оглушение', 'Лечение']);
  });

  it('should stun target and attack when using Оглушение', () => {
    mage.setSelectedAbility('Оглушение');
    mage.useAbility(target, mockLogs);
    
    expect(target.isCurrentlyStunned()).toBe(true);
    expect(target.getHealth()).toBeLessThan(100); // Проверка что атака прошла
    expect(mockLogs.logAbility).toHaveBeenCalledWith(
      mage, 'Оглушение', target, 'будет оглушен на 2 хода'
    );
  });

  it('should heal itself when using Лечение', () => {
    mage.setHealth(80);
    mage.setSelectedAbility('Лечение');
    mage.useAbility(target, mockLogs);
    
    expect(mage.getHealth()).toBe(100);
    expect(mockLogs.logHeal).toHaveBeenCalledWith(mage, 20);
  });

  it('should throw error when setting invalid health', () => {
    expect(() => mage.setHealth(200)).toThrow('Health for Mage must be between 50 and 150');
  });
});