import { Player } from "./Player";
import { Weapon } from "../Class_weapon/Weapon";

export class Mage extends Player{
    constructor(
        name: String,
        weapon: Weapon,
        health: number,
    ) {
        super(name, "Mage", weapon, health)
    }
}