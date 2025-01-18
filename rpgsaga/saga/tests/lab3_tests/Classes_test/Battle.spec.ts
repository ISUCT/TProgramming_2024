import { battle } from "../../../src/lab3/Clasees/Classes_Battle";

test('battle should start with correct number of players', () => {
    const battleInstance = new battle(12);
    expect(battleInstance).toBeInstanceOf(battle);
});