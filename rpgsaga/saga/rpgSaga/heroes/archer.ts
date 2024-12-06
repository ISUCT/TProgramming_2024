import { FireArrows } from "../abilities/fireArrow";
import { Hero } from "./hero";

export class Archer extends Hero {
    constructor() {
        super(30, 15, new FireArrows());
    }
}