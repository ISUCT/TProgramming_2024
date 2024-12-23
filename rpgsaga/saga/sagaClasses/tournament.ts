import { LogHandler } from './logger';
import { Player } from './player';
import { CharacterGenerator } from './playerGen';

export class Tournament {
  players: Player[];

  constructor(playerCount: number) {
    this.players = [];
    if (playerCount % 2 !== 0) {
      throw new Error('Количество игроков должно быть четным.');
    }

    for (let i = 0; i < playerCount; i++) {
      this.players.push(CharacterGenerator.generateRandomPlayer());
    }
  }

  fight(player1: Player, player2: Player): string {
    LogHandler.log(`${player1.name} vs ${player2.name}`);
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
        if (ability.usageLimit > 0) {
          message += player1.useAbility(player2, ability);
        } else {
          message += player1.attack(player2);
        }
      }

      LogHandler.log(message);

      if (player2.health <= 0) {
        LogHandler.log(`${player2.name} is defeated!`);
        player1.refreshAbilityUsages();
        player2.refreshAbilityUsages();
        return `--------${player1.name} wins!--------`;
      }

      if (action2 === 'attack') {
        message = player2.attack(player1);
      } else {
        const ability = player2.abilities[Math.floor(Math.random() * player2.abilities.length)];
        if (ability.usageLimit > 0) {
          message = player2.useAbility(player1, ability);
        } else {
          message = player2.attack(player1);
        }
      }

      player1.updateDebuffs();
      player2.updateDebuffs();

      LogHandler.log(message);

      if (player1.health <= 0) {
        LogHandler.log(`${player1.name} is defeated!`);
        player1.refreshAbilityUsages();
        player2.refreshAbilityUsages();
        return `--------${player2.name} wins!--------`;
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

    LogHandler.log(`--------The winner is ${this.players[0].name}!--------`);
  }
}
