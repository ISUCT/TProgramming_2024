import { Archer } from "../../nasledniki/Archer";
import { Orc } from "../../nasledniki/Orc";
import { Knight } from "../../nasledniki/Knight";
import { Wizard } from "../../nasledniki/Wizard";

describe('Битва между персонажами', () => {
    let archer: Archer;
    let knight: Knight;
    let enemy: Orc;
    let wizard: Wizard;

    beforeEach(() => {
        archer = new Archer('Эльдар', 80, 5, 30);
        enemy = new Orc('Гулдан', 150, 20, 0);
        knight = new Knight('Артур', 50, 15, 0);
        wizard = new Wizard('Гэндальф', 70, 10, 50);
    });

    test('Кон 1', () => {
        console.log(`Кон 1.`);
        console.log(`(${archer.getName}) vs (${knight.getName})`);

        console.log(archer.attack(knight));
        console.log(`(${knight.getName}) здоровье: ${knight.getHealth}`);

        console.log(knight.attack(archer)); 
        console.log(`(${archer.getName}) здоровье: ${archer.getHealth}`);

        if (!archer.getIsAlive) {
            console.log(`(${archer.getName}) погибает`);
        }

        console.log(`\n(${wizard.getName}) vs (${knight.getName})`);

        console.log(knight.attack(wizard));
        console.log(`(${wizard.getName}) здоровье: ${wizard.getHealth}`);

        if (!wizard.getIsAlive) {
            console.log(`(${wizard.getName}) погибает`);
        }
    });

    test('Кон 2: Битва между Рыцарем и Орком', () => {
        console.log(`Кон 2.`);
        console.log(`(${knight.getName}) vs (${enemy.getName})`);

        console.log(knight.attack(enemy));
        console.log(`(${enemy.getName}) здоровье: ${enemy.getHealth}`);

        console.log(enemy.attack(knight));
        console.log(`(${knight.getName}) здоровье: ${knight.getHealth}`);

        if (!knight.getIsAlive) {
            console.log(`(${knight.getName}) погибает`);
        } else {
            console.log(`(${knight.getName}) выживает!`);
        }

        if (!enemy.getIsAlive) {
            console.log(`(${enemy.getName}) погибает`);
        } else {
            console.log(`(${enemy.getName}) выживает!`);
        }
    });

});