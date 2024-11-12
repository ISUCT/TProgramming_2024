import { Weapon } from "./weapon";

export abstract class Player {
    private _name: string;
    private _health: number;
    private _weapon: Weapon;
    private _isAlive: boolean;
    constructor(name:string, health: number, weapon: Weapon) {
        this._name = name;
        this._weapon = weapon;
        this._health = health;
        this._isAlive = true;
    }
    public get weapon(){
        return this._weapon;
    }
    public get name(){
        return this._name;
    }
    protected set health(value){
        this._health = value;
    }
    public get health(){
        return this._health;
    }
    abstract attacked(attackWeapon: Weapon): void
    public get isAlive(){
        return this._isAlive;
    }
    protected set isAlive(alive:boolean){
        this._isAlive = alive;
    }

}