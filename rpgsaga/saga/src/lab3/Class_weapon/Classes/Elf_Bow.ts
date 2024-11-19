import { Weapon } from "../Weapon";
import { Player } from "../../Class_players/Player";
export class Elf_Bow extends Weapon{
    constructor () {
        super("Elf's bow", 40, [0, 1], [0, 1], 'pure')
    }
}