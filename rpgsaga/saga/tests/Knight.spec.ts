import { Knight } from "../classes/Knight";

describe('Knight', () => {
  it('should use Revenge Strike ability and increase damage', () => {
    const knight = new Knight('Артур', 100, 20);
    knight.useAbility();
    expect(() => knight.takeDamage(10)).not.toThrow();
    expect(knight.getHealth()).toBe(90);  // Expected damage increase due to Revenge Strike
  });

  it('should take damage normally after Revenge Strike', () => {
    const knight = new Knight('Артур', 100, 20);
    knight.useAbility();
    knight.takeDamage(20);
    expect(knight.getHealth()).toBe(70);  // 20 + 30% additional damage
  });
});
