import { Ability } from "./Ability";
import { Player } from "../Class_players/Player";
import { Hit } from "../Class_hit";
import { check_operation } from "../Utils/check_operation";
import { activation_archer_ability } from "./Abilities/Archer_ability";

export function activation_ability(ability: Ability, player: Player, hit: Hit) {
    if (check_operation(ability.change_ability)) {
        if (ability.owner_ability == 'Archer') {
            return activation_archer_ability(player, hit);
        }
    } else {
        return hit
    }

}