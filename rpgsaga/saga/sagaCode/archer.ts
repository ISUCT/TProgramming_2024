import { Player } from "./player";
import { Weapon } from "./weapon";

export class archer extends Player {
    private _arrowType: string;
    constructor(name:string,health:number,mana:number,weapon:Weapon) {
        super(name, health, mana, weapon);
    }

    public get arrowType() {
        return this._arrowType;
    }
}