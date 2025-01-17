import { create_player } from "../../src/lab3/Utils/create_player";

test('create_player should return a valid player', () => {
    const player = create_player();
    expect(player).toBeDefined();
    expect(["Archer", "Mage", "Warrior"]).toContain(player.role);
});