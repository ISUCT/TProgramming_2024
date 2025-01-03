import { Knight } from "../nasledniki/Knight";
import { Archer } from "../nasledniki/Archer";
import { Wizard } from "../nasledniki/Wizard";
import { Hero } from "./Hero";
import { Orc } from "../nasledniki/Orc";
import { Logger } from "./Logger";

export class Game {
    private players: Hero[] = [];

    constructor(playerCount: number){
        this.initializePlayers(playerCount);
    }

    private initializePlayers(playerCount: number) {
        const names = ["Эльдар", "Артур", "Гэндальф", "Вильямс", "Леголас", "Думгард", "Мерлин", "Гарри"];

        for (let i = 0; i < playerCount; i++) {
            const name = names[i % names.length];
            const health = Math.floor(Math.random() * 100) + 50;
            const strength = Math.floor(Math.random() * 20) + 10;
            const mana = Math.floor(Math.random() * 50) + 20;
            const playerType = Math.floor(Math.random() * 4) //Рыцарь лучник маг и орк
            
            switch(playerType) {
                case 0:
                    this.players.push(new Knight(name, health, strength, mana));
                    break;
                case 1:
                    this.players.push(new Wizard(name, health, strength, mana));
                    break;
                case 2:
                    this.players.push(new Archer(name, health, strength, mana));
                    break;
                case 3:
                    this.players.push(new Orc(name, health, strength, mana));
                    break;
            }
        }
    }

    public startBattle() {
        Logger.log("Игра начинается");
        let round = 1

        while (this.players.length > 1) {
            Logger.log(`${round} Раунд:`);

            const duel = this.getRandomPairs();

            for (const [player1, player2] of duel) {
                this.battle(player1, player2);
            }

            this.players = this.players.filter(player => player.isAlive);
            round++;
        }

        Logger.log(`Победу одерживает - ${this.players[0].getName}`);    
    }

    private getRandomPairs(): [Hero, Hero][] {
        const sortPlayers = this.players.sort(() => Math.random() - 0.5);
        const pairs: [Hero, Hero][] = [];

        for (let i = 0; i < sortPlayers.length; i += 2) {
            if (sortPlayers[i + 1]){
                pairs.push([sortPlayers[i], sortPlayers[i + 1]]);
            }
        }

        return pairs;
    }

    private battle(player1: Hero, player2: Hero) {
        Logger.log(`(${player1.getClassType}) ${player1.getName} против (${player2.getClassType}) ${player2.getName}`);
        let turn = 1;
        while (player1.isAlive && player2.isAlive) {
            const attaker = turn % 2 === 1 ? player1:player2;
            const deffender = turn % 2 === 1 ? player2:player1;

            const abilityUses = attaker.useAbility(deffender);
            Logger.log(abilityUses || `[${attaker.getClassType}] ${attaker.getName} атакует [${deffender.getClassType}] ${deffender.getName}`)
        
            if (!deffender.isAlive) {
                Logger.log(`[${deffender.getClassType}] ${deffender.getName} погибает`)
            }

            turn++;
        }
    }
}

const game = new Game(4);
game.startBattle();
