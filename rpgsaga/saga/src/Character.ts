import {Calculater} from './Calculater';
import { RandomName } from './Const';

export class Character{
    protected _health: number;
    protected _damage: number;
    protected _maxHealth: number;
    protected _name: string;

    constructor(){
        this._maxHealth = Calculater.random(100, 250);
        this._damage = Calculater.random(50, 100);
        this._name =RandomName[Calculater.random(0, RandomName.length -1)];
        this._health = this._maxHealth;
    }

    public get health() {
        return this._health;
    }

    get damage(){
        return this._damage;
    }

    get name(){
        return this._name;
    }
    public reHealth(){
        this._health = this._maxHealth;
    }
    public fightDamager(opDamager:number){
        this._health -= opDamager;
    }

}