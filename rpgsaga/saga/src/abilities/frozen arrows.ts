import { Ability } from './ability';

export class FrozenArrows extends Ability {
  constructor(name = 'Ледяные стрелы', useFrequency = 1, duration = 3, damage = 12, durationDamage = 3) {
    super(name, useFrequency, duration, damage, durationDamage);
  }
}
