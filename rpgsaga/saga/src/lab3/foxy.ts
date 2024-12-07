// Variant: 2 - Foxy!
// Author: Kozlov Egor
import { Animal } from './animal';

const WRONG_DAMAGE_FORMAT = new Error('Wrong damage format');

export class Foxy extends Animal {
  private _damageLevel: number;

  constructor(name: string, birthdate: Date, color: string, damageLevel: number) {
    super(name, birthdate, color);
    this._damageLevel = damageLevel;
    if (this._damageLevel < 0) {
      throw WRONG_DAMAGE_FORMAT;
    }
  }

  get damageLevel(): number {
    return this._damageLevel;
  }

  override getView(): string {
    return '=^-^=';
  }
}
