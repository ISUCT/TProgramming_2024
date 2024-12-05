export abstract class Player {
  _alive: boolean;
  _silence: boolean;
  _rpgClass: string;
  _name: string;
  _healthPoints: number;
  _strength: number;
  _agility: number;
  _intelligence: number;
  constructor(
    alive: boolean,
    silence: boolean,
    rpgClass: string,
    name: string,
    healthPoints: number,
    strength: number,
    agility: number,
    intelligence: number,
  ) {
    this._alive = alive;
    this._silence = silence;
    this._rpgClass = rpgClass;
    this._name = name;
    this._healthPoints = healthPoints;
    this._strength = strength;
    this._agility = agility;
    this._intelligence = intelligence;
  }
  public takeDamage(damage: number, getSilenced: string): string {
    if (damage == null && getSilenced != 'silence') {
      return `${this._name} не получал урона`;
    } else if (getSilenced == 'silence') {
      this._silence = true;
      return `${this._name} обезмолвлен`;
    } else {
      this._healthPoints = this._healthPoints - damage;
      return `${this._name} впитал ${damage} урона.`;
    }
  }

  public checkLiveStatus(): void {
    if (this._healthPoints > 0) {
    } else {
      this._alive = false;
    }
  }

  public set backHP(hp: number) {
    this._healthPoints = hp;
    return;
  }

  public playerRoundResults(): string {
    if (this._alive) {
      return `Персонаж ${this._name} выжил. У него ${this._healthPoints} хп`;
    } else {
      return `💀Персонаж ${this._name} умер.💀`;
    }
  }
  abstract attack(kd: number): [number, number, string];
}
