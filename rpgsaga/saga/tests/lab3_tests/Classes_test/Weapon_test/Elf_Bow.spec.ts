import { Elf_Bow } from "../../../../src/lab3/Clasees/Classes_weapons/Weapons/Elf_Bow";

test('elf bow should have correct properties', () => {
    const elfBow = new Elf_Bow();
    expect(elfBow.name).toBe("Elf`s bow");
    expect(elfBow.damage).toBe(20);
});