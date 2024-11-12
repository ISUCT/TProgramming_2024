import { DamageTypes } from "./enums";
import { Player } from "./player";
import { Weapon } from "./weapon";

export class Mage extends Player {
    private _maxMana: number;
    private _currentMana: number;
    constructor(name:string, health: number, weapon: Weapon, maxMana: number){
        super(name, health, weapon)
        this.maxMana = maxMana;
        this._currentMana = maxMana;
    }
    public get curMana() {
        return this.curMana;
    }
    private set maxMana(value){
        if(value > 0){
            this._maxMana = value;
        }
    }
    public attacked(attackWeapon: Weapon): void {
        switch (attackWeapon.damageType) {
            case DamageTypes.crushing:
                this.health = this.health - (attackWeapon.damage * 1.2)
                break;
            case DamageTypes.cutting:
                this.health = this.health - (attackWeapon.damage * 1.2)
                break;
            case DamageTypes.stabbing:
                this.health = this.health - (attackWeapon.damage * 1.2)
                break;    
            case DamageTypes.magic:
                this.health = this.health - (attackWeapon.damage * 0.5)
                break;
        }
        if (this.health <= 0){
               this.isAlive = false
        }
    }
}