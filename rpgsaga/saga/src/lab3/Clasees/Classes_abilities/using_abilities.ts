import { Ability } from "./Ability";
import { Player } from "../Classes_players/Player";
import { Hit } from "../Class_hit";
import { check_operation } from "../../Utils/check_operation";
import { activation_archer_ability } from "./Abilities/Archer_ability";
import { activation_mage_ability } from "./Abilities/Mage_ability";
import { activation_staff_santa_ability } from "./Abilities/Staff_Santa_ability";
import { activation_warriro_ability } from "./Abilities/Warrior_ability";
import { ability_names } from "../../Utils/enum_abilities";

export function activation_ability(abilities: (Ability)[], player: Player, hit: Hit) {
    for (let ability of abilities) {
        if (check_operation(ability.change_ability)) {
            if (ability.name_ability == ability_names.archer_ability) {
                hit = activation_archer_ability(player, hit);
            } else if (ability.name_ability == ability_names.warrior_ability) {
                hit = activation_warriro_ability(player, hit);
            } else if (ability.name_ability == ability_names.mage_ability) {
                hit = activation_mage_ability(player, hit);
            } else if (ability.name_ability == ability_names.staff_santa) {
                hit = activation_staff_santa_ability(player, hit);
            }
        }
    }
    return hit;
}