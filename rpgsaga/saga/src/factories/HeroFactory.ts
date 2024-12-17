import { Hero, Knight, Mage, Archer } from "./Hero";

export class HeroFactory {
    static createHero(type: string, name: string, health: number, strength: number): Hero {
        switch (type) {
            case "Knight":
                return new Knight(name, health, strength);
            case "Mage":
                return new Mage(name, health, strength);
            case "Archer":
                return new Archer(name, health, strength);
            default:
                throw new Error("Invalid hero type.");
        }
    }

    static generateRandomHeroes(count: number): Hero[] {
        const types = ["Knight", "Mage", "Archer"];
        const heroes: Hero[] = [];
        const names = ["Arthur", "Gandalf", "Robin", "Lancelot", "Merlin", "Elena"];

        for (let i = 0; i < count; i++) {
            const randomType = types[Math.floor(Math.random() * types.length)];
            const randomName = names[Math.floor(Math.random() * names.length)];
            const health = Math.floor(Math.random() * 100) + 50;
            const strength = Math.floor(Math.random() * 20) + 10;
            heroes.push(HeroFactory.createHero(randomType, randomName, health, strength));
        }

        return heroes;
    }
}
