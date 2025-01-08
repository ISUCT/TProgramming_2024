import { Player, logger, BaseFightManager, BasePlayersManager, BasePairsManager } from '../services';
import { PlayerFactory } from '../lib';
import { FightManagerBehavior, PlayersManagerBehavior } from '../interfaces';
import { PairsManagerBehavior } from '../interfaces/Manager';

export class Game {
  private _playersCount: number;

  private _players: Player[];

  private _battlePairs: [Player, Player][];

  private _winnersInBattle: Player[][];

  private _winner: Player | null;

  private _gameRound: number;

  private _playerBehavior: PlayersManagerBehavior;

  private _fightBehavior: FightManagerBehavior;

  private _pairsBehavior: PairsManagerBehavior;

  constructor(playersCount: number = 2) {
    this._playersCount = playersCount;
    this._winnersInBattle = [];
    this._winner = null;
    this._gameRound = 0;
    this._players = [];
    this._battlePairs = [];
    this._playerBehavior = new BasePlayersManager(PlayerFactory);
    this._fightBehavior = new BaseFightManager();
    this._pairsBehavior = new BasePairsManager();
  }

  private _updateRound() {
    this._gameRound += 1;
  }

  private _createPlayers(players: number) {
    this._players = this._playerBehavior.createPlayers(players);
  }

  private _createPairs(fighters: Player[]) {
    this._battlePairs = this._pairsBehavior.createPairs(fighters);
  }

  private _fight() {
    const winners: Player[] = [];

    for (const [firstPlayer, secondPlayer] of this._battlePairs) {
      logger.info('----------------------------------------------------------------------');
      logger.info(`Сражение ${firstPlayer.getFullName()} c ${secondPlayer.getFullName()}`);
      const winnerInBattle = this._fightBehavior.fight(firstPlayer, secondPlayer);
      winners.push(winnerInBattle);
      logger.info('----------------------------------------------------------------------');
    }

    this._winnersInBattle.push(winners);
  }

  private _init() {
    this._createPlayers(this._playersCount);
    this._createPairs(this._players);
  }

  public start() {
    this._init();
    this._runBattles();
    this._finish();
  }

  private _runBattles() {
    logger.debug({
      message: 'RUN BATTLES',
    });
    while (!this._winner) {
      if (this._gameRound !== 0) {
        this._createPairs(this._winnersInBattle[this._gameRound - 1]);
      }

      this._fight();
      this._checkAndSetWinnerGame();
      this._updateRound();
    }
  }

  private _checkAndSetWinnerGame() {
    const winnersInRound = this._winnersInBattle[this._gameRound];
    if (winnersInRound?.at(0) && winnersInRound.length === 1) {
      this._winner = winnersInRound[0];
    }
  }

  private _finish() {
    logger.info(`И ПОБЕДИИИТЕЕЕЛЬ - ${this?._winner?.getFullName()}`);
  }
}
