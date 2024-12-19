import { Weapon } from "../Weapon";
import { Ability } from "../../Classes_abilities/Ability";
import { weapons_names } from "../../Utils/list_weapons";
import { damage_types } from "../../Utils/list_damage_types";
import { ability_names } from "../../Utils/list_abilities";
export class Paladin_Shield extends Weapon{
    constructor () {
        super(weapons_names.paladin_sheild, 10, damage_types.phys, 5, 2, 5, 2, new Ability(0, ability_names.empty));
    }
}