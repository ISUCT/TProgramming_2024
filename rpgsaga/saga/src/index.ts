import { input } from './utils/input/input';
import { taskA, taskB, output } from './funcAndClass/function';

console.log(output('A', taskA(1.6, 1.2, 3.7, 0.5)));

console.log(output('B', taskB(1.6, [1.28, 1.36, 2.47, 3.68, 4.56])));

input();
