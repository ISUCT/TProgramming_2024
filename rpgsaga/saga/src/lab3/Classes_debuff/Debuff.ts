import { Hit } from "../Class_hit";

export abstract class Debuff{
    private _total_duration: number;
    private _duration: number;
    private _damage: number;
    private _type_damage: String;
    private _stunning: boolean;
    constructor(
        total_duration: number,
        duration: number,
        damage: number,
        type_damage: String,
        stunning: boolean
    ) {
        this._total_duration = total_duration;
        this._duration = duration;
        this._damage = damage;
        this._type_damage = type_damage;
        this._stunning = stunning;
    }

    public set duration(value: number) {
        this._duration = value;
    }

    public get total_duration(): number {
        return this._total_duration;
    }

    public get duration(): number {
        return this._duration;
    }

    public get damage(): number {
        return this._damage
    }

    public get type_damage(): String {
        return this._type_damage
    }

    public activate_debuff(): Hit {
        const hit = new Hit(this._damage, this._type_damage, this._stunning);
        return hit;
    } 
}