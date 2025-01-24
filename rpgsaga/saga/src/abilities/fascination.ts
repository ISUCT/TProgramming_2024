import { Ability } from './ability';

export class Fascination extends Ability {
  constructor(name = 'Заворожение', useFrequency = 1, duration = 1, damage = 0, durationDamage = 0) {
    super(name, useFrequency, duration, damage, durationDamage);
  }
}
