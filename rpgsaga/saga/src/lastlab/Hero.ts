import { _Ability } from "../ability";
import { Logger } from "./Logger";

export abstract class Hero {
    public _name: string;
    protected _classType: string;
    public _health: number;
    public _strength: number;
    public _mana: number;
    protected isAbilityActive: boolean;
    protected _abilities: _Ability[] = [];
    public isFascination: boolean;
    public tinitusUse: boolean;
    public isAlive: boolean;

    constructor(name: string, classType: string, health: number, strength: number, mana: number) {
        this._name = name;
        this._classType = classType;
        this._health = health;
        this._strength = strength;
        this._mana = mana;
        this.tinitusUse = false;
        this.isFascination = false;
        this.isAlive = true; // Изначально персонаж жив
    }

    public get getIsAlive(): boolean {
        return this._health > 0; // Возвращает true, если здоровье больше 0
    }

    // Гет и сет для имени
    public set setName(newName: string) {
        this._name = newName;
    }

    public get getName(): string {
        return this._name;
    }

    // Гет и сет для типа воина (его класса)
    public set setClassType(newClassType: string) {
        this._classType = newClassType;
    }

    public get getClassType(): string {
        return this._classType;
    }

    // Гет и сет для здоровья юнита
    public set setHealth(newHealth: number) {
        if (newHealth > 0) {
            this._health = newHealth;
        } else {
            throw new Error('It is very low value for health!');
        }
    }

    public get getHealth(): number {
        return this._health;
    }

    // Гет и сет для силы персонажа
    public set setStrength(newStrength: number) {
        this._strength = newStrength;
    }

    public get getStrength(): number {
        return this._strength;
    }

    // Гет и сет для маны
    public set setMana(newMana: number) {
        if (newMana === (this._health / 2)) {
            this._mana = newMana;
            return;
        }
        throw new Error('Не верное значение для маны!');
    }

    public get getMana(): number {
        return this._mana;
    }

    // Атака
    public attack(enemy: Hero): string {
        if (!this.isAlive) {
            return `[${this._classType}] ${this._name} не может атаковать, так как он мертв.`;
        }

        Logger.logAttack(this, enemy, this._strength);
        enemy.getDamage(this._strength);
        return `[${this._classType}] ${this._name} атакует [${enemy.getClassType}] ${enemy.getName}, нанося ${this._strength} урона.`;
    }

    // Нанесение урона и смерть персонажа
    public getDamage(damage: number): string {
        this._health -= damage;
        if (this._health <= 0) {
            this._health = 0;
            this.isAlive = false;
            return `[${this._classType}] ${this._name} мужественно погибает в битве!`;
        }
        Logger.log(`[${this._classType}] ${this._name} получает ${damage} урона. Текущее здоровье: ${this._health}`);
        return `[${this._classType}] ${this._name} получает ${damage} урона. Текущее здоровье: ${this._health}.`;
    }

    // Получаем массив способностей
    public getAbilities(): _Ability[] {
        return this._abilities;
    }

    // Добавляем абилку в массив
    public addAbility(ability: _Ability): void {
        this._abilities.push(ability);
    }

    // Использование способности
    public useAbility(enemy: Hero): string | null {
        if (this._abilities.length === 0) {
            return null;
        }

        const randomIndex = Math.floor(Math.random() * this._abilities.length);
        const ability = this._abilities[randomIndex];
        const manaCost = (this._health / 2) / 2;

        if (this._mana >= manaCost && ability.isActive) {
            this.isAbilityActive = true;
            const abilityDamage = ability.effect(enemy);
            this._mana -= manaCost;

            Logger.logAbilityUse(this, enemy, ability.title, abilityDamage);
            return `Ability ${ability.title} used! It's ${ability.abilityDamage} damage to [${enemy._classType}] ${enemy._name}. Your remaining mana: ${this._mana} `;
        } else if (this._mana < manaCost) {
            return `Not enough mana to use ${ability.title}, because you have ${this._mana} mana points`;
        } else {
            return null;
        }
    }

    public set setFascination(statusFascination: boolean) {
        this.isFascination = statusFascination;
    }

    public get getFascination(): boolean {
        return this.isFascination;
    }

    // Функция для звона в ушах (орк)
    public set setTinnitus(statusFascination: boolean) {
        this.tinitusUse = statusFascination;
    }

    public get getTinnitus(): boolean {
        return this.tinitusUse;
    }
}