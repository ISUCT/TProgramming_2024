import { Debuff } from "../Debuff";
import { damage_types } from "../../Utils/list_damage_types";

export class Burning extends Debuff{
    constructor() {
        super(3, 0, 10, damage_types.mag, false);
    }
}