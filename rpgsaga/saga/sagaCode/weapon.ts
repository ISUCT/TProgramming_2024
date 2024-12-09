export class Weapon {
    private _type: string;
    private _damageAmount: number;


    constructor(type:string, damageAmount:number, damageType:string) {
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