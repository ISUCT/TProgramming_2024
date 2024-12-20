import { Abilities } from "../abilities/abilities";
import { Player } from "../playerClass/player";
import { Weapon } from "../weapon";

export class archer extends Player {
    protected ability: Abilities;
    constructor(name:string,health:number,mana:number,weapon:Weapon) {
        super(name, health, mana, weapon);
        this.addAbility({name: "Ледяные стрелы", damageAmount: 2, isAvialable: true, roundAmount: 3})
    }


}