import { Hero } from "../lastlab/Hero";

export class Archer extends Hero {
    private isFireArrowUsed: boolean; // Флаг для проверки, использованы ли Огненные стрелы
    private iceArrowUses: number; // Количество использованных Ледяных стрел
    private fireEffectActive: boolean; // Флаг для активации эффекта Огненных стрел
    private fireEffectTurns: number; // Счетчик оставшихся ходов действия Огненных стрел
    private iceEffectStack: number; // Сила эффекта Ледяных стрел (суммируется при повторных попаданиях)
    private iceEffectTurns: number; // Оставшиеся ходы действия Ледяных стрел

    private static readonly FIRE_ARROW_DAMAGE = 2; // дамаг от огненных стрел
    private static readonly ICE_ARROW_DAMAGE = 5; // дамаг от ледяных стрел
    private static readonly ICE_ARROW_TURNS = 3; // кол-во ходов эффекта лед стрел
    private static readonly MAX_ICE_ARROW_USES = 2; // максимальное кол-во использований лед стрел
    private static readonly FIRE_ARROW_MANA_COST = 10; // мана на огненные стрелы
    private static readonly ICE_ARROW_MANA_COST = 15; // мана на ледяные стрелы

    constructor(name: string, health: number, strength: number, mana: number) {
        super(name, "Archer", health, strength, mana);
        this.isFireArrowUsed = false;
        this.fireEffectActive = false;
        this.fireEffectTurns = 0;
        this.iceArrowUses = 0;
        this.iceEffectStack = 0;
        this.iceEffectTurns = 0;
    }

    //прописываю использование огненных стрел
    public useFireArrows(enemy: Hero): string {
        if (!this.isFireArrowUsed) {
            this.isFireArrowUsed = true,
            this.fireEffectActive = true;
            this.fireEffectTurns = 3;
            this._mana -= Archer.FIRE_ARROW_MANA_COST;
            return `[Лучник] ${this._name} использует свою способность "Огненные стрелы". [${enemy.getClassType}] ${enemy.getName} загорается и теряет ${Archer.FIRE_ARROW_DAMAGE} здоровья. У [Лучник] ${this._name} остаётся ${this._mana}`;
        } else {
            return `[Лучник] ${this._name} не обладает достаточным количеством маны для использования способности "Огненные стрелы"`;
        }
    }

    //использование ледяных стрел
    public useIceArrows(enemy: Hero): string {
        if (this.iceArrowUses < Archer.MAX_ICE_ARROW_USES && this._mana >= Archer.ICE_ARROW_MANA_COST) {

            this.iceArrowUses++;
            this.iceEffectStack += Archer.ICE_ARROW_DAMAGE;
            this.iceEffectTurns = Archer.ICE_ARROW_TURNS;

            enemy.getDamage(Archer.ICE_ARROW_DAMAGE);
            this._mana -= Archer.ICE_ARROW_MANA_COST;
            return `[Лучник] ${this._name} использует свою способность "Ледянные стрелы". [${enemy.getClassType}] ${enemy.getName} загорается и моментально теряет ${Archer.ICE_ARROW_DAMAGE} здоровья, а также он будет получать дополнительный урон в течение ${Archer.ICE_ARROW_TURNS} ходов. У [Лучник] ${this._name} остаётся ${this._mana}`;
        } else if (this.iceArrowUses >= Archer.MAX_ICE_ARROW_USES) {
            return `[Лучник] ${this._name} уже использовал максимальное количество ледяных стрел (${Archer.MAX_ICE_ARROW_USES} раза)`;
        } else {
            return `[Лучник] ${this._name} обладает недостаточным количеством маны для использования способности. Его мана: ${this._mana}`;
        }
    }

    //реализация эффектов
    public applyEffects(enemy: Hero): string {
        let log = "";

        if (this.fireEffectActive && this.fireEffectTurns > 0) {
            enemy.getDamage(Archer.FIRE_ARROW_DAMAGE);
            this.fireEffectTurns--;
            log += `[${enemy.getClassType}] ${enemy.getName} получает ${Archer.FIRE_ARROW_DAMAGE} урона от горения. Осталось: ${this.fireEffectTurns}`;         
        }

        if (this.fireEffectTurns === 0) {
            this.fireEffectActive = false;
        }

        if (this.iceEffectTurns > 0) {
            enemy.getDamage(this.iceEffectStack);
            this.iceEffectTurns--;
            log += `[${enemy.getClassType}] ${enemy.getName} получает ${this.iceEffectStack} урона от леденящего эффекта. Осталось: ${this.iceEffectTurns}`;         
        }

        if (this.iceEffectTurns === 0) {
            this.iceEffectStack = 0;
        }

        return log || "Нет активных эффектов"
        
    }

    //атака
    public attack(enemy: Hero): string {
        enemy.getDamage(this._strength); 
        return `${this._name} атакует ${enemy.getName}, нанося ${this._strength} урона.`;
    }

}