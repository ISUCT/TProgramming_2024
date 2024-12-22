import { Player } from "../../Classes_players/Player";
import { Hit } from "../../Class_hit";
import { ability_names } from "../../Utils/list_abilities";

export function activation_archer_ability(player: Player, hit: Hit): Hit {
    hit.damage = hit.damage * 1.5;
    console.log(`${player.role} активирует способность ${ability_names.archer_ability}`)
    return hit;
}