import { Knight } from "./heroClasses/knight";
import { Archer } from "./heroClasses/archer";
import { Mage } from "./heroClasses/mage";
import { Weapon } from "./weapon";
import { Player } from "./playerClass/player";


export function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  export class characterGenerator {
    private knightNames: string[] = ["ChaosKnight", "DragonKnight", "Fighter", "GorillaWarrior", "JohnWick", "Johanson", "MonkeySoldier", "CaptainBanana"];
    private archerNames: string[] = ["Legolas", "Robin", "SokolEye", "ArrowMan", "Makus", "Strelok", "Shooter", "GhettoGunner"];
    private mageNames: string[] = ["DarkMage", "Gandalf", "Dumbledore", "SaintMage", "Wizard","Coldun", "Magician","MagicEnjoyer"];

    private knightWeapons: Weapon[] = [
        new Weapon("Меч", 30),
        new Weapon("Топор", 35),
        new Weapon("Рапира", 27)
    ];

    private archerWeapons: Weapon[] = [
        new Weapon("Длинный лук", 25),
        new Weapon("Арбалет", 28),
        new Weapon("Лук", 20)
    ];

    private mageWeapons: Weapon[] = [
        new Weapon("Посох", 12),
        new Weapon("Жезл", 17),
        new Weapon("Волшнебная палочка", 22)
    ];

    createRandomPlayer(): Player {
        const playerType = randomNumber(1, 3); // 1 - Knight, 2 - Archer, 3 - Mage
        switch (playerType) {
            case 1: {
                const name = this.knightNames[randomNumber(0, this.knightNames.length - 1)];
                const weapon = this.knightWeapons[randomNumber(0, this.knightWeapons.length - 1)];
                const health = randomNumber(100, 200); 
                const statusEffect = 2; 
                return new Knight(name, health, weapon, statusEffect);
            }
            case 2: {
                const name = this.archerNames[randomNumber(0, this.archerNames.length - 1)];
                const weapon = this.archerWeapons[randomNumber(0, this.archerWeapons.length - 1)];
                const health = randomNumber(80, 150); 
                const statusEffect = 1; 
                return new Archer(name, health, weapon, statusEffect);
            }
            case 3: {
                const name = this.mageNames[randomNumber(0, this.mageNames.length - 1)];
                const weapon = this.mageWeapons[randomNumber(0, this.mageWeapons.length - 1)];
                const health = randomNumber(60, 120); 
                const statusEffect = 1; 
                return new Mage(name, health, weapon, statusEffect);
            }
            default:
                throw new Error("Неверный тип персонажа сгенерирован");
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