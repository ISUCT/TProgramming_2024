import { Player } from "../Player";
import { Weapon } from "../../Class_weapons/Weapon";
import { ability_activation } from "../../Utils/check_operation";
import { Hit } from "../../Class_hit";

export class Archer extends Player{

    constructor(
        name: String,
        weapon: Weapon,
        health: number,
    ){
        super(name, "Archer", weapon, health, 10, 0)
    }

    public attack(): Hit {
        const hit = new Hit(this.weapon.damage, 'p', false);
        if (ability_activation(50) == true) {
            hit.damage = Math.floor(hit.damage * 1.5);
        }
        return hit;
    }

    public taking_damage(hit: Hit) {
        if (hit.control == true) {
            this.stuuned_states = true;
        }
        if (hit.type_damage == "p") {
            this.health = this.health - (Math.floor(hit.damage * ((100 - this.physical_resistance) / 100))) ; 
        } else if (hit.type_damage == "m"){
            this.health = this.health - (Math.floor(hit.damage * ((100 - this.magic_resistance) / 100)));  
        }
    }
}