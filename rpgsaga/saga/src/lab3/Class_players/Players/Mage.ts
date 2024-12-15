import { Player } from "../Player";
import { Weapon } from "../../Class_weapons/Weapon";
import { Ability } from "../../Class_abilities/Ability";

export class Mage extends Player{
    constructor(
        name: String,
        weapon: Weapon,
        health: number,
    ) {
        super(name, 'Archer', weapon, health, 5, 5, 50, new Ability(17, 'Archer'));
    }
}