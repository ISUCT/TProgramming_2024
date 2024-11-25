import { Weapons } from '../sagaClasses/lists';
import { Mage } from '../sagaClasses/mage';
import { Ranger } from '../sagaClasses/ranger';
import { Warrior } from '../sagaClasses/warrior';

import { labTests } from './labsOutput';

console.log('Hello world');
// labTests();
const axe = new Warrior('Axe', 150, Weapons.dryn, 200);
const cm = new Mage('Crystal Maiden', 100, Weapons.magicStuff, 300);
const drowRanger = new Ranger('Drow Ranger', 100, Weapons.bow, 300);
// console.log(cm.displayInfo());
while (axe.isAlive && drowRanger.isAlive) {
  axe.attackedBy(drowRanger);
  console.log(axe.displayInfo());
  drowRanger.attackedBy(axe);
  console.log(drowRanger.displayInfo());
}
