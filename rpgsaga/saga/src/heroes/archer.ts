import { FireArrows } from "../abilities/fireArrow";
import { Hero } from "./hero";

export class Archer extends Hero {
    health = 30;
    attackPower = 15;
    ability = new FireArrows();
}