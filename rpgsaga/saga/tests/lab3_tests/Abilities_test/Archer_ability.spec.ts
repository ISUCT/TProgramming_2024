import { Player } from "../../../src/lab3/Clasees/Classes_players/Player";
import { Elf_Bow } from "../../../src/lab3/Clasees/Classes_weapons/Weapons/Elf_Bow";
import { Hit } from "../../../src/lab3/Clasees/Class_hit";
import { activation_archer_ability } from "../../../src/lab3/Clasees/Classes_abilities/Abilities/Archer_ability";

test('archer ability should increase damage by 50%', () => {
    const weapon = new Elf_Bow() 
    const player = new Player("Test Archer", "Archer", weapon, 100, 5, 5, {} as any);
    const hit = new Hit(100, "phys", false);
    const newHit = activation_archer_ability(player, hit);
    expect(newHit.damage).toBe(150);
});