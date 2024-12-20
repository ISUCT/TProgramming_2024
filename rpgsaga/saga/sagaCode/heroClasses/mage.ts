import { Player } from "../playerClass/player";
import { Weapon } from "../weapon";

export class mage extends Player {
    constructor(name:string,health:number,mana:number,weapon:Weapon) {
        super(name, health, mana, weapon);
    }
}