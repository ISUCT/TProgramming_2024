import { Archer } from "../../../../src/lab3/Clasees/Classes_players/Players/Archer";

test('archer should have correct properties', () => {
    const archer = new Archer("Test Archer", {} as any, 100);
    expect(archer.role).toBe("Archer");
    expect(archer.health).toBe(100);
});