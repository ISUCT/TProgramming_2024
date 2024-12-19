import { Weapon } from "../Weapon";
import { Ability } from "../../Classes_abilities/Ability";
import { weapons_names } from "../../Utils/list_weapons";
import { damage_types } from "../../Utils/list_damage_types";
import { ability_names } from "../../Utils/list_abilities";
export class Elf_Bow extends Weapon{
    constructor () {
        super(weapons_names.elf_bow, 40, damage_types.pure, 0, 1, 0, 1, new Ability(0, ability_names.empty));
    }
}