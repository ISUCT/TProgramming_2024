import { Ability } from './ability';

export const abilities: Ability[] = [
  new Ability(
    'Frozen Arrows',
    () => ({
      name: 'Frozen Arrows',
      duration: 2,
      effect: player => {
        player.canAttack = false;
      },
      affectsAttack: true,
    }),
    1,
  ),

  new Ability(
    'Fireball',
    () => ({
      name: 'Fireball',
      duration: 1,
      effect: player => {
        player.health -= 15;
      },
      affectsAttack: false,
    }),
    1,
  ),
];
