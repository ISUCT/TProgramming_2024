import { Player } from "./Player";
import { Weapon } from "../Weapon";
import { ability_activation } from "../Utils/ability_activation";
import { Hit } from "./Class_hit";

export class Archer extends Player{
    private _magic_resistance: number;
    constructor(
        name: String,
        weapon: Weapon,
        health: number,
        magic_armor: number
    ) {
        super(name, "Archer", weapon, health)
        this._magic_resistance = magic_armor;
    }

    public get magic_resistance(): number {
        return this._magic_resistance;
    }

    public attack(): Hit {
        const hit = new Hit(this.weapon.damage, 'p', ability_activation(60));
        return hit;
    }

    public taking_damage(hit: Hit) {
        if (hit.control == true) {
            this.stuuned_states = true;
        }
        if (hit.type_damage == "m") {
            this.health = this.health - (Math.floor(hit.damage * ((100 - this._magic_resistance) / 100))) ; 
        } else if (hit.type_damage == "p"){
            this.health = this.health - hit.damage;  
        }
    }
}