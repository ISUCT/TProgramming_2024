import { Player } from "../playerClass/player";
import { Weapon } from "../weapon";

export class knight extends Player {
    private _healFlaska: number;
    constructor(name:string,health:number,mana:number,weapon:Weapon) {
        super(name, health, mana, weapon);
        this._healFlaska = 30; 
    }
    public get healFlaska() {
        return this._healFlaska;
      }

    public attack(enemy: Player): string {
        if (this.isAlive) {
            enemy.damaged(this.weapon.damageAmount);
            return `${enemy.name} получил ${this.weapon.damageAmount} урона от ${this.name}`;
        }
    }
    }
