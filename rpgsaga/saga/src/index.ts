import { Archer } from './Character/Archer';
// import { Mage } from './Character/Mage';

// // Попытка установления неверного заначения
// try {
//   warrior.health = -10;
// } catch (err) {
//   console.log(err);
// }

const archer = new Archer('Charly', 'Archer', 200, 200);

// console.log(warrior);
archer.toString();

archer.health = 10;

archer.toString();
