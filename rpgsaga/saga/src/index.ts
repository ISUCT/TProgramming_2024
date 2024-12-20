import { knight } from '../sagaCode/heroClasses/knight';
import { archer } from '../sagaCode/heroClasses/archer';
import { Player } from '../sagaCode/playerClass/player';
import { Abilities } from '../sagaCode/abilities/abilities';
import { Weapons } from '../sagaCode/constElements';
import { mage } from '../sagaCode/heroClasses/mage';
import { game } from '../sagaCode/game';

const player_1 = new knight('Makus', 150, 0, Weapons.banana);
const player_2 = new archer('Леголас', 120, 0, Weapons.banana);

game(player_1,player_2)
