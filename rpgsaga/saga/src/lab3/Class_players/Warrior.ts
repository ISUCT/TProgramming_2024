import { Player } from "./Player";
import { Weapon } from "../Weapon";
import { ability_activation } from "../Utils/ability_activation";
import { Hit } from "./Class_hit";

export class Warrior extends Player{
    private _physical_resistance: number;
    constructor(
        name: String,
        weapon: Weapon,
        health: number,
        armor: number
    ) {
        super(name, "Warroir", weapon, health)
        this._physical_resistance = armor;
    }

    public get physical_resistance(): number {
        return this._physical_resistance;
    }

    public attack(): Hit {
        const hit = new Hit(this.weapon.damage, 'p', false)
        if (ability_activation(17) == true) {
            hit.damage = Math.floor(hit.damage * 1.3);
        }
        return hit;
    }

    public taking_damage(hit: Hit) {
        if (hit.control == true) {
            this.stuuned_states = true;
        }
        if (hit.type_damage == "p") {
            this.health = this.health - (Math.floor(hit.damage * ((100 - this._physical_resistance) / 100))) ; 
        } else if (hit.type_damage == "m"){
            this.health = this.health - hit.damage;  
        }
    }
}