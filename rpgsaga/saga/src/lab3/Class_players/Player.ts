import { Weapon } from "../Class_weapons/Weapon";
import { Hit } from "../Class_hit";
import { Ability } from "../Class_abilities/Ability";
import { activation_ability } from "../Class_abilities/activatio_ability";

export abstract class Player{
    private _name: String;
    private _role: String;
    private _health: number;
    private _damage: number;
    private _type_damage: String;
    private _physical_resistance: number;
    private _magic_resistance: number;
    private _crit_damage: number;
    private _stuuned_states: boolean = false;
    private _ability: Ability;
    // status_debuff: new class
    constructor(
        name: String,
        role: String,
        weapon: Weapon,
        health: number,
        physical_resistance: number,
        magic_resistance: number,
        crit_damage: number,
        ability: Ability
    ) {
        this._name = name;
        this._role = role;
        this._damage = weapon.damage;
        this._type_damage = weapon.type_damage
        this._health = health;
        this._physical_resistance = (physical_resistance + weapon.increase_phys_resist) * weapon.multiplier_phys_resist;
        this._magic_resistance = (magic_resistance + weapon.increase_magic_resist) * weapon.multiplier_magic_resist;
        this._crit_damage = crit_damage;
        this._ability = ability
    }

    public set health(hp: number) {
        this._health = hp;
    }

    public set stuuned_states(state: boolean) {
        this._stuuned_states = state;
    }

    public set physical_resistance(value: number) {
        this._physical_resistance = value;
    }   

    public set magic_resistance(value: number) {
        this._magic_resistance = value;
    }

    public get name(): String {
        return this._name;
    }

    public get role(): String {
        return this._role;
    }

    public get health(): number {
        return this._health;
    }

    public get damage(): number {
        return this._damage
    }

    public get type_damage(): String {
        return this._type_damage
    }

    public get stuuned_states(): boolean {
        return this._stuuned_states;
    }

    public get physical_resistance(): number {
        return this._physical_resistance;
    }

    public get magic_resistance(): number {
        return this._magic_resistance;
    }

    public get crit_damage(): number {
        return this._crit_damage;
    }

    public get ability(): Ability {
        return this._ability;
    }

    public attack(): Hit {
        let hit = new Hit(this._damage, this._type_damage, false)
        hit = activation_ability(this._ability, this, hit)
        return hit
    }

    public taking_damage(hit: Hit) {
        if (hit.control) {
            this._stuuned_states = true;
        }
        if (hit.type_damage == 'pure') {
            this._health -= hit.damage
        } else if (hit.type_damage == "phys") {
            this.health = this.health - (Math.floor(hit.damage * ((100 - this.physical_resistance) / 100))) ; 
        } else if (hit.type_damage == "magic"){
            this.health = this.health - (Math.floor(hit.damage * ((100 - this.magic_resistance) / 100)));  
        }
    }
}