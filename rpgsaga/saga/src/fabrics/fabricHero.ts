import { Hero } from "../lastlab/Hero";
import { Archer } from "../nasledniki/Archer";
import { Knight } from "../nasledniki/Knight";
import { Orc } from "../nasledniki/Orc";
import { Wizard } from "../nasledniki/Wizard";
import { _Ability } from "../lastlab/ability";
import { fabricArcher } from "./fabricArcher";
import { fabricKnight } from "./fabricKnight";
import { fabricOrc } from "./fabricOrc";
import { fabricWizard } from "./fabricWizard";
import { getRandomElement } from "../lastlab/randomizerArrayElement";
import { get } from "http";
import { stringify } from "querystring";

const archerNames: string[] = ["Леголас", "Соколиный Глаз", "Миракл", "Робин Гуд", "Венди"];
const knightNames: string[] = ["Генрих", "Фридрих", "Ровооам", "Боб", "Коул"];
const orcNames: string[] = ["Гнолл", "Гразоб", "Гришнакх", "Гулдан", "Гуларзоб", "Кракнур", "Фаргул", "Рагнар", "Зугрор"];
const wizardNames: string[] = ["Дизраптор", "Рубик", "Варлок", "Кристал Мэйден", "Пугна", "Малфурион", "Инвокер"];

export class fabricHero {
    public createRandomHero(): Hero {
        const heroType = getRandomElement(["archer", "knight", "orc", "wizard"]);
        switch (heroType) {
            case "archer":
                return this.createRandomArcher();
            case "knight":
                return this.createRandomKnight();
            case "orc":
                return this.createRandomOrc();
            case "wizard":
                return this.createRandomWizard();
            default:
                throw new Error ("Неизвестный класс");
        }
    }

    createRandomArcher(): Archer {
        const name = getRandomElement(archerNames);
        const health = getRandomElement([80, 85, 90, 95, 100]);
        const strength = getRandomElement([15, 16, 17, 18, 19, 20]);
        const mana = getRandomElement([30, 35, 40, 45]);
        return new Archer(name, health, strength, mana);
    }

    createRandomKnight(): Knight {
        const name = getRandomElement(knightNames);
        const health = getRandomElement([95, 100, 105, 110, 115, 120]);
        const strength = getRandomElement([15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
        const mana = getRandomElement([10, 15, 20, 25]);
        return new Knight(name, health, strength, mana);
    }

    createRandomOrc(): Orc {
        const name = getRandomElement(orcNames);
        const health = getRandomElement([105, 110, 115, 120, 125, 130, 135]);
        const strength = getRandomElement([15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
        const mana = getRandomElement([15, 20, 25, 30]);
        return new Orc(name, health, strength, mana);
    }

    createRandomWizard(): Wizard {
        const name = getRandomElement(wizardNames);
        const health = getRandomElement([75, 80, 85, 90, 95, 100]);
        const strength = getRandomElement([18, 19, 20, 21, 22, 23, 24, 25]);
        const mana = getRandomElement([30, 35, 40, 45]);
        return new Wizard(name, health, strength, mana);
    }

    createPlayers(players: number): Hero[] {
        const playerArray: Hero[] = [];
        for (let i = 0; i < players; i++) {
            playerArray.push(this.createRandomHero());
        }
        return playerArray;
    }

    formatHero(hero: Hero): string {
        return `
        Класс: ${hero.getClassType}
        Имя: ${hero._name}
        Здоровье: ${hero._health}
        Сила: ${hero._strength}
        Мана: ${hero._mana}
        `
    }

}


// првоерка 

const heroFactory = new fabricHero();
const players = heroFactory.createPlayers(2);
players.forEach((player, index) => {
    console.log(heroFactory.formatHero(player));
    const enemy = players[(index +1) % players.length]
    console.log(player.useAbility(enemy))
})