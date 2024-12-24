import { knight } from '../sagaCode/heroClasses/knight';
import { archer } from '../sagaCode/heroClasses/archer';
import { Weapons } from '../sagaCode/constElements';
import { mage } from '../sagaCode/heroClasses/mage';
import { game } from '../sagaCode/game';
import { randomNumber } from '../sagaCode/randomizer';

const player_1 = new knight('Makus', 150,Weapons.sword,false);
const player_2 = new archer('Леголас', 120,Weapons.icedBow,false);
const player_3 = new mage('Колдун', 110,Weapons.wizardStuff,false);



const fight = new game([player_2, player_3]);
fight.start();
