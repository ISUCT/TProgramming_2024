export class Piggy{
    private _name: string;
    private _age: number;
    private _sex: string;
    private _color: string;

    constructor(name: string, age: number, sex: string, color: string){
        this._name = name;
        this._age = age;
        this._sex = sex;
        this._color = color;
    }

    get name(): string{
        return this._name;
    }

    get age(): number{
        return this._age
    }

    get sex(): string{
        return this._sex
    }

    get color(): string{
        return this._color 
    }

    set name(name: string){
        if (name.length !== 0){
            this._name = name;
            return;
        } 
        throw new Error ('This name is not corret');
    }

    set age(age: number){
        if (age > 0 && age <= 20){
            this._age = age;
            return;
        }
        throw new Error ('Age is not correct');
    }

    set sex(sex: string){
        sex.toLowerCase()
        if (sex === 'female' || sex === 'male'){
            this._sex = sex;
            return;
        }
        throw new Error ('Sex is not correct');
    }

    set color(color: string){
        const colors: string[] = ["black", "pink", "white", "brown"];
        if (color in colors) {
            this._color = color;
            return;
        }
        throw new Error ('Color is not correct');
    }

    piggyMoves(): string {
        return(`${this.name} the ${this.color} pig runs and grunts across the field`);
    }

    luckyPiggy(): string {
        if (this.name === 'Nyusha' && this.color === 'pink') {
            return(`${this.name} the ${this.color} pig is lucky pig`);
        } else {
            return(`${this.name} the ${this.color} pig is unlucky pig`);
        }
    }
}