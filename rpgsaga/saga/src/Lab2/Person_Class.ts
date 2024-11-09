export abstract class Person {
    private _name: String;
    private _age: number;
    private _gender: String;
    private _height: number;
    private _weight: number;
    constructor(
        name: String,
        age: number,
        gender: String,
        height: number,
        weight: number
    ) {
        this._name = name;
        this.age = age;
        this.gender = gender;
        this._height = height;
        this._weight = weight;
    }

    public set age(value: number) {
        if (value < 0 || value > 110) {
            throw new Error(`Incorrect age`);
        } else {
            this._age = value;
        }
    }

    public set gender(value: String) {
        if (value == "m" || value == "man" || value == "w" || value == "woman") {
            this._gender = value;
        } else {
            throw new Error(`Incorrect gender`);
        }
    }

    public get name(): String {
        return this._name;
    }

    public get age(): number {
        return this._age;
    }
    
    public get gender(): String {
        return this._gender;
    }
    
    public get height(): number {
        return this._height;
    }
    
    public get weight(): number {
        return this._weight;
    }
}   
