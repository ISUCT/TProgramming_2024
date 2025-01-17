import { Player } from "../Player";
import { Weapon } from "../../Classes_weapons/Weapon";
import { Ability } from "../../Classes_abilities/Ability";
import { ability_names } from "../../../Utils/enum_abilities";
import { role_names } from "../../../Utils/list_roles";

export class Warrior extends Player{
    constructor(
        name: String,
        weapon: Weapon,
        health: number,
    ){ 
        super(name, role_names.warrior, weapon, health, 20, 20, new Ability(20, ability_names.warrior_ability));
    }
}