import { Hero } from './hero';

export class Logger {

  constructor() {}

  public messageLog(message: string): void {
    const timestamp: string = new Date().toISOString();
    const logEntry: string = `${timestamp}: ${message}\n`;
    console.log(logEntry);
  }

  public attackLog(attacker: Hero, defender: Hero, damage: number): void {
    const timestamp: string = new Date().toISOString();
    const message: string = `(${attacker.getClassName}) ${attacker.getName} наносит урон ${damage} на ${defender.getName} (${defender.getClassName})`;
    const logEntry: string = `${timestamp}: ${message}\n`;
    console.log(logEntry);
  }

  public abilityLog(attacker: Hero, defender: Hero): void {
    const timestamp: string = new Date().toISOString();
    let message: string = '';
    message += `(${attacker.getClassName}) ${attacker.getName} использует ${attacker.getCurrentAbility?.name} на ${defender.getName} (${defender.getClassName}) `;
    if (attacker.getCurrentAbility?.damage) {
      message += `и наносит урон ${attacker.getCurrentAbility.damage(attacker)}`;
    }
    const logEntry: string = `${timestamp}: ${message}\n`;
    console.log(logEntry);
  }

  public skipTurnLog(attacker: Hero, defender: Hero): void {
    const timestamp: string = new Date().toISOString();
    const message: string = `(${attacker.getClassName}) ${attacker.getName} пропускает ход из-за ${
      defender.getCurrentAbility!.name
    }`;
    const logEntry: string = `${timestamp}: ${message}\n`;
    console.log(logEntry);
  }

  public deathLog(warrior: Hero): void {
    const timestamp: string = new Date().toISOString();
    const message: string = `(${warrior.getClassName}) ${warrior.getName} погибает`;
    const logEntry: string = `${timestamp}: ${message}\n`;
    console.log(logEntry);
  }
}
