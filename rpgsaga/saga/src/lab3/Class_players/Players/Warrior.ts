import { Player } from "../Player";
import { Weapon } from "../../Class_weapons/Weapon";
import { Ability } from "../../Class_abilities/Ability";

export class Warrior extends Player{
    private _chance_ability: number = 20;
    constructor(
        name: String,
        weapon: Weapon,
        health: number,
    ){
        super(name, 'Warrior', weapon, health, 20, 20, 1, new Ability(17, 'Warror'));
    }
}