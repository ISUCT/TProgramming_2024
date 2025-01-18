import { Player } from "../../Classes_players/Player";
import { Hit } from "../../Class_hit";
import { Burning } from "../../Classes_debuff/Debuffs/Burning";
import { ability_names } from "../../../Enums/enum_abilities";

export function activation_mage_ability(player: Player, hit: Hit): Hit {
    hit.debuff = new Burning();
    console.log(`${player.role} активирует способность ${ability_names.mage_ability}`)
    return hit;
}