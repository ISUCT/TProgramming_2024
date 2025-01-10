import { Hero } from "../lastlab/Hero";
import { Logger } from "../lastlab/Logger";

export class Orc extends Hero {
    public tinnitus: boolean; // звон в ушах
    public defaultStrength: number; 
    private enemy: Hero | null;

    constructor(name: string, health: number, strength: number, mana: number) {
        super(name, 'Орк', health, strength, mana);
        this.tinnitus = false;
        this.defaultStrength = strength;
        this.enemy = null;
    }

    public orcHowl(enemy: Hero): string {
        if (this.tinnitus) {
            return `У противника звон в ушах. Его оружие пронзает своего носителя`;
        }
        if (this._mana < 15) {
            return `[Орк] ${this._name} не имеет достаточного количества маны, необходимой для активации способности`;
        }

        this.tinnitus = true;
        this._mana -= 15;
        this._strength *= 1.15; // Увеличиваем силу орка
        this.enemy = enemy;

        Logger.logAbilityUse(this, enemy, "Оркский вой", 0);
        return `[Орк] ${this._name} оглушил [${enemy.getClassType}] ${enemy.getName}, теперь у него ЗВОН В УШАХ! Следующая его атака будет отражена на него самого.`;
    }

    public override getDamage(damage: number): string {
        if (this.tinnitus && this.enemy) {
            this.tinnitus = false; // Сбрасываем эффект
            this.enemy.getDamage(damage); // Отражаем урон на врага
            this.restoreOriginalStrength(); // Восстанавливаем оригинальную силу
            Logger.log(`${this._name} отражает ${damage} единиц урона на [${this.enemy.getClassType}] ${this.enemy.getName}`);
            return `[Орк] ${this._name} отражает ${damage} единиц урона на [${this.enemy.getClassType}] ${this.enemy.getName}`;
        } else {
            this._health -= damage; // Получаем урон
            if (this._health <= 0) {
                this.isAlive = false;
                Logger.log(`${this._name} получает ${damage} урона и погибает`);
                return `[Орк] ${this._name} не успевает отразить удар и получает ${damage} урона, а затем погибает`;
            }
            Logger.log(`[${this._classType}] ${this._name} получает ${damage} урона. Текущее здоровье: ${this._health}`);
            return `[Орк] ${this._name} получает ${damage} урона. Текущее здоровье: ${this._health}.`;
        }
    }
    

    public override useAbility(enemy: Hero): string | null {
        if (Math.random() < 0.5) {
            return this.orcHowl(enemy);
        }
        Logger.log(`[${this._classType}] ${this._name} использует способность против [${enemy.getClassType}] ${enemy.getName}`);
        return this.attack(enemy);
    }

    public restoreOriginalStrength(): void {
        this._strength = this.defaultStrength; 
    }

    public attack(enemy: Hero): string {
        enemy.getDamage(this._strength);
        Logger.logAttack(this, enemy, this._strength); 
        return `[${this._classType}] ${this._name} атакует [${enemy.getClassType}] ${enemy.getName}, нанося ${this._strength} урона.`;
    }
}
