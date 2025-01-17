import { Player } from "../Player";
import { Weapon } from "../../Classes_weapons/Weapon";
import { Ability } from "../../Classes_abilities/Ability";
import { ability_names } from "../../../Enums/enum_abilities";
import { role_names } from "../../../Enums/enum_roles";

export class Archer extends Player{
    constructor(
        name: String,
        weapon: Weapon,
        health: number,
    ) {
        super(name, role_names.archer, weapon, health, 5, 5, new Ability(17, ability_names.archer_ability));
    }
}