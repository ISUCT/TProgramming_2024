import * as readline from 'readline';

import { PlayerFactory } from './RPGsaga/PlayerFactory';
import { Player } from './RPGsaga/Player';
import { Logger } from './RPGsaga/utils/Logger';
import { Ability } from './RPGsaga/utils/abilities';

export class Game {
  private players: Player[] = [];
  private roundNumber: number = 0;

  public start(): void {
    Logger.startOfTheGame();

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const askForPlayerCount = (): void => {
      rl.question('Please enter an EVEN number of players: ', answer => {
        const playersCount = Number(answer);
        if (playersCount > 0 && playersCount % 2 === 0) {
          this.generateThePlayers(playersCount);
          this.startTournament();
          rl.close();
        } else {
          Logger.notEvenPlayers();
          askForPlayerCount(); // Повторный запрос
        }
      });
    };

    askForPlayerCount();
  }

  private generateThePlayers(count: number): void {
    for (let i = 0; i < count; i++) {
      const player = PlayerFactory.createRandomPlayer();
      this.players.push(player);

      Logger.log(`Generated Player ${i + 1}:`);
      Logger.log(player.getDetails());
    }
  }

  private startTournament(): void {
    while (this.players.length > 1) {
      this.roundNumber++;
      Logger.startOFTheRound(this.roundNumber);

      const survivors: Player[] = [];

      while (this.players.length > 0) {
        const player1 = this.players.pop();
        const player2 = this.players.pop();

        if (player1 && player2) {
          Logger.log(`${player1.getName()} VS ${player2.getName()}!`);
          const winner = this.battle(player1, player2);
          survivors.push(winner);
        } else if (player1) {
          // Если не хватает соперника, игрок проходит дальше
          survivors.push(player1);
        }
      }

      this.players = survivors;
    }

    Logger.gameOver(this.players[0]);
  }

  private battle(player1: Player, player2: Player): Player {
    // Расчет инициативы
    const initiative1 = Math.random() * 0.5 + player1.getSpeed();
    const initiative2 = Math.random() * 0.5 + player2.getSpeed();

    let first, second;
    if (initiative1 > initiative2) {
      first = player1;
      second = player2;
    } else {
      first = player2;
      second = player1;
    }

    Logger.log(`${first.getName()} starts first!`);

    while (player1.isHeroAlive() && player2.isHeroAlive()) {
      this.processTurn(first, second);
      if (!second.isHeroAlive()) {
        break;
      }
      this.processTurn(second, first);
    }

    const winner = player1.isHeroAlive() ? player1 : player2;
    Logger.death(player1.isHeroAlive() ? player2 : player1);
    Logger.winner(winner);

    winner.healthRestoration();
    return winner;
  }

  private processTurn(attacker: Player, defender: Player): void {
    if (attacker.skipTurn) {
      Logger.log(`${attacker.getName()} is staying still!`);
      attacker.skipTurn = false; // Reset skip turn
      return;
    }

    const action = this.decideAction();
    this.executeAction(action, attacker, defender);

    this.processEffects(attacker);
    this.processEffects(defender);
  }

  private decideAction(): string {
    return Math.random() < 0.7 ? 'attack' : 'ability';
  }

  private executeAction(action: string, attacker: Player, defender: Player): void {
    if (action === 'attack') {
      const isCritical = Math.random() < 0.2;
      if (isCritical) {
        attacker.attackWithCritical(defender);
      } else {
        attacker.attack(defender);
      }
    } else {
      const ability = this.chooseAbility(attacker);
      if (ability) {
        attacker.useAbility(defender);
      } else {
        Logger.log(`${attacker.getName()} has no abilities available and performs a regular attack.`);
        attacker.attack(defender);
      }
    }
  }

  private chooseAbility(attacker: Player): Ability | null {
    return (
      attacker.abilities.find(ability => {
        const usageCount = attacker.getAbilityUsageCount(ability.name);
        return usageCount < ability.usageLimit;
      }) || null
    );
  }

  private processEffects(player: Player): void {
    player.activeEffects.forEach(effect => {
      if (effect.remainingTurns > 0) {
        effect.ability.effect(player);
        effect.remainingTurns--;
      }
    });

    player.activeEffects = player.activeEffects.filter(e => e.remainingTurns > 0);
  }
}

const game = new Game();
game.start();
