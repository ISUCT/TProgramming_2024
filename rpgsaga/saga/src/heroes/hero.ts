import { Ability } from "../abilities/abilities";

export abstract class Hero {
    health: number;
    attackPower: number;
    ability: Ability;
    nextAbilitySelf: boolean;

    attack(target: Hero) {
        console.log(`${this.constructor.name} атакует ${target.constructor.name}!`);
        target.takeDamage(this.attackPower);
    }

    takeDamage(damage: number) {
        this.health -= damage;
        console.log(`${this.constructor.name} получает ${damage} урона. Здоровье: ${this.health}`);
    }

    useAbility(target: Hero) {
        if (this.nextAbilitySelf) {
            console.log(`${this.constructor.name} использует способность на самом себе!`);
            this.ability.use(this);
            this.nextAbilitySelf = false;
        } else {
            this.ability.use(target);
        }
    }
}