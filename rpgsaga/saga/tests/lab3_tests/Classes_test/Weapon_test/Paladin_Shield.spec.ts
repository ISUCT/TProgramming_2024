import { Paladin_Shield } from "../../../../src/lab3/Clasees/Classes_weapons/Weapons/Paladin_Shield";

test('paladin shield should have correct properties', () => {
    const paladinShield = new Paladin_Shield();
    expect(paladinShield.name).toBe("Paladin`s shield");
    expect(paladinShield.damage).toBe(15);
    expect(paladinShield.type_damage).toBe('physical');
    expect(paladinShield.increase_magic_resist).toBe(5);
    expect(paladinShield.increase_phys_resist).toBe(5);
    expect(paladinShield.multiplier_magic_resist).toBe(2);
    expect(paladinShield.multiplier_phys_resist).toBe(2);
});