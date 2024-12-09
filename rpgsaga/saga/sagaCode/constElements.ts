import { Weapon } from "./weapon";

export const Weapons = {
    banana: new Weapon("Банан",10,"melee"),
    sword: new Weapon("Меч",15,"melee"),
    bow: new Weapon("Лук",18,"ranged"),
    crossbow: new Weapon("Арбалет",20,"ranged"),
    wizardStuff: new Weapon("Волшебный посох", 17,"ranged")
}