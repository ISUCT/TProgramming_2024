import { random_weapon } from "../../../src/lab3/fun_random/random_weapon";

test('random_weapon should return a valid weapon name', () => {
    const weapon = random_weapon();
    expect(["Elf`s bow", "Paladin`s shield", "Santa Claus`s staff"]).toContain(weapon);
});