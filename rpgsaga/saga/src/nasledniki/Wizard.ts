import { Hero } from '../lastlab/Hero';
import { _Ability } from '../lastlab/ability';
import { Logger } from '../lastlab/Logger';

export class Wizard extends Hero {
    public fasctinationActive: boolean;

    constructor(name: string, health: number, strength: number, mana: number) {
        super(name, 'Колдун', health, strength, mana);
        this.fasctinationActive = false;
    }

    public castFascination(enemy: Hero): string {
        if (this.fasctinationActive = true) {
            return `Заворожение активно. Ждём следующего хода`;
        }
        if (this._mana < 10) {
            return `[Колдун] ${this._name} не сумел использовать свою способность из-за необходимого количества маны`;
        }

        //активация способонсти, пропуск хода противника и снятие маны за юз абилки
        this.fasctinationActive = true;
        enemy.setFascination = true;
        this._mana -= 10;

        Logger.logAbilityUse(this, enemy, "Заворожение", 0);
        return `[Колдун] ${this._name} использовал свою способность! [${enemy.getClassType}] ${enemy.getName} заворожён и пропускает следующий ход`;

    }
    
    public override getDamage(damage: number): string {

        //сбрасываем флаг у мага чтобы он ходил дальше

        if (this.fasctinationActive) {
            this.fasctinationActive = false;
            return `[Колдун] ${this._name} не получает урона. В этот ход урон не получен`;
        }

        this._health -= damage;
        if (this._health <= 0) {
            this.isAlive = false;
            // Logger.log(`[${this._classType}] ${this._name} погибает в бою`);
            return `[Колдун] ${this._name} погибает в бою`;
        }

        Logger.log(`[${this._classType}] ${this._name} получает урон в размере ${damage}. Его оставшееся здоровье: ${this._health}`);
        return `[Колдун] ${this._name} получает урон в размере ${damage}. Его оставшееся здоровье: ${this._health}`;
    }

    //даю возможность в 50 процентов использовать способку мага. Шанс = 50 проц
    public override useAbility(enemy: Hero): string | null {
        if (Math.random() < 0.5) {
            return this.castFascination(enemy);
        }

        const damage = this._strength;
        enemy.getDamage(damage);
        // Logger.log(`[Колдун] ${this._name} использует способность против [${enemy.getClassType}] ${enemy.getName}`);
        return `[Колдун] ${this._name} наносит [${enemy.getClassType}] ${enemy.getName} ${damage} единицы урона `
    }

    //атака
    public attack(enemy: Hero): string {
        enemy.getDamage(this._strength);
        // Logger.logAttack(this, enemy, this._strength); 
        return `[${this._classType}] ${this._name} атакует [${enemy.getClassType}] ${enemy.getName}, нанося ${this._strength} урона.`;
    }
}