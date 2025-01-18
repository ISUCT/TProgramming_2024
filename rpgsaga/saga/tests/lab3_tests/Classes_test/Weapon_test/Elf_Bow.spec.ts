import { Elf_Bow } from "../../../../src/lab3/Clasees/Classes_weapons/Weapons/Elf_Bow";

test('elf bow should have correct properties', () => {
    const elfBow = new Elf_Bow();
    expect(elfBow.name).toBe("Elf`s bow");
    expect(elfBow.damage).toBe(20);
    expect(elfBow.type_damage).toBe('pure');
    expect(elfBow.increase_magic_resist).toBe(0);
    expect(elfBow.increase_phys_resist).toBe(0);
    expect(elfBow.multiplier_magic_resist).toBe(1);
    expect(elfBow.multiplier_phys_resist).toBe(1);
});