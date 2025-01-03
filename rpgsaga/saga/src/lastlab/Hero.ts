import { _Ability } from "../ability";

export abstract class Hero {
    protected _name: string;
    protected _classType: string;
    protected _health: number; 
    protected _strength: number;
    protected _mana: number;
    protected isAbilityActive: boolean;
    protected _abilities: _Ability[] = [];
    public _fireImunitet: boolean;
    public isFascination: boolean;
    public tinitusUse: boolean;
    public isAlive: boolean;

    constructor(name: string, classType: string, health: number, strength:number, mana: number) {
        this._name = name;
        this._classType = classType;
        this._health = health;
        this._strength = strength;
        this._mana = mana;
        this._fireImunitet = false;
        this.tinitusUse = false;
        this.isFascination = false;
    }

    public get getIsAlive(): boolean {
        return this._health > 0; // Возвращает true, если здоровье больше 0
    }

    // гет и сет для имени
    public set setName(newName: string) {
        this._name = newName;
    }

    public get getName(): string {
        return this._name;
    }

    //гет и сет для типа воина (его класса)
    public set setClassType(newClassType: string) {
        this._classType = newClassType;
    }

    public get getClassType(): string {
        return this._classType;
    }

    //гет и сет для здоровья юнита
    public set setHealth(newHealth: number) {
        if (newHealth > 0) {
            this._health = newHealth;
        }
        throw new Error('It is very low value for health!');  
    }

    public get getHealth(): number {
        return this._health;
    }

    //гет и сет для силы перса
    public set setStrength(newStrength: number) {
        this._strength = newStrength;
    }

    public get getStrength(): number {
        return this._strength;
    }

    //гет и сет для маны
    public set setMana(newMana: number) {
        if (newMana = (this._health/2) ) {
            this._mana = newMana;
            return;
        }
        throw new Error('Wrong value for mana!');
    }

    public get getMana(): number {
        return this._mana;
    }

    //нанесение урона и смерть персонажа
    public getDamage(damage: number) {
        this._health -= damage;
        if (this._health <= 0) {
            this.isAlive = false;
            return `[${this._classType}] ${this._name} bravely died in fight`
        }
    }

    //получаем массив способностей
    public getAbilities(): _Ability[] {
        return this._abilities;
    }

    //добавляем абилку в массив
    public addAbility(ability: _Ability): void {
        this._abilities.push(ability);
    }

    //использование способности
    public useAbility(enemy: Hero): string | null {
        if (this._abilities.length === 0) {
            return null;
        }

        const randomIndex = Math.floor(Math.random() * this._abilities.length);
        const ability = this._abilities[randomIndex]
        const manaCoast = ((this._health/2)/2)

        if (this._mana >= manaCoast && ability.isActive) {
            this.isAbilityActive = true;
            const abilityDamage = ability.effect(enemy);
            this._mana -= manaCoast;

            return `Ability ${ability.title} used! It's ${ability.abilityDamage} damage to [${enemy._classType}] ${enemy._name}. Your remaining mana: ${this._mana} `;
            
        }
        else if (this._mana < manaCoast) {
            return `Not enough mana to use ${ability.title}, because you have ${this._mana} mana points`;
        } 
        else {
            return null;
        }

    }

    // public abstract useAbility(enemy: Hero): string | null;

    //получение имунитета
    public set setFireImunitet(newFireImunitet: boolean) {
        this._fireImunitet = newFireImunitet;
    }

    public get getFireImunitet(): boolean {
        return this._fireImunitet;
    }

    //функция заворожения для мага

    public set setFascination(statusFascination: boolean){
        this.isFascination = statusFascination;
    }

    public get getFascination(): boolean {
        return this.isFascination;
    }

     //функция для звона в ушах (орк)

     public set setTinnitus(statusFascination: boolean){
        this.tinitusUse = statusFascination;
    }

    public get getTinnitus(): boolean {
        return this.tinitusUse;
    }

}
