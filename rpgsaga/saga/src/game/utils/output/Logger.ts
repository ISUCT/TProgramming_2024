import { Player } from '../../abstract/Player';

export class Logger {
  public messageLog(message: string): void {
    const timestamp: string = new Date().toISOString();
    const logEntry: string = `${timestamp}: ${message}\n`;
    console.log(logEntry);
  }

  public attackLog(attacker: Player, defender: Player, damage: number): void {
    const timestamp: string = new Date().toISOString();
    const message: string = `(${attacker.className}) ${attacker.name} наносит урон ${damage} игроку ${defender.name} (${defender.className})`;
    const logEntry: string = `${timestamp}: ${message}\n`;
    console.log(logEntry);
  }

  public skillLog(attacker: Player, defender: Player): void {
    const timestamp: string = new Date().toISOString();
    let message: string = '';
    message += `(${attacker.className}) ${attacker.name} использует ${attacker.currentSkill?.name} на ${defender.name} (${defender.className}) `;
    if (attacker.currentSkill?.damage) {
      message += `и наносит урон ${attacker.currentSkill.damage(attacker)}`;
    }
    const logEntry: string = `${timestamp}: ${message}\n`;
    console.log(logEntry);
  }

  public skipTurnLog(attacker: Player, defender: Player): void {
    const timestamp: string = new Date().toISOString();
    const message: string = `(${attacker.className}) ${attacker.name} пропускает ход из-за ${defender.currentSkill.name}`;
    const logEntry: string = `${timestamp}: ${message}\n`;
    console.log(logEntry);
  }

  public deathLog(warrior: Player): void {
    const timestamp: string = new Date().toISOString();
    const message: string = `(${warrior.className}) ${warrior.name} умирает`;
    const logEntry: string = `${timestamp}: ${message}\n`;
    console.log(logEntry);
  }
}
