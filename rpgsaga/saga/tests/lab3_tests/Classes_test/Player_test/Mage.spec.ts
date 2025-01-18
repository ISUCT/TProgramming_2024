import { Mage } from "../../../../src/lab3/Clasees/Classes_players/Players/Mage";

test('mage should have correct properties', () => {
    const mage = new Mage("Test Mage", {} as any, 100);
    expect(mage.role).toBe("Mage");
});