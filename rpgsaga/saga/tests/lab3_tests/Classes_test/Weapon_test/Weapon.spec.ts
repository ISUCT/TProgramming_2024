import { Weapon } from "../../../../src/lab3/Clasees/Classes_weapons/Weapon";

test('weapon should have correct properties', () => {
    const weapon = new Weapon("Test Weapon", 100, "phys", 0, 1, 0, 1, {} as any);
    expect(weapon.name).toBe("Test Weapon");
    expect(weapon.damage).toBe(100);
});