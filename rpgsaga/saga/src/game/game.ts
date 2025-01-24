import { Player } from '../players roles/player';
import { Logger } from '../logger/log';
import { PlayerFactory } from '../player factory/player factory';

export class Game {
  private _players: Player[];
  private _playersCount: number;
  private _playersNames: string[];
  logger: Logger;
  playerFactory: PlayerFactory;

  
  constructor(playersCount: number) {
    this._players = []; 
    this._playersCount = playersCount; 
    this._playersNames = [
      'Рагнар', 
      'Бьёрн',
      'Эйрик',
      'Лейф',
      'Харальд',
      'Сигурд',
      'Ивар',
      'Торстейн',
      'Ульф',
      'Фрейр',
      'Фрейя',
      'Астрид',
      'Сигрид',
      'Хельга',
      'Инга',
    ];
    this.logger = Logger.getInstance();
    this.playerFactory = new PlayerFactory();
  }

  public get players(): Player[] {
    return this._players;
  }

  
  public gettingRandomNumber(min: number, max: number): number {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  
  public randomIndexesFromArray(arrLen: number): number[] {
    let index1 = this.gettingRandomNumber(0, arrLen - 1); 
    const index2 = this.gettingRandomNumber(0, arrLen - 1); 
    while (index1 === index2) {
      index1 = this.gettingRandomNumber(0, arrLen - 1);
    }
    const sortedIndexes = [index1, index2].sort(); 
    return sortedIndexes;
  }

  
  public randomElementFromStringArray(array: string[]): string {
    const index1 = this.gettingRandomNumber(0, array.length - 1);
    return array[index1];
  }

  
  setPlayers() {
    
    for (let i = 0; i < this._playersCount; i++) {
      const hp = this.gettingRandomNumber(80, 100); 
      const strength = this.gettingRandomNumber(10, 20); 
      const name = this._playersNames[this.gettingRandomNumber(0, this._playersNames.length - 1)]; 
      const roleNumber = this.gettingRandomNumber(1, 3); 
      const player = this.playerFactory.createPlayer(hp, strength, name, roleNumber); 
      this._players.push(player); 
      this.logger.createLog(
        `Игрок (${player.roleName})${player.name}, ${player.hp} здоровья, ${player.strength} силы был создан!`, 
      );
    }
  }

  public performPlayerTurn(attacker: Player, defender: Player): void {
    
    if (attacker.canThisPlayerAttack) {
      const ability = attacker.selectRandomAbility(); 
      this.logger.createLog(attacker.useAbility(defender, ability));
    } else {
      attacker.canThisPlayerAttack = true; 
      attacker.checkForAbilitiesDamages(); 
      this.logger.createLog(
        `(${attacker.roleName})${attacker.name} пропускает свой ход, потому что его заворожил (${defender.roleName})${defender.name} в предыдущем шаге.`,
      );
    }
  }

  
  public determineWinner(player1: Player, player2: Player): Player {
    if (player1.alive === 0) {
      
      this.logger.createLog(`(${player1.roleName})${player1.name} принимает поражение.`);
      return player2;
    } else {
      
      this.logger.createLog(`(${player2.roleName})${player2.name} принимает поражение.`);
      return player1;
    }
  }

  public fight(player1: Player, player2: Player): Player {
    this.logger.createLog(`
Бой (${player1.roleName})${player1.name} и (${player2.roleName})${player2.name} начался!`);

    
    const player1Copy = this.playerFactory.createPlayer(player1.hp, player1.strength, player1.name, player1.roleNumber);
    const player2Copy = this.playerFactory.createPlayer(player2.hp, player2.strength, player2.name, player2.roleNumber);

    let round = 0;

    
    while (player1.alive === 1 && player2.alive === 1) {
      round += 1;

      if (round % 2 !== 0) {
        this.performPlayerTurn(player1, player2); 
      } else {
        this.performPlayerTurn(player2, player1); 
      }
    }

    
    return this.determineWinner(player1Copy, player2Copy);
  }

  fightRound(players: Player[]): Player[] {
    const survivors: Player[] = [];
    let winner: Player;
    let fightNumber = 0;
    let playersNumbers: number[];
    while (players.length > 1) {
      
      fightNumber += 1;
      this.logger.createLog(`
Бой ${fightNumber}.`);
      playersNumbers = this.randomIndexesFromArray(this._players.length); 
      winner = this.fight(this._players[playersNumbers[0]], this._players[playersNumbers[1]]); 
      survivors.push(winner); 
      players.splice(Math.min(playersNumbers[0], playersNumbers[1]), 1); 
      players.splice(Math.max(playersNumbers[0], playersNumbers[1]) - 1, 1);
    }
    if (players.length === 1) {
      
      survivors.push(players[0]);
    }
    return survivors;
  }

  startFights() {
    let roundNumber = 0; // это кон
    while (this._players.length !== 1) {
      
      roundNumber += 1;
      this.logger.createLog(`
Кон ${roundNumber}.`); 
      const survivors = this.fightRound(this._players); 
      this._players = survivors; 
      if (this._players.length === 1) {
        this.logger.createLog(`
Победитель турнира: ${this._players[0].name}!`);
      }
    }
  }

  run() {
    this.setPlayers(); 
    this.startFights(); 
  }
}

