import { Weapon } from "../Class_weapon/Weapon";
import { Hit } from "../Class_hit";

export abstract class Player{
    private _name: String;
    private _role: String;
    private _weapon: Weapon;
    private _health: number;
    private _stuuned_states: boolean = false;
    private _physical_resistance: number;
    private _magic_resistance: number;
    private _ctit_chance: number;
    private _crit_damage: number;
    constructor(
        name: String,
        role: String,
        weapon: Weapon,
        health: number,
        physical_resistance: number,
        magic_resistance: number
    ) {
        this._name = name;
        this._role = role;
        this._weapon = weapon;
        this._health = health;
        this._physical_resistance = physical_resistance;
        this._magic_resistance = magic_resistance;
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

    public get weapon(): Weapon {
        return this._weapon;
    }

    public get health(): number {
        return this._health;
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
    
    public get crit_chance(): number {
        return this._ctit_chance;
    }

    public get crit_damage(): number {
        return this._crit_damage;
    }

    public attack(): Hit {

        const hit = new Hit(this.weapon.damage, this.weapon.type_damage, )
    }
}