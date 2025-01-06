import { knight } from "./heroClasses/knight";
import { archer } from "./heroClasses/archer";
import { mage } from "./heroClasses/mage";
import { Weapon } from "./weapon";
import { Player } from "./playerClass/player";


export function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  export class characterGenerator {
    private knightNames: string[] = ["ChaosKnight", "DragonKnight", "Fighter", "GorillaWarrior", "JohnWick"];
    private archerNames: string[] = ["Legolas", "Robin", "SokolEye", "ArrowMan", "Makus"];
    private mageNames: string[] = ["DarkMage", "Gandalf", "Dumbledore", "SaintMage", "Wizard"];

    private knightWeapons: Weapon[] = [
        new Weapon("Sword", 30),
        new Weapon("Axe", 35),
        new Weapon("Rapier", 27)
    ];

    private archerWeapons: Weapon[] = [
        new Weapon("Longbow", 25),
        new Weapon("Crossbow", 28),
        new Weapon("ClassicBow", 20)
    ];

    private mageWeapons: Weapon[] = [
        new Weapon("Staff", 12),
        new Weapon("Wand", 17),
        new Weapon("MagickStick", 22)
    ];

    createRandomPlayer(): Player {
        const playerType = randomNumber(1, 3); // 1 - Knight, 2 - Archer, 3 - Mage
        switch (playerType) {
            case 1: {
                const name = this.knightNames[randomNumber(0, this.knightNames.length - 1)];
                const weapon = this.knightWeapons[randomNumber(0, this.knightWeapons.length - 1)];
                const health = randomNumber(100, 200); 
                const statusEffect = 2; 
                return new knight(name, health, weapon, statusEffect);
            }
            case 2: {
                const name = this.archerNames[randomNumber(0, this.archerNames.length - 1)];
                const weapon = this.archerWeapons[randomNumber(0, this.archerWeapons.length - 1)];
                const health = randomNumber(80, 150); 
                const statusEffect = 1; 
                return new archer(name, health, weapon, statusEffect);
            }
            case 3: {
                const name = this.mageNames[randomNumber(0, this.mageNames.length - 1)];
                const weapon = this.mageWeapons[randomNumber(0, this.mageWeapons.length - 1)];
                const health = randomNumber(60, 120); 
                const statusEffect = 1; 
                return new mage(name, health, weapon, statusEffect);
            }
            default:
                throw new Error("Invalid player type generated.");
        }
    }

    initializePlayers(count: number): (Player)[] {
        const players: (Player)[] = [];
        for (let i = 0; i < count; i++) {
            players.push(this.createRandomPlayer());
        }
        return players;
    }
}