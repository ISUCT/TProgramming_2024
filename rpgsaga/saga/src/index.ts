class Logger {
  private logFile: string;

  constructor(logFile: string = 'game_log.txt') {
    this.logFile = logFile;
  }

  static log(message: string): void {
    const timestamp = new Date().toISOString();
    const logEntry = `${timestamp}: ${message}\n`;
    console.log(logEntry);
  }
}

abstract class Player {
  protected health: number;
  protected strength: number;
  protected name: string;
  isAlive: boolean = true;

  constructor(gamerHealth: number, gamerStrength: number, gamerName: string) {
    this.health = gamerHealth;
    this.strength = gamerStrength;
    this.name = gamerName;
  }

  public getHealth(): number {
    return this.health;
  }

  public getStrength(): number {
    return this.strength;
  }

  public getName(): string {
    return this.name;
  }

  public abstract attack(opponent: Player): void;

  public takeDamage(damage: number): void {
    this.health -= damage;
    if (this.health <= 0) {
      this.isAlive = false;
      Logger.log(`(${this.constructor.name}) ${this.name} погибает`);
    }
  }

  public allowToAttack(): boolean {
    return this.isAlive;
  }
}

class Knight extends Player {
  skillUsed: boolean = false;

  public useSkill(opponent: Player): void {
    if (!this.skillUsed) {
      this.skillUsed = true;
      const skillDamage = this.strength * 1.3;
      Logger.log(
        `(${this.constructor.name}) ${
          this.name
        } использует (Удар возмездия) и наносит урон ${skillDamage} противнику (${
          opponent.constructor.name
        }) ${opponent.getName()}`,
      );
      opponent.takeDamage(skillDamage);
    }
  }

  public attack(opponent: Player): void {
    if (this.allowToAttack()) {
      const damage = this.strength;
      Logger.log(
        `(${this.constructor.name}) ${this.name} наносит урон ${damage} противнику (${
          opponent.constructor.name
        }) ${opponent.getName()}`,
      );
      opponent.takeDamage(damage);
    }
  }
}

class Vizard extends Player {
  skillUsed: boolean = false;

  public useSkill(opponent: Player): void {
    if (!this.skillUsed) {
      Logger.log(
        `(${this.constructor.name}) ${this.name} использует (Заворожение) на (${
          opponent.constructor.name
        }) ${opponent.getName()}`,
      );
      this.skillUsed = true;
    }
  }

  public attack(opponent: Player): void {
    if (this.allowToAttack()) {
      const damage = this.strength;
      Logger.log(
        `(${this.constructor.name}) ${this.name} наносит урон ${damage} противнику (${
          opponent.constructor.name
        }) ${opponent.getName()}`,
      );
      opponent.takeDamage(damage);
    }
  }

  public takeDamage(damage: number): void {
    if (this.skillUsed) {
      Logger.log(`Противник не может атаковать ${this.name} из-за (Заворожения)`);
      this.skillUsed = false;
    } else {
      super.takeDamage(damage);
    }
  }
}

class Archer extends Player {
  skillUsed: boolean = false;

  public useSkill(opponent: Player): void {
    if (!this.skillUsed) {
      Logger.log(
        `(${this.constructor.name}) ${this.name} использует (Огненные стрелы) на (${
          opponent.constructor.name
        }) ${opponent.getName()}`,
      );
      this.skillUsed = true;
    }
  }

  public attack(opponent: Player): void {
    if (this.allowToAttack()) {
      let damage = this.strength;
      if (this.skillUsed) {
        damage += 2;
      }
      Logger.log(
        `(${this.constructor.name}) ${this.name} наносит урон ${damage} противнику (${
          opponent.constructor.name
        }) ${opponent.getName()}`,
      );
      opponent.takeDamage(damage);
    }
  }
}

class Game {
  private players: Player[];

  constructor(playerCount: number) {
    this.players = [];
    const names = ['Эльдар', 'Артур', 'Гэндальф', 'Вильямс'];

    for (let i = 0; i < playerCount; i++) {
      const name = names[Math.floor(Math.random() * names.length)];
      const health = Math.floor(Math.random() * 50) + 50;
      const strength = Math.floor(Math.random() * 10) + 10;
      this.players.push(this.createPlayer(name, health, strength));
    }
  }

  private createPlayer(name: string, health: number, strength: number): Player {
    const types = [Knight, Archer, Vizard];
    const PlayerClass = types[Math.floor(Math.random() * types.length)];
    return new PlayerClass(health, strength, name);
  }

  public async start() {
    Logger.log('Игра началась!');
    while (this.players.length > 1) {
      await this.battle();
    }

    Logger.log(`Победитель: ${this.players[0].getName()}`);
  }

  private async battle() {
    const fighters: Player[] = this.shuffleArray(this.players).slice(0, 2);
    Logger.log(`(${fighters[0].getName()}) vs (${fighters[1].getName()})`);

    let turn = 0;
    const players = [fighters[0], fighters[1]];
    const skillsUsed = [false, false];

    while (fighters[0].getHealth() > 0 && fighters[1].getHealth() > 0) {
      const attackerIndex = turn % 2;
      const defenderIndex = (turn + 1) % 2;
      const attacker = players[attackerIndex];
      const defender = players[defenderIndex];

      const canUseSkill =
        (attacker instanceof Knight && !skillsUsed[attackerIndex]) ||
        (attacker instanceof Archer && !skillsUsed[attackerIndex]) ||
        (attacker instanceof Vizard && !skillsUsed[attackerIndex]);

      if (defender.isAlive) {
        attacker.attack(defender);
      }

      if (canUseSkill && Math.random() < 0.5) {
        if (attacker instanceof Knight) {
          attacker.useSkill(defender);
        } else if (attacker instanceof Archer) {
          attacker.useSkill(defender);
        } else if (attacker instanceof Vizard) {
          attacker.useSkill(defender);
        }

        skillsUsed[attackerIndex] = true;
      }

      await this.delay(2000);
      turn++;
    }

    this.players = this.players.filter(player => player.isAlive);
  }

  private shuffleArray(array: Player[]): Player[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

const game = new Game(4);
game.start();
