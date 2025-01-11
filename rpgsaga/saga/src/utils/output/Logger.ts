import { Character } from '../../Characters/Сharacter';

export class Logger {
  static _instance: Logger;

  constructor() {}

  public get instance(): Logger {
    if (!Logger._instance) {
      Logger._instance = new Logger();
    }
    return Logger._instance;
  }

  public messageLog(message: string): void {
    const logEntry: string = `${message}\n`;
    console.log(logEntry);
  }

  public attackLog(attacker: Character, defender: Character, damage: number): void {
    const message: string = `(${attacker.className}) ${attacker.name} наносит урон ${damage} на ${defender.name} (${defender.className})`;
    const logEntry: string = `${message}\n`;
    console.log(logEntry);
  }

  public abilityLog(attacker: Character, defender: Character): void {
    let message: string = '';
    message += `(${attacker.className}) ${attacker.name} использует [${attacker.currentAbility?.name}] на ${defender.name} (${defender.className}) `;
    if (attacker.currentAbility?.damage) {
      message += `и наносит урон ${attacker.currentAbility.damage(attacker)}`;
    }
    const logEntry: string = `${message}\n`;
    console.log(logEntry);
  }

  public skipTurnLog(attacker: Character, defender: Character): void {
    const message: string = `(${attacker.className}) ${attacker.name} пропускает ход из-за [${defender.currentAbility!.name}]`;
    const logEntry: string = `${message}\n`;
    console.log(logEntry);
  }

  public deathLog(warrior: Character): void {
    const message: string = `(${warrior.className}) ${warrior.name} умирает`;
    const logEntry: string = `${message}\n`;
    console.log(logEntry);
  }
}
