import { Wepon_damage } from "./output_lab3";

export class Weapon{
    private _name: string;
    private _damage: number;
    constructor(
        name: string,
    ) {
        this._name = name;
        this._damage = Wepon_damage[name];
    }
    
    public get name(): String {
        return this._name
    }

    public get damage(): number {
        return this._damage
    }
}