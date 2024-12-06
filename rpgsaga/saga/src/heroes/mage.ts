import { Hero } from "./hero";
import { Backfire } from "../abilities/backfire";

export class Mage extends Hero {
    health = 70;
    attackPower = 5;
    ability = new Backfire();
}