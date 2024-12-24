import { Effect } from "./effectOfDamage/effect";


export class Weapon {
    private _type: string;
    private _damageAmount: number;
    private _effect: Effect;


    constructor(type:string, damageAmount:number) {
        this._type = type;
        this._damageAmount = damageAmount;
    }

    private set damageAmount(number) {
        if (number > 0) {
          this._damageAmount = number;
        } else {
          throw new Error("Damage amount can't be negative or zero");
        }
    }

    public get type(): string {
        return this._type;
    }

    public get damageAmount(): number {
        return this._damageAmount;
    }
}