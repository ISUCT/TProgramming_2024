import { Player } from "../../Classes_players/Player";
import { Hit } from "../../Class_hit";
import { Burning } from "../../Classes_debuff/Debuffs/Burning";

export function activation_mage_ability(player: Player, hit: Hit): Hit {
    player.add_debuff(new Burning());
    return hit;
}