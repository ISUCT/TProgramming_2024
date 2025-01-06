import { Character } from "../Character";
import { Logger } from "../logger";

export class Mag extends Character{
    underProtectionFlag: boolean = false

    constructor(){
        super();
        this._class= "Ведьма";
    }


    override useSkill(oponent:Character): void {
        Logger.logMagSkill(this);
        this.underProtectionFlag = true;
      }

    override fightDamager(opDamager: number): void {
        if (this.underProtectionFlag){
           Logger.logProteced(this);
            this.underProtectionFlag = false;
        }
        else {
            this._health -= opDamager;
        }
    }

}
