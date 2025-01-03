import { Hero } from '../lastlab/Hero';
import { _Ability } from '../lastlab/ability';

export class Knight extends Hero {
    
    constructor(name: string, health: number, strength: number, mana: number) {
        super(name, 'Рыцарь', health, strength, mana);
    }

    public strikeBack(enemy: Hero): string {
        if (this._mana < 5) {
            return `[Рыцарь] ${this._name} не имеет достаточно маны для использования своей способности "Удара возмездия"`;  
        }
        
        const knightDamage = Math.floor(this._strength*1.3);

        //использоввание способности и вычет ее стоимости из манапула
        enemy.getDamage(knightDamage);
        this._mana -= 5;

        return `[Рыцарь] ${this._name} наносит [${enemy.getClassType}] ${enemy.getName} способностью "Удар возмездия" невероятные ${knightDamage} единиц урона! Его оставшаяся мана: ${this._mana}`;
    }

    public override useAbility(enemy: Hero): string | null {
        const chanceKnightStrike = Math.random() < 0.5;
        if (chanceKnightStrike) {
            return this.strikeBack(enemy);
        }

        const damage = this._strength;
        enemy.getDamage(damage);
        return `[Рыцарь] ${this._name} наносит [${enemy.getClassType}] ${enemy.getName} ${damage} единиц урона`;
    }

    //атака
    public attack(enemy: Hero): string {
        enemy.getDamage(this._strength); 
        return `${this._name} атакует ${enemy.getName}, нанося ${this._strength} урона.`;
    }
}