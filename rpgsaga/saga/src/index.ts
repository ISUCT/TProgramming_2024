import { taskA, taskB } from './laba1';
import { Car } from './laba2';

function output(answersX: number[], answersY: number[]): void {
    for (let i = 0; i < answersX.length; i++) {
        console.log(`x = ${answersX[i].toFixed(2)}, y = ${answersY[i].toFixed(2)}`);
    }
}

function main(): void {
    console.log("Бусыгин Андрей Михайлович");
    let [xL, yL] = taskA(1.25, 3.25, 0.4);
    output(xL, yL);
    console.log("__________________");
    [xL, yL] = taskB([1.84, 2.71, 3.81, 4.56, 5.62]);
    output(xL, yL);


    const car1 = new Car('Toyota Corolla', 'Gasoline');
    car1.setSpeed(120);
    car1.displayInfo();
}
main();