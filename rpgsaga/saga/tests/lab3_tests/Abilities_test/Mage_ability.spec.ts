import { Player } from "../../../src/lab3/Clasees/Classes_players/Player";
import { Hit } from "../../../src/lab3/Clasees/Class_hit";
import { activation_mage_ability } from "../../../src/lab3/Clasees/Classes_abilities/Abilities/Mage_ability";

test('mage ability should apply burning debuff', () => {
    const player = new Player("Test Mage", "Mage", {} as any, 100, 10, 10, {} as any);
    const hit = new Hit(100, "mag", false);
    const newHit = activation_mage_ability(player, hit);
    expect(newHit.debuff).toBeDefined();
});