import { Weapon } from "../Weapon";
import { Player } from "../../Class_players/Player";
export class Paladin_Shield extends Weapon{
    constructor () {
        super("Paladin's shield", 10, 'phys', [5, 2], [5, 2])
    }
}