import { Archer } from "../classes/Archer";

describe('Archer', () => {
  it('should use Fire Arrows and increase damage', () => {
    const archer = new Archer('Эльдар', 100, 20);
    archer.useAbility();
    expect(() => archer.takeDamage(10)).not.toThrow();
    expect(archer.getHealth()).toBe(90);  // Expected damage increase due to Fire Arrows
  });

  it('should take normal damage after Fire Arrows ability', () => {
    const archer = new Archer('Эльдар', 100, 20);
    archer.useAbility();
    archer.takeDamage(20);
    expect(archer.getHealth()).toBe(70);  // Fire Arrows effect used, damage increased
  });
});
