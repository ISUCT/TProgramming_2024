import { Hero } from "./Hero";

export class Logger {
    
    public static log(message: string): void {
        console.log(message);
    }

    // Атака
    public static logAttack(attacker: Hero, defender: Hero, damage: number): void {
        console.log(`[${attacker.getClassType}] ${attacker.getName} атакует [${defender.getClassType}] ${defender.getName}, нанося ${damage} урона.`);
    }

    // Использование способности
    public static logAbilityUse(attacker: Hero, defender: Hero, abilityName: string, damage: number): void {
        console.log(`[${attacker.getClassType}] ${attacker.getName} использует способность "${abilityName}" против [${defender.getClassType}] ${defender.getName}, нанося ${damage} урона.`);
    }

    // Недостаточно маны
    public static logNotEnoughMana(player: Hero, abilityName: string): void {
        console.log(`[${player.getClassType}] ${player.getName} не хватает маны для использования способности "${abilityName}".`);
    }

    // Смерть персонажа
    public static logDeath(player: Hero): void {
        console.log(`[${player.getClassType}] ${player.getName} погибает в бою.`);
    }

    // Начало боя
    public static logBattleStart(player1: Hero, player2: Hero): void {
        console.log(`Раунд начинается! [${player1.getClassType}] ${player1.getName} против [${player2.getClassType}] ${player2.getName}.`);
    }

    // Конец боя
    public static logBattleEnd(winner: Hero): void {
        console.log(`Раунд окончен! Победитель: [${winner.getClassType}] ${winner.getName}.`);
    }

    // Пропуск хода
    public static logSkipTurn(player: Hero): void {
        console.log(`[${player.getClassType}] ${player.getName} пропускает ход.`);
    }

    // Эффекты от способностей персонажей
    public static logEffect(player: Hero, effectName: string, damage: number, turnsLeft: number): void {
        console.log(`[${player.getClassType}] ${player.getName} получает ${damage} урона от эффекта "${effectName}". Осталось ходов действия: ${turnsLeft}.`);
    }

    // Начало игры
    public static logGameStart(): void {
        console.log("Мечи звенят, судьбы решаются, бой начинается!");
    }

    // Конец игры
    public static logGameEnd(winner: Hero): void {
        console.log(`Игра завершена! Победитель: [${winner.getClassType}] ${winner.getName}.`);
    }

    // Начало раунда
    public static logRoundStart(roundNumber: number): void {
        console.log(`--- Раунд ${roundNumber} начинается! ---`);
    }

    // Конец раунда
    public static logRoundEnd(roundNumber: number): void {
        console.log(`--- Раунд ${roundNumber} завершён! ---`);
    }
}