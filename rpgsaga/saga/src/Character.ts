import { Calculator } from "./Calculator";
import { RandomName } from "./const";



export class Сharacter {
    protected health: number;
    protected damage: number;
    protected name: string;
    protected maxHealth: number;
    
    constructor() {
        this.maxHealth = Calculator.random(100, 250);
        this.damage = Calculator.random(10, 50);
        this.name = RandomName[Calculator.random(0, RandomName.length-1)];
        this.health = this.maxHealth;
        this.lookchar();
        
    }
    public lookchar() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Damage: ${this.damage}`);
    }
    public getDamage(){
        return this.damage;
    }
    public takeDamage(myDamage: number){
        this.health -= myDamage;
        console.log(`${this.name} получил ${myDamage} урона. Осталост ${this.health} здоровья.` );
    }
    public lookHears(){
        return this.health;
    }
    public getName(){
        return this.name;
    }
    public reHealth(){
        this.health = this.maxHealth;
    }

}
  
