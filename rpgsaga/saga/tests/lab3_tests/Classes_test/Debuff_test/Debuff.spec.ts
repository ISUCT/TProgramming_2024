import { Debuff } from "../../../../src/lab3/Clasees/Classes_debuff/Debuff";

test('debuff should have correct properties', () => {
    const debuff = new Debuff("Test Debuff", 3, 10, "mag", false);
    expect(debuff.name_debuff).toBe("Test Debuff");
    expect(debuff.duration).toBe(3);
});