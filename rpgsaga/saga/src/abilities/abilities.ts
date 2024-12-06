import { Hero } from '../heroes/hero';
import { Effect } from '../effects/effects';

export abstract class Ability {
    damage: number;
    effect: Effect;

    abstract use(target: Hero): void;
}