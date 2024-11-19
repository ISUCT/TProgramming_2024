import { Player } from "./Player";
import { Weapon } from "../Class_weapon/Weapon";
import { ability_activation } from "../Utils/ability_activation";
import { Hit } from "../Class_hit";
import { Paladin_Shield } from "../Class_weapon/Classes/Paladin_Shield";
import { Elf_Bow } from "../Class_weapon/Classes/Elf_Bow";

export class Warrior extends Player{
    private _chance_ability: number = 20;
    constructor(
        name: String,
        weapon: Weapon,
        health: number,
    ){
        super(name, "Warroir", weapon, health, 20, 20);
        this.weapon.update_states(this);
    }

    public attack(): Hit {
        const hit = new Hit(this.weapon.damage, 'p', ability_activation(20))
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
            this.health = this.health - (Math.floor(hit.damage * ((100 - this.physical_resistance) / 100))) ; 
        } else if (hit.type_damage == "m"){
            this.health = this.health - (Math.floor(hit.damage * ((100 - this.magic_resistance) / 100)));  
        }
    }
}