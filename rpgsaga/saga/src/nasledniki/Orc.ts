import { Hero } from "../lastlab/Hero";
import { _Ability } from "../lastlab/ability";

export class Orc extends Hero {
    private tinnitus: boolean; // звон в ушах
    private defaultStrength: number; // отраженный урон
    private enemy: Hero | null;

    constructor(name: string, health: number, strength: number, mana: number) {
        super(name, 'Орк', health, strength, mana);
        this.tinnitus = false;
        this.defaultStrength = strength;
        this.enemy = null;
    }

    protected orcHowl(enemy: Hero): string {
        if (this.tinnitus === true) {
            return `У противника звон в ушах. Его оружие пронзает своего носителя`;
        }
        if (this._mana < 15) {
            return `[Орк] ${this._name} не имеет достаточного количества маны, необходимой для активации способности`;
        }

        this.tinnitus = true;
        this._mana -= 15;
        this._strength *= 1.15;
        this.enemy = enemy;

        return `[Орк] ${this._name} оглушил [${enemy.getClassType}] ${enemy.getName}, теперь у него ЗВОН В УШАХ! Следующая его атака будет отражена в себя`;
    }

    public override getDamage(damage: number): string {
        if (this.tinnitus && this.enemy) {
            this.tinnitus = false;
            this.enemy.getDamage(damage);
            return `[Орк] ${this._name} отражает ${damage} единиц урона на [${this.enemy.getClassType}] ${this.enemy.getName}`;
        } else {
            this._health -= damage;
            if (this._health <= 0) {
                this.isAlive = false;
                return `[Орк] ${this._name} не успевает отразить удар и получает ${damage} урона, а затем погибает`;
            }
            return `[Орк] ${this._name} получает ${damage} урона. Текущее здоровье: ${this._health}.`;
        }
    }

    public override useAbility(enemy: Hero): string | null {
        if (Math.random() < 0.5) {
            return this.orcHowl(enemy);
        }
        const damage = this._strength;
        enemy.getDamage(damage);
        return null;
    }

    public restoreOriginalStrength(): void {
        this._strength = this.defaultStrength; 
    }

    public attack(enemy: Hero): string {
        enemy.getDamage(this._strength); 
        return `${this._name} атакует ${enemy.getName}, нанося ${this._strength} урона.`;
    }
}
