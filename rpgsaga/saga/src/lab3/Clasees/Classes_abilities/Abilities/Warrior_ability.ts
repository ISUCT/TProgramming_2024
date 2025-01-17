import { Player } from "../../Classes_players/Player";
import { Hit } from "../../Class_hit";
import { ability_names } from "../../../Utils/enum_abilities";

export function activation_warriro_ability(player: Player, hit: Hit): Hit {
    hit.damage = hit.damage + Math.floor((player.physical_resistance + player.magic_resistance) * 0.5);
    console.log(`${player.role} активирует способность ${ability_names.warrior_ability}`)
    return hit;
}