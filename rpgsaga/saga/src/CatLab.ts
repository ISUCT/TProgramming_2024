import { Cat } from './LabWithClass/Cat';

let cat = new Cat('Skaya', 10, 'British', 'Male');
console.log(cat);
let cat2 = new Cat('Melmon', 18, 'Tiger', 'Female');
console.log(cat2.age);
cat2.age = 20;
console.log(cat2.age);
