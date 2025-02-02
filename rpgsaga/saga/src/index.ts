// import { creatGame } from './utils/input/createGame';

// creatGame();

import { FactoryAbility } from './Ability/FactoryAbility';
import { IAbility } from './Ability/Ability';
import { Knight } from './Characters/Knight';

const FireArch = new FactoryAbility();
const Fire: IAbility[] = [FireArch.createAbilityFromTemplate('удар возмездия')];

const test = new Knight(100, 10, 'Robin', Fire);
const test1 = new Knight(100, 10, 'Robin', Fire);

test.useAbility(test1, 'удар возмездия');
// archer.attack(archer1);
console.log(test);
console.log(test1);
