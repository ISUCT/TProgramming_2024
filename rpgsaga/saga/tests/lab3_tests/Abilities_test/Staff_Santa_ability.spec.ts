import { Player } from "../../../src/lab3/Clasees/Classes_players/Player";
import { Hit } from "../../../src/lab3/Clasees/Class_hit";
import { activation_staff_santa_ability } from "../../../src/lab3/Clasees/Classes_abilities/Abilities/Staff_Santa_ability";

test('staff santa ability should apply control effect', () => {
    const player = new Player("Test Santa", "Santa", {} as any, 100, 0, 0, {} as any);
    const hit = new Hit(100, "mag", false);
    const newHit = activation_staff_santa_ability(player, hit);
    expect(newHit.control).toBe(true);
});