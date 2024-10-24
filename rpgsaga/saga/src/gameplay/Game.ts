import { Player } from '../abstract/Player';
import { Knight } from '../classes/Knight';
import { Archer } from '../classes/Archer';
import { Vizard } from '../classes/Vizard';
import { Logger } from '../utils/output/Logger';

export class Game {
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

    Logger.log(`Победитель: ${this.players[0].name}`);
  }

  private async battle() {
    const fighters: Player[] = this.shuffleArray(this.players).slice(0, 2);
    Logger.log(`(${fighters[0].name}) vs (${fighters[1].name})`);

    let turn = 0;
    const players = [fighters[0], fighters[1]];
    const skillsUsed = [false, false];

    while (fighters[0].health > 0 && fighters[1].health > 0) {
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
