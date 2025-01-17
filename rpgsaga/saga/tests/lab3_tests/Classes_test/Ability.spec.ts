import { Ability } from "../../../src/lab3/Clasees/Classes_abilities/Ability";

test('ability should have correct properties', () => {
    const ability = new Ability(20, "Test Ability");
    expect(ability.change_ability).toBe(20);
    expect(ability.name_ability).toBe("Test Ability");
});