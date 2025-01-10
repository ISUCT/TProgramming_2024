import { Hero } from "../lastlab/Hero";
import { Logger } from "../lastlab/Logger";

export class Archer extends Hero {
    public isFireArrowUsed: boolean; // флаг для проверки, использованы лио огненные стрелы
    public iceArrowUses: number; // количество использованных ледяных стрел
    public fireEffectActive: boolean; // флаг для активации эффекта огненных стрел
    public fireEffectTurns: number; // счетчик оставшихся ходов действия огненных стрел
    public iceEffectStack: number; // сила эффекта Ледяных стрел (суммируется при повторных попаданиях)
    public iceEffectTurns: number; // оставшиеся ходы действия ледяных стрел

    public static readonly FIRE_ARROW_DAMAGE = 2; // дамаг от огненных стрел
    public static readonly ICE_ARROW_DAMAGE = 5; // дамаг от ледяных стрел
    public static readonly ICE_ARROW_TURNS = 3; // кол-во ходов эффекта лед стрел
    public static readonly MAX_ICE_ARROW_USES = 2; // максимальное кол-во использований лед стрел
    public static readonly FIRE_ARROW_MANA_COST = 10; // мана на огненные стрелы
    public static readonly ICE_ARROW_MANA_COST = 15; // мана на ледяные стрелы

    constructor(name: string, health: number, strength: number, mana: number) {
        super(name, "Лучник", health, strength, mana);
        this.isFireArrowUsed = false;
        this.fireEffectActive = false;
        this.fireEffectTurns = 0;
        this.iceArrowUses = 0;
        this.iceEffectStack = 0;
        this.iceEffectTurns = 0;
    }

    //прописываю использование огненных стрел
    public useFireArrows(enemy: Hero): string {
        if (this._mana < Archer.FIRE_ARROW_MANA_COST) {
            return `[Лучник] ${this._name} не обладает достаточным количеством маны для использования способности "Огненные стрелы"`;
        }

        if (!this.isFireArrowUsed) {
            this.isFireArrowUsed = true;
            this.fireEffectActive = true;
            this.fireEffectTurns = 3;
            this._mana -= Archer.FIRE_ARROW_MANA_COST;

            enemy.getDamage(Archer.FIRE_ARROW_DAMAGE);
            Logger.logAbilityUse(this, enemy, 'Огненные стрелы', Archer.FIRE_ARROW_DAMAGE);
            return `[Лучник] ${this._name} использует свою способность "Огненные стрелы". [${enemy.getClassType}] ${enemy.getName} загорается и теряет ${Archer.FIRE_ARROW_DAMAGE} здоровья. У [Лучник] ${this._name} остаётся ${this._mana}`;
        } else {
            return `[Лучник] ${this._name} уже использовал Огненные стрелы`;
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

            Logger.logAbilityUse(this, enemy, 'Ледяные стрелы', Archer.ICE_ARROW_DAMAGE);
            return `[Лучник] ${this._name} использует свою способность "Ледяные стрелы". [${enemy.getClassType}] ${enemy.getName} получает ${Archer.ICE_ARROW_DAMAGE} урона и будет получать дополнительный урон в течение ${Archer.ICE_ARROW_TURNS} ходов. У [Лучник] ${this._name} остаётся ${this._mana}`;
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
            Logger.log(`[${enemy.getClassType}] ${enemy.getName} получает ${Archer.FIRE_ARROW_DAMAGE} урона от огненного эффекта.`);
            log += `[${enemy.getClassType}] ${enemy.getName} получает ${Archer.FIRE_ARROW_DAMAGE} урона от огненного эффекта. Осталось: ${this.fireEffectTurns}\n`;
        }

        if (this.fireEffectTurns === 0) {
            this.fireEffectActive = false;
        }

        if (this.iceEffectTurns > 0) {
            enemy.getDamage(this.iceEffectStack);
            this.iceEffectTurns--;
            Logger.log(`[${enemy.getClassType}] ${enemy.getName} получает ${this.iceEffectStack} урона от ледяного эффекта.`);
            log += `[${enemy.getClassType}] ${enemy.getName} получает ${this.iceEffectStack} урона от ледяного эффекта. Осталось: ${this.iceEffectTurns}\n`;
        }

        if (this.iceEffectTurns === 0) {
            this.iceEffectStack = 0;
        }

        return log || "Нет активных эффектов";
    }

    //атака
    public attack(enemy: Hero): string {
        enemy.getDamage(this._strength);
        return `[${this._classType}] ${this._name} атакует [${enemy.getClassType}] ${enemy.getName}, нанося ${this._strength} урона.`;
    }

}