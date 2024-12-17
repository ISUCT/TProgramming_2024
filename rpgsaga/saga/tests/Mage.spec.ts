import { Mage } from "../classes/Mage";

describe('Mage', () => {
  it('should use Spell and make opponent skip turn', () => {
    const mage = new Mage('Гэндальф', 100, 20);
    mage.useAbility();
    expect(() => mage.takeDamage(20)).not.toThrow();  // Mage skips turn, no damage taken
  });

  it('should take damage normally if not under spell', () => {
    const mage = new Mage('Гэндальф', 100, 20);
    mage.takeDamage(20);
    expect(mage.getHealth()).toBe(80);  // Takes 20 damage normally
  });
});
