import { Ability } from './ability';

export class MainAttack extends Ability {
  constructor(name = 'Основная атака', useFrequency = -999, duration = 1, damage = 0, durationDamage = 0) {
    super(name, useFrequency, duration, damage, durationDamage);
  }
}
