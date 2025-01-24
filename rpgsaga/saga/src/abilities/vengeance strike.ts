import { Ability } from './ability';

export class VengeanceStrike extends Ability {
  constructor(name = 'Удар Возмездия', useFrequency = 1, duration = 1, damage = 0, durationDamage = 0) {
    super(name, useFrequency, duration, damage, durationDamage);
  }
}
