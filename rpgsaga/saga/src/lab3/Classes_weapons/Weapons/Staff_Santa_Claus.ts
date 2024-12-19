import { Weapon } from "../Weapon";
import { Ability } from "../../Classes_abilities/Ability";
import { weapons_names } from "../../Utils/list_weapons";
import { damage_types } from "../../Utils/list_damage_types";
import { ability_names } from "../../Utils/list_abilities";
export class Staff_Santa_Claus extends Weapon{
    constructor () {
        super(weapons_names.staff_santa, 10, damage_types.mag, 5, 2, 5, 2, new Ability(20, ability_names.staff_santa));
    }
}