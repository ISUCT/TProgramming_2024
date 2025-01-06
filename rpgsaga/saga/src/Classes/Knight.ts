import { Character } from "../Character";
import { Logger } from "../logger";

export class Knight extends Character {


    constructor() {
        super();
        this._class = "Рыцарь";
    }


    override useSkill(oponent: Character): void {
        Logger.logKnightStrike(this);

        oponent.fightDamager(this.damage + this.damage * 0.3);
    }
}