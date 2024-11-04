import { input } from './utils/input/input';
import { taskA, taskB, output } from './funcAndClasses/function/function';
import { Person } from './funcAndClasses/classes/abstract/Person';
import { Accountant } from './funcAndClasses/classes/workers/Accountant';
import { Doctor } from './funcAndClasses/classes/workers/Doctor';

console.log(output('A', taskA(1.6, 1.2, 3.7, 0.5)));

console.log(output('B', taskB(1.6, [1.28, 1.36, 2.47, 3.68, 4.56])));

const accountant: Person = new Accountant('John', 34, 'Male', 'Sberbank', 40000);
const doctor: Person = new Doctor('Mary', 25, 'Female', 'LidEnf', 25000);

const arrOfPersons: Person[] = [accountant, doctor];
for (const pers of arrOfPersons) {
  console.log(pers.workRespons());
}

input();
