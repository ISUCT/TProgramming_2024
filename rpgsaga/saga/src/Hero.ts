import { heroNames } from "./connst";
import { MathUt } from "./math";

export class Hero {
    protected health:number;
    protected name:string;
    protected energy:number;

    constructor(){
        this.health=MathUt.random(1,100);
        this.name=heroNames[MathUt.random (0, 20)];
        this.energy=MathUt.random(1,100);
    }

public fightDamager (opponentDamage: number){
    this.health-= opponentDamage;
}
public healthh() {
    return this.health;
}
public get namee () {
    return this.name;
}
public get energyy () {
    return this.energy;
}
}