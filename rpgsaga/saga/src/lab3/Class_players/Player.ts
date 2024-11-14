import { Weapon } from "../Weapon";

export abstract class Player{
    private _name: String;
    private _role: String;
    private _weapon: Weapon;
    private _health: number;
    private _stuuned_states: boolean = false;
    constructor(
        name: String,
        role: String,
        weapon: Weapon,
        health: number
    ) {
        this._name = name;
        this._role = role;
        this._weapon = weapon;
        this._health = health;
    }

    public set health(hp: number) {
        this._health = hp;
    }

    public set stuuned_states(state: boolean) {
        this._stuuned_states = state;
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
}