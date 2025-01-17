import { Player } from "../../../../src/lab3/Clasees/Classes_players/Player";

test('player should have correct properties', () => {
    const player = new Player("Test Player", "Archer", {} as any, 100, 5, 5, {} as any);
    expect(player.name).toBe("Test Player");
    expect(player.role).toBe("Archer");
});