import { Calculater } from './Calculater';
import { RandomName } from './Const';
import { Logger } from './logger';

export class Character {
    protected _health: number;
    protected _damage: number;
    protected _maxHealth: number;
    protected _name: string;
    protected _class: string;
    protected _burn: boolean;


    constructor() {
        this._maxHealth = Calculater.random(100, 250);
        this._damage = Calculater.random(50, 100);
        this._name = RandomName[Calculater.random(0, RandomName.length - 1)];
        this._health = this._maxHealth;
        this._burn = false;
    }

    public get health() {
        return this._health;
    }

    get damage() {
        return this._damage;
    }

    get name() {
        return this._name;
    }


    public get class(): string {
        return this._class;
    }
    public

    public get burn(): boolean {
        return this._burn;
    }

    public reHealth() {
        this._health = this._maxHealth;
        this._burn = false;
    }

    public turn(oponent: Character) {
        this.burning();
        if (Calculater.booleanRandom()) {
            this.useSkill(oponent);
        }
        else {
            oponent.fightDamager(this.damage);
            Logger.logFight(this, oponent);
        }

    }
    public fightDamager(opDamager: number) {
        this._health -= opDamager;
    }

    useSkill(oponent: Character) {

    }
    burnActive() {
        this._burn = true;
    }
    burning() {
        if (this._burn) {
            this._health -= 10;
            Logger.logBurn(this);
        }
    }
}