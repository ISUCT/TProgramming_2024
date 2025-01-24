export abstract class Ability {
  
  private _name: string;
  private _duration: number;
  private _useFrequency: number;
  private _damage: number;
  private _durationDamage: number;

  constructor(name: string, useFrequency: number, duration: number, damage: number, durationDamage: number) {
    this._name = name;
    this._useFrequency = useFrequency;
    this._duration = duration;
    this._damage = damage;
    this._durationDamage = durationDamage;
  }

  
  get name(): string {
    return this._name;
  }

  get damage(): number {
    return this._damage;
  }

  
  public changeUseFrequency(newUseFrequency: number) {
    this._useFrequency = newUseFrequency; 
  }

  get useFrequency(): number {
    return this._useFrequency;
  }

  get duration(): number {
    return this._duration;
  }

  
  setCalculatedDamage(damage: number) {
    this._damage = damage; 
  }

  decreaseDuration(): void {
    this._duration -= 1; 
  }

  decreaseUseFrequency(): void {
    this._useFrequency -= 1;
  }

  get durationDamage(): number {
    return this._durationDamage;
  }
}
