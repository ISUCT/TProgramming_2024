import { Player } from '../Players';

export abstract class SideEffect {
  protected _player: Player;

  protected _isActiveEffect: boolean;

  protected _usageCounter: number;

  private _maxUsageCount: number;

  constructor(maxUsageCount: number = 1) {
    this._isActiveEffect = true;
    this._usageCounter = 0;
    this._maxUsageCount = maxUsageCount;
  }

  public bindToPlayer(player: Player): void {
    this._player = player;
  }

  protected checkUser(): boolean {
    if (!this._player) {
      console.error('Bind User for usage');
      return false;
    }
    return true;
  }

  protected _updateUsability() {
    this._usageCounter += 1;

    if (this._usageCounter >= this._maxUsageCount) {
      this._isActiveEffect = false;
    }
  }
}