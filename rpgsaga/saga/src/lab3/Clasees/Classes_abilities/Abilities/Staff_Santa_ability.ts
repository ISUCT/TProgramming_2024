import { Player } from "../../Classes_players/Player";
import { Hit } from "../../Class_hit";
import { ability_names } from "../../../Utils/enum_abilities";

export function activation_staff_santa_ability(player: Player, hit: Hit): Hit {
    hit.control = true;
    console.log(`${player.role} активирует способность ${ability_names.staff_santa}`)
    return hit;
}