import { Player } from "../../../src/lab3/Clasees/Classes_players/Player";
import { Paladin_Shield } from "../../../src/lab3/Clasees/Classes_weapons/Weapons/Paladin_Shield";
import { Hit } from "../../../src/lab3/Clasees/Class_hit";
import { activation_warriro_ability } from "../../../src/lab3/Clasees/Classes_abilities/Abilities/Warrior_ability";

test('warrior ability should increase damage based on resistances', () => {
    const weapon = new Paladin_Shield()
    const player = new Player("Test Warrior", "Warrior", weapon, 100, 20, 20, {} as any);
    const hit = new Hit(100, "phys", false);
    const newHit = activation_warriro_ability(player, hit);
    expect(newHit.damage).toBeGreaterThan(100);
});