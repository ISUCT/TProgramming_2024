import { knight } from "../sagaCode/knight";
import { archer } from "../sagaCode/archer";
import { Player } from "../sagaCode/player";
import { Weapons } from "../sagaCode/constElements";

const gorilla = new knight("Makus",150,0,Weapons.banana);
const legolas = new archer("Леголас",120,0,Weapons.banana);
while(gorilla.health > 0 && legolas.health > 0) {
    legolas.damagedBy(gorilla); 
    console.log(legolas.health);
}
