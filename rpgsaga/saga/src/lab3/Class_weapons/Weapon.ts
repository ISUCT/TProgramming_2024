import { Wepon_damage } from "../output_lab3";
import { Player } from "../Class_players/Player";

export class Weapon{
    private _name: string;
    private _damage: number;
    private _type_damage: String;
    private _increase_phys_resist: number;
    private _multiplier_phys_resist: number;
    private _increase_magic_resist: number;
    private _multiplier_magic_resist: number;
    constructor(
        name: string,
        damage: number,
        type_damage: String,
        increase_phys_resist: number,
        multiplier_phys_resist: number,
        increase_magic_resist: number,
        multiplier_magic_resist: number
    ) {
        this._name = name;
        this._damage = damage;
        this._type_damage = type_damage;
        this._increase_phys_resist = increase_phys_resist;
        this._multiplier_phys_resist = multiplier_phys_resist;
        this._increase_magic_resist = increase_magic_resist;
        this._multiplier_magic_resist = multiplier_magic_resist;
    }
    
    public get name(): String {
        return this._name;
    }

    public get damage(): number {
        return this._damage;
    }

    public get type_damage(): String {
        return this._type_damage;
    }

    public get increase_phys_resist(): number {
        return this._increase_phys_resist;
    }

    public get multiplier_phys_resist(): number {
        return this._multiplier_phys_resist;
    }

    public get increase_magic_resist(): number {
        return this._increase_magic_resist;
    }

    public get multiplier_magic_resist(): number {
        return this._multiplier_magic_resist;
    }
}