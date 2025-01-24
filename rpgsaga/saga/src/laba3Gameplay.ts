import { Player } from './laba3CreatingPlayer';
import { Mage} from './classes/laba3Mage';
import { Knight} from './classes/laba3Knight';
import { Archer} from './classes/laba3Archer';
import { Logs } from './laba3Logs';

export class Game {
  private players: Player[] = [];
  private logs: Logs;

  constructor(players: Player[]) {
    this.logs = new Logs();
    this.players = players;
  }

  // Отображение списка игроков
  private displayPlayersInfo(): void {
    this.logs.log('\nСписок игроков:');
    this.players.forEach((player, index) => {
      const ability = player.getSelectedAbility() || 'Нет способности';
      this.logs.log(
        `${index + 1}. ${player.getName()} (${player.constructor.name}): Здоровье = ${player.getHealth()}, Сила = ${player.getStrength()}, Способность = ${ability}`,
      );
    });
    this.logs.log('\n');
  }

  // Начало игры
  public start(): void {
    this.displayPlayersInfo(); // Отображаем список игроков перед началом боя

    while (this.players.length > 1) {
      this.logs.log(`\nКон ${this.logs.getTour() + 1}`);
      this.fight();
      this.logs.setTour(this.logs.getTour() + 1);
    }
    this.logs.logWinner(this.players[0]);
    this.logs.logChampion(this.players[0]);
  }

  // Проведение раунда боя
  private fight(): void {
    // Восстанавливаем здоровье всех живых бойцов перед началом раунда
    this.players.forEach(player => {
      player.restoreHealth();
      if (player instanceof Mage) {
        (player as Mage).resetAbilityUsed();
      } else if (player instanceof Knight) {
        (player as Knight).resetAbilityUsed();
      } else if (player instanceof Archer) {
        (player as Archer).resetFireArrowsUsed();
        (player as Archer).resetIceArrowsUsed();
      }
  
      // Выбираем случайную способность для персонажа, если они есть
      const abilities = player.getAbilities();
      if (abilities.length > 0) {
        const selectedAbility = abilities[Math.floor(Math.random() * abilities.length)];
        player.setSelectedAbility(selectedAbility);
      }
    });
  
    let shuffledPlayers = this.shuffleArray(this.players);
  
    // Проверяем, чтобы в парах не было одинаковых персонажей
    for (let i = 0; i < shuffledPlayers.length; i += 2) {
      const player1 = shuffledPlayers[i];
      const player2 = shuffledPlayers[i + 1];
      if (player1 && player2 && player1.constructor.name === player2.constructor.name) {
        // Если типы одинаковые, меняем местами с следующим игроком
        if (i + 2 < shuffledPlayers.length) {
          [shuffledPlayers[i + 1], shuffledPlayers[i + 2]] = [shuffledPlayers[i + 2], shuffledPlayers[i + 1]];
        }
      }
    }
  
    // Проводим бои
    for (let i = 0; i < shuffledPlayers.length; i += 2) {
      const player1 = shuffledPlayers[i];
      const player2 = shuffledPlayers[i + 1];
      if (player1 && player2) {
        this.logs.logFight(player1, player2, 'vs');
        this.battle(player1, player2);
      }
    }
    this.players = this.players.filter(player => !player.getIsDead());
  }

  // Бой между двумя игроками
  private battle(player1: Player, player2: Player): void {
    let isPlayer1Turn = true; // Флаг для отслеживания, чей ход
  
    while (!player1.getIsDead() && !player2.getIsDead()) {
      // Применяем эффекты способностей для обоих игроков
      if (player1 instanceof Archer) {
        (player1 as Archer).applyAbilityEffects(player2, this.logs);
      }
      if (player2 instanceof Archer) {
        (player2 as Archer).applyAbilityEffects(player1, this.logs);
      }
  
      // Применяем эффект оглушения для обоих игроков
      player1.applyStunEffect();
      player2.applyStunEffect();
  
      if (isPlayer1Turn) {
        // Ход игрока 1
        if (player1.getSkipNextTurn()) {
          this.logs.log(`${player1.getName()} пропускает ход из-за оглушения.`);
          player1.setSkipNextTurn(false); // Сбрасываем флаг после пропуска хода
        } else {
          this.makeMove(player1, player2); // Игрок 1 атакует
          // Если игрок 2 оглушен, он пропустит следующий ход
          if (player2.isCurrentlyStunned()) {
            player2.setSkipNextTurn(true);
          }
        }
      } else {
        // Ход игрока 2
        if (player2.getSkipNextTurn()) {
          this.logs.log(`${player2.getName()} пропускает ход из-за оглушения.`);
          player2.setSkipNextTurn(false); // Сбрасываем флаг после пропуска хода
        } else {
          this.makeMove(player2, player1); // Игрок 2 атакует
          // Если игрок 1 оглушен, он пропустит следующий ход
          if (player1.isCurrentlyStunned()) {
            player1.setSkipNextTurn(true);
          }
        }
      }
  
      // Переключение хода
      isPlayer1Turn = !isPlayer1Turn;
    }
  
    // Логирование результата боя
    if (player1.getIsDead()) {
      this.logs.logLoser(player1);
      this.logs.logWinner(player2);
    } else {
      this.logs.logLoser(player2);
      this.logs.logWinner(player1);
    }
  }
  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  private makeMove(attacker: Player, target: Player): void {
    if (Math.random() < 0.5) {
      attacker.attack(target, this.logs); // Обычная атака
    } else {
      const selectedAbility = attacker.getSelectedAbility();
      if (selectedAbility && attacker.getAbilities().includes(selectedAbility)) {
        attacker.useAbility(target, this.logs); // Использование способности
        attacker.setSelectedAbility(null); // Сбрасываем выбранную способность после использования
      } else {
        attacker.attack(target, this.logs); // Если способность не выбрана или недопустима, атакуем
      }
    }
  }
}