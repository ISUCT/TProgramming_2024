export class Dish {
    private _price: number;
    private _calorie: number;
    private _name: string;

    constructor(price: number, calorie: number, name: string) {
        this._price = price;
        this._calorie = calorie;
        this._name = name;
    }

    public set price(price: number) {
        if (price > 0) {
            this._price = price;
        } else {
            throw new Error('Цена должна быть больше 0 рублей');
        }
    }

    public set calorie(calorie: number) {
        this._calorie = calorie;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get price() {
        return this._price;
    }

    public get calorie() {
        return this._calorie;
    }

    public get name() {
        return this._name;
    }
}
