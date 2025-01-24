import { Player } from './laba3CreatingPlayer';
import * as fs from 'fs';

export class Logs {
  private Tour: number = 0;
  private logFile: string = 'game_log.txt';

  constructor() {
    // Очищаем файл логов при создании нового логгера
    fs.writeFileSync(this.logFile, '');
  }

  public setTour(Tour: number): void {
    this.Tour = Tour;
  }

  public getTour(): number {
    return this.Tour;
  }

  public log(message: string): void {
    console.log(message); // Вывод в консоль
    fs.appendFileSync(this.logFile, message + '\n'); // Запись в файл
  }

  // Логирование боя с отображением здоровья
  public logFight(player1: Player, player2: Player, action: string): void {
    if (player1 && player2) {
      this.log(
        `(${player1.constructor.name}: ${player1.getHealth()} здоровья) ${player1.getName()} ${action} (${player2.constructor.name}: ${player2.getHealth()} здоровья) ${player2.getName()}`,
      );
    }
  }

  // Логирование атаки с отображением урона
  public logAttack(attacker: Player, target: Player, damage: number): void {
    this.log(
      `(${attacker.constructor.name}: ${attacker.getHealth()} здоровья) ${attacker.getName()} наносит ${damage} урона (${target.constructor.name}: ${target.getHealth()} здоровья) ${target.getName()}`,
    );
  }

  // Логирование лечения
  public logHeal(player: Player, healAmount: number): void {
    this.log(
      `(${player.constructor.name}: ${player.getHealth()} здоровья) ${player.getName()} восстанавливает ${healAmount} здоровья`,
    );
  }

  public logWinner(winner: Player): void {
    this.log(`Победитель: (${winner.constructor.name}: ${winner.getHealth()} здоровья) ${winner.getName()}`);
    this.log('\n');
  }

  public logLoser(loser: Player): void {
    this.log('\n');
    this.log(`Проигравший: (${loser.constructor.name}: ${loser.getHealth()} здоровья) ${loser.getName()}`);
  }

  public logChampion(champion: Player): void {
    this.log(
      `И чемпионом турнира становится: ${champion.constructor.name} (${champion.getName()}: ${champion.getHealth()} здоровья). Поздравляем!`,
    );
    this.log('\n');
  }

  public logAbility(player: Player, ability: string, target: Player, effect: string): void {
    this.log(
      `(${player.constructor.name}: ${player.getHealth()} здоровья) ${player.getName()} использует ${ability} на игрока (${target.constructor.name}: ${target.getHealth()} здоровья) ${target.getName()} ${effect}.`,
    );
  }

  public logSkipTurn(player: Player): void {
    this.log(`${player.getName()} пропускает ход из-за оглушения.`);
  }

  public logStunEffect(player: Player, duration: number): void {
    this.log(`${player.getName()} будет оглушен на ${duration} хода.`);
  }

  public logDamageOverTime(target: Player, damage: number, effect: string): void {
    this.log(`${target.getName()} теряет ${damage} единиц жизни из-за ${effect}. Текущее здоровье: ${target.getHealth()}`);
  }
}