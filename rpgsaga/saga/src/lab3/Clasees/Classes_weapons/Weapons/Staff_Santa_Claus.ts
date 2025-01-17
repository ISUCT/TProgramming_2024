import { Weapon } from "../Weapon";
import { Ability } from "../../Classes_abilities/Ability";
import { weapons_names } from "../../../Enums/enum_weapons";
import { damage_types } from "../../../Enums/enum_damage_types";
import { ability_names } from "../../../Enums/enum_abilities";
export class Staff_Santa_Claus extends Weapon{
    constructor () {
        super(weapons_names.staff_santa, 25, damage_types.mag, 0, 1, 0, 1, new Ability(20, ability_names.staff_santa));
    }
}