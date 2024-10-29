import { Player } from '../abstract/Player';
import { Knight } from '../classes/Knight';
import { Archer } from '../classes/Archer';
import { Vizard } from '../classes/Vizard';
import { Logger } from '../utils/output/Logger';
import { getRandomNumber } from '../utils/randomization/getRandomNumber';
import { getRandomArrayElement } from '../utils/randomization/getRandomArrayElement';

export class Game {
  private players: Player[] = [];
  private initialHealth: number[] = [];
  private initialStrength: number[] = [];

  constructor(playerCount: number) {
    this.players = [];
    const names = [
      'Эльдар',
      'Артур',
      'Гэндальф',
      'Вильямс',
      'Агатон',
      'Аполлон',
      'Артемида',
      'Зевс',
      'Персей',
      'Феникс',
      'Элита',
      'Ирида',
      'Медея',
      'Орион',
      'Рафаэль',
      'Себастиан',
      'Эмиль',
      'Аврора',
      'Веста',
      'Лилия',
      'Мира',
    ];

    for (let i = 0; i < playerCount; i++) {
      const name = getRandomArrayElement(names);
      const health = getRandomNumber(75, 100);
      const strength = getRandomNumber(15, 20);
      const player = this.createPlayer(name, health, strength);
      this.players.push(player);
      this.initialHealth.push(player.healthPoints);
      this.initialStrength.push(player.strengthPoints);
    }
  }

  public get playersCount() {
    return this.players;
  }

  private createPlayer(name: string, health: number, strength: number): Player {
    const types = [Knight, Archer, Vizard];
    const PlayerClass = getRandomArrayElement(types);
    return new PlayerClass(health, strength, name);
  }

  public async start() {
    Logger.log('Игра началась!');
    await this.tournament(this.players);
    Logger.log(`Победитель: ${this.players[0].playerName}`);
  }

  private async tournament(players: Player[]): Promise<Player> {
    if (players.length === 1) {
      return players[0];
    }

    const nextRoundPlayers: Player[] = [];
    for (let i = 0; i < players.length; i += 2) {
      const player1 = players[i];
      const player2 = players[i + 1];
      const winner = await this.battle([player1, player2]);
      nextRoundPlayers.push(winner);
      player1.healthPoints = this.initialHealth[this.players.indexOf(player1)];
      player2.healthPoints = this.initialHealth[this.players.indexOf(player2)];
      player1.strengthPoints = this.initialStrength[this.players.indexOf(player1)];
      player2.strengthPoints = this.initialStrength[this.players.indexOf(player2)];
      player1.playerSkillUsed = false;
      player2.playerSkillUsed = false;
      if (player1 instanceof Vizard && player1.countOfVizardSkills >= 1) {
        player1.countOfVizardSkills = 0;
      } else if (player2 instanceof Vizard && player2.countOfVizardSkills >= 1) {
        player2.countOfVizardSkills = 0;
      }
    }

    return this.tournament(nextRoundPlayers);
  }

  private async battle(fighters: Player[]): Promise<Player> {
    Logger.log(`(${fighters[0].playerName}) vs (${fighters[1].playerName})`);

    let turn = 0;

    while (fighters[0].healthPoints > 0 && fighters[1].healthPoints > 0) {
      const attackerIndex = turn % 2;
      const defenderIndex = (turn + 1) % 2;
      const attacker = fighters[attackerIndex];
      const defender = fighters[defenderIndex];

      if (defender.isAlivePlayer) {
        Logger.log(attacker.attack(defender));

        if (!defender.isAlivePlayer) {
          Logger.log(defender.takeDamage(1));
          break;
        }
      }

      if (Math.random() < 0.5 && attacker.isAlivePlayer && defender.isAlivePlayer) {
        if (attacker instanceof Knight && !attacker.playerSkillUsed) {
          Logger.log(attacker.useSkill(defender));
        } else if (attacker instanceof Archer && !attacker.playerSkillUsed) {
          Logger.log(attacker.useSkill(defender));
        } else if (attacker instanceof Vizard && !attacker.playerSkillUsed && attacker.countOfVizardSkills < 1) {
          Logger.log(attacker.useSkill(defender));
        }
      }

      await this.delay(200);
      turn++;
    }

    return fighters.find(player => player.healthPoints > 0)!;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
