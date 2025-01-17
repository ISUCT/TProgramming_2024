import { Paladin_Shield } from "../../../../src/lab3/Clasees/Classes_weapons/Weapons/Paladin_Shield";

test('paladin shield should have correct properties', () => {
    const paladinShield = new Paladin_Shield();
    expect(paladinShield.name).toBe("Paladin`s shield");
    expect(paladinShield.damage).toBe(15);
});