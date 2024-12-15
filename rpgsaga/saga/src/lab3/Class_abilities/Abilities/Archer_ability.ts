import { Ability } from "../Ability";
import { Player } from "../../Class_players/Player";
import { Hit } from "../../Class_hit";

export function activation_archer_ability(player: Player, hit: Hit): Hit {
    hit.damage = hit.damage * player.crit_damage
    return hit
}