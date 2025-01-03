import { Hero } from "../Hero";

export class _Ability {
    title: string;
    isActive: boolean;
    abilityDamage?: number;
    effect: (enemy: Hero) => number;
}

