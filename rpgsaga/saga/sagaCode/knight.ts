import { Player } from "./player";
import { Weapon } from "./weapon";

export class knight extends Player {
    private _healFlaska: number;
    constructor(name:string,health:number,mana:number,weapon:Weapon) {
        super(name, health, mana, weapon);
        this._healFlaska = 30; 
    }
    public get healFlaska() {
        return this._healFlaska;
      }

    }
