import { Player } from "../../Classes_players/Player";
import { Hit } from "../../Class_hit";

export function activation_staff_santa_ability(player: Player, hit: Hit): Hit {
    hit.control = true;
    return hit;
}