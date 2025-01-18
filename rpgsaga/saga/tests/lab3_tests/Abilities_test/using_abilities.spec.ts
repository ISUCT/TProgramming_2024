import { Ability } from "../../../src/lab3/Clasees/Classes_abilities/Ability";
import { Elf_Bow } from "../../../src/lab3/Clasees/Classes_weapons/Weapons/Elf_Bow";
import { Player } from "../../../src/lab3/Clasees/Classes_players/Player";
import { Hit } from "../../../src/lab3/Clasees/Class_hit";
import { activation_ability } from "../../../src/lab3/Clasees/Classes_abilities/using_abilities";

test('activation_ability should apply correct ability', () => {
    const weapon = new Elf_Bow();
    const player = new Player("Test Player", "Archer", weapon, 100, 5, 5, {} as any);
    const hit = new Hit(100, "phys", false);
    const abilities = [new Ability(100, "Уселенный выстрел")];
    const newHit = activation_ability(abilities, player, hit);
    expect(newHit.damage).toBe(150);
});