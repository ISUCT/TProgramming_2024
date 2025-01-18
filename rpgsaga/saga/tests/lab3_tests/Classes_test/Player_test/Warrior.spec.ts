import { Warrior } from "../../../../src/lab3/Clasees/Classes_players/Players/Warrior";

test('warrior should have correct properties', () => {
    const warrior = new Warrior("Test Warrior", {} as any, 100);
    expect(warrior.role).toBe("Warrior");
});