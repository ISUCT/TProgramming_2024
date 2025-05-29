export class Weapon {
    private _type: string;
    private _damageAmount: number;


    constructor(type:string, damageAmount:number) {
        if (damageAmount <= 0) {
            throw new Error("Урон не может быть равен или ниже 0");
          }
        this._type = type;
        this._damageAmount = damageAmount;
        
        
    }

    public set damageAmount(number) {
        if (number > 0) {
          this._damageAmount = number;
        } else {
          throw new Error("Урон не может быть равен или ниже 0");
        }
    }

    public get type(): string {
        return this._type;
    }

    public get damageAmount(): number {
        return this._damageAmount;
    }
}