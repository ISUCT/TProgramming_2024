import { CharacterGenerator } from '../Classes/charGenerator';
import { Player } from '../Player/Player';

export class LogHandler {
  static log(message: string): void {
    console.log(message);
  }
}
export class Tournament {
  private players: Player[];

  constructor(playerCount: number) {
    if (playerCount % 2 !== 0) {
      throw new Error('The number of players must be even.');
    }
    this.players = Array.from({ length: playerCount }, () => CharacterGenerator.generateRandomPlayer());
  }

  private getPlayerStatus(player: Player): string {
    return `${player.name} |${player.playerClass}| — Health: ${player.health}/${player.maxHealth}`;
  }

  private fight(player1: Player, player2: Player): string {
    LogHandler.log(`Fight starts: ${this.getPlayerStatus(player1)} vs ${this.getPlayerStatus(player2)}`);
    player1.restoreHealth();
    player2.restoreHealth();

    while (player1.health > 0 && player2.health > 0) {
      const action1 = Math.random() > 0.5 ? 'attack' : 'ability';
      const action2 = Math.random() > 0.5 ? 'attack' : 'ability';

      let message = '';

      if (action1 === 'attack') {
        message += player1.attack(player2);
      } else {
        const ability = player1.abilities[Math.floor(Math.random() * player1.abilities.length)];
        message += ability.usageLimit > 0 ? player1.useAbility(player2, ability) : player1.attack(player2);
      }

      LogHandler.log(message);
      LogHandler.log(`State after action ${player1.name}: ${this.getPlayerStatus(player2)}`);

      if (player2.health <= 0) {
        LogHandler.log(`${player2.name} |${player2.playerClass}| defeated!`);
        player1.refreshAbilityUsages();
        player2.refreshAbilityUsages();
        return `--------${player1.name} |${player1.playerClass}| wins!--------`;
      }

      // Действие второго игрока
      if (action2 === 'attack') {
        message = player2.attack(player1);
      } else {
        const ability = player2.abilities[Math.floor(Math.random() * player2.abilities.length)];
        message = ability.usageLimit > 0 ? player2.useAbility(player1, ability) : player2.attack(player1);
      }

      player1.updateDebuffs();
      player2.updateDebuffs();
      LogHandler.log(message);
      LogHandler.log(`State after action ${player2.name}: ${this.getPlayerStatus(player1)}`);

      if (player1.health <= 0) {
        LogHandler.log(`${player1.name} |${player1.playerClass}| defeated!`);
        player1.refreshAbilityUsages();
        player2.refreshAbilityUsages();
        return `--------${player2.name} |${player2.playerClass}| wins!--------`;
      }
    }

    return '';
  }

  startTournament(): void {
    LogHandler.log('Tournament starts!');
    while (this.players.length > 1) {
      const [player1, player2] = this.players.splice(0, 2);
      const result = this.fight(player1, player2);
      LogHandler.log(result);
      this.players.push(player1.health > 0 ? player1 : player2);
    }
    LogHandler.log(`--------Tournament Winner: ${this.players[0].name} |${this.players[0].playerClass}|--------`);
  }
}
