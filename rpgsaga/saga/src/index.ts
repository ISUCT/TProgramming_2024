class Gamer {
  protected _health: number;
  protected _strength: number;
  protected _name: string;

  constructor(gamerHealth, gamerStrength, gamerName) {
    this._health = gamerHealth;
    this._strength = gamerStrength;
    this._name = gamerName;
  }
}

class Knight extends Gamer {}

class Vizard extends Gamer {}

class Archer extends Gamer {}
