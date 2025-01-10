import { DEFAULT_PLAYERS_NAME } from '../../constants';
import { AttackBehavior, SideEffectBehavior } from '../../interfaces';
import { getUniqId, randomInt } from '../../lib';
import { Ability } from '../Ability';
import { PlayerAttackImpl } from '../Attack';
import { logger } from '../Logger';
import { AbilityManager, AbilityManagerBehavior } from '../Managers/AbilityManager';

export interface PlayerParams {
  name: string;
  health: number;
  power: number;
}

export abstract class Player {
  private _initialParams: PlayerParams;
  private _role: string;
  private _name: string;
  private _health: number;
  private _isAlive: boolean;
  private _power: number;
  private _id: string;
  protected abilityManager?: AbilityManagerBehavior;
  protected sideEffects?: SideEffectBehavior[];
  protected _attackBehavior: AttackBehavior;

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get health() {
    return this._health;
  }

  get isAlive() {
    return this._isAlive;
  }

  set health(payload: number) {
    if (payload <= 0) {
      this._isAlive = false;
      this._health = payload;
      return;
    }
    this._health = payload;
  }

  get power() {
    return this._power;
  }

  get role() {
    return this._role;
  }

  setRole(arg: string) {
    this._role = arg;
  }

  setAttackBehavior = (Behavior: new (pl: Player) => AttackBehavior) => {
    this._attackBehavior = new Behavior(this);
  };

  public getFullName() {
    return `(${this._role}: id - ${this._id}) ${this._name}`;
  }

  constructor(params?: PlayerParams) {
    const { name, health, power } = params ?? this._generateStats();
    this._name = name;
    this._health = health;
    this._power = power;
    this._isAlive = true;
    this._role = '';

    this._attackBehavior = new PlayerAttackImpl(this);
    this._id = getUniqId();
    this._initialParams = { power, name, health };

    this.sideEffects = [];
  }

  private _generateStats(): PlayerParams {
    return {
      name: DEFAULT_PLAYERS_NAME[randomInt(0, DEFAULT_PLAYERS_NAME.length - 2)],
      health: randomInt(20, 25),
      power: randomInt(4, 6),
    };
  }

  protected setAbilities(abilities: Ability[]): void {
    this.abilityManager = new AbilityManager(abilities);
  }

  public setSideEffects(sideEffects: SideEffectBehavior | SideEffectBehavior[] = []) {
    if (Array.isArray(sideEffects) && sideEffects.length === 0) {
      this.sideEffects = [];
    }

    const _sideEffects = Array.isArray(sideEffects) ? sideEffects : [sideEffects];
    _sideEffects.forEach(el => {
      el.bindToPlayer(this);
    });

    this.sideEffects?.push(..._sideEffects);
  }

  public useSideEffects() {
    this.sideEffects?.forEach(sideEffect => {
      sideEffect?.activate();
    });
  }

  public attack(opponent: Player) {
    this._attackBehavior.attack(opponent);
  }

  public useAbility = (opponent: Player, callback?: () => void) => {
    if (!this?.abilityManager) {
      throw new Error(`ERROR: установите способности игроку ${this?.getFullName()}`);
      return;
    }

    this?.abilityManager.useAbility(opponent, callback);
  };

  public resetToInitial() {
    this._health = this._initialParams.health;
    this._power = this._initialParams.power;
    this.setSideEffects([]);
  }

}
