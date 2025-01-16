import { DamageType } from '../Classes/Ability';

export class Weapon {
  constructor(
    public name: string,
    public damage: number,
    public damageType: DamageType,
  ) {}
}
