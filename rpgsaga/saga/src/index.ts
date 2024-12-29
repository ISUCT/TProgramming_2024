import { taskA, taskB, output } from './functionNum3';
import { Animal } from './Classes/Abstract/Animal';
import { Lion } from './Classes/Animals/Lion';
import { Giraffe } from './Classes/Animals/Giraffe';

const taskARes = taskA(2, 0.95, 1.25, 2.75, 0.3);
console.log(output('A', taskARes));

const taskBRes = taskB(2, 0.95, []);
console.log(output('B', taskBRes));

const giraffe: Animal = new Giraffe('Ashley', 5, 'Plants');
const lion: Animal = new Lion('Pookie', 7, 'Meat');

const arrayOfAnimals: Animal[] = [giraffe, lion];
for(const animal of arrayOfAnimals) {
    console.log(animal.printFoodPreference());
}