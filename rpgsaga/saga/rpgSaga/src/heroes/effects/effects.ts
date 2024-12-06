import { Hero } from "../heroes/hero";

export abstract class Effect {
    abstract apply(target: Hero): void;
}