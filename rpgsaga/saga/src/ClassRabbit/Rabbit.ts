export class Rabbit {
    private _age: number;
    private _name: string;
    private _color: string;

    constructor(age: number, name: string, color: string){
        console.log("Constructor for adding new Rabbit:");
        this._age = age;
        this._name = name;
        this._color = color;
    }

    setAge(age: number){
        if (age >=0){
            this._age = age;
            return;
        }
        throw new Error('age cant be below zero');
    }

    getAge(): number {
        return this._age;
    }

    SetColor(color: string){
        if (color != "") {
            this._color = color;
            return;
        }
        throw new Error('string \"color\" cant be empty');
    }

    GetColor(): string{
        return this._color;
    }

    SetName(name: string){
        if (name != ""){
            this._name = name;
            return;
        }
        throw new Error('string \"name\" cant be empty');
    }

    GetName(): string{
        return this._name;
    }
}