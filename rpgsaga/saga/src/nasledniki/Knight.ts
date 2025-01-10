import { Hero } from '../lastlab/Hero';
import { Logger } from '../lastlab/Logger';

export class Knight extends Hero {

    constructor(name: string, health: number, strength: number, mana: number) {
        super(name, 'Рыцарь', health, strength, mana);
    }

    public strikeBack(enemy: Hero): string {
        if (this._mana < 5) {
            return `[Рыцарь] ${this._name} не имеет достаточно маны для использования своей способности "Удара возмездия"`;  
        }

        const knightDamage = Math.floor(this._strength * 1.3);
        this._mana -= 5;

        return this.dealDamage(enemy, knightDamage, "Удар возмездия");
    }

    public override useAbility(enemy: Hero): string | null {
        const STRIKE_BACK_CHANCE = 0.5;
        const chanceKnightStrike = Math.random() < STRIKE_BACK_CHANCE;

        if (chanceKnightStrike) {
            return this.strikeBack(enemy);
        }

        return this.dealDamage(enemy, this._strength);
    }

    // Общий метод для нанесения урона
    private dealDamage(enemy: Hero, damage: number, abilityName: string | null = null): string {
        enemy.getDamage(damage);
        Logger.logAttack(this, enemy, damage);
        if (abilityName) {
            Logger.logAbilityUse(this, enemy, abilityName, damage);
            return `[Рыцарь] ${this._name} наносит [${enemy.getClassType}] ${enemy.getName} способностью "${abilityName}" ${damage} единиц урона! Его оставшаяся мана: ${this._mana}`;
        }
        return `[Рыцарь] ${this._name} наносит [${enemy.getClassType}] ${enemy.getName} ${damage} единиц урона.`;
    }

    // Атака
    public attack(enemy: Hero): string {
        return this.dealDamage(enemy, this._strength);
    }
}