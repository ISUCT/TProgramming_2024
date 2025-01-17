import { Burning } from "../../../../src/lab3/Clasees/Classes_debuff/Debuffs/Burning";

test('burning debuff should have correct properties', () => {
    const burning = new Burning();
    expect(burning.name_debuff).toBe("Горение");
    expect(burning.duration).toBe(3);
});