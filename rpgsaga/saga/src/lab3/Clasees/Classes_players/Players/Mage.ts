import { Player } from "../Player";
import { Weapon } from "../../Classes_weapons/Weapon";
import { Ability } from "../../Classes_abilities/Ability";
import { ability_names } from "../../../Utils/enum_abilities";
import { role_names } from "../../../Utils/list_roles";

export class Mage extends Player{
    constructor(
        name: String,
        weapon: Weapon,
        health: number,
    ) {
        super(name, role_names.mage, weapon, health, 10, 10, new Ability(30, ability_names.mage_ability));
    }
}