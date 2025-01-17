import { Weapon } from "../Weapon";
import { Ability } from "../../Classes_abilities/Ability";
import { weapons_names } from "../../../Utils/list_weapons";
import { damage_types } from "../../../Utils/enum_damage_types";
import { ability_names } from "../../../Utils/enum_abilities";
export class Staff_Santa_Claus extends Weapon{
    constructor () {
        super(weapons_names.staff_santa, 20, damage_types.mag, 0, 1, 0, 1, new Ability(20, ability_names.staff_santa));
    }
}