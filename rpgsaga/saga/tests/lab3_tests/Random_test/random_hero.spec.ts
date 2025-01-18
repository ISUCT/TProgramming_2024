import { random_hero } from "../../../src/lab3/fun_random/random_hero";

test('random_hero should return a valid role', () => {
    const role = random_hero();
    expect(["Archer", "Mage", "Warrior"]).toContain(role);
});