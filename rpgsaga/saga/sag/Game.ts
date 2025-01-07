import { Player } from './Player';
import { Logger } from './Logger';

export class Game {
    players: Player[];

    constructor(players: Player[]) {
        this.players = players;
    }

    start(): void {
        let round = 1;
        while (this.players.length > 1) {
            Logger.log(`Раунд ${round}`);
            this.fight();
            this.players = this.players.filter(player => player.isAlive());
            round++;
        }
        Logger.log(`Победитель: ${this.players[0].name}`);
    }

    private fight(): void {
        // Убедимся, что количество игроков четное
        if (this.players.length % 2 !== 0) {
            // Если количество игроков нечетное, удаляем последнего игрока
            this.players.pop();
            Logger.log("Количество игроков стало нечетным. Последний игрок удален из раунда.");
        }
    
        for (let i = 0; i < this.players.length; i += 2) {
            const player1 = this.players[i];
            const player2 = this.players[i + 1];
    
            if (!player1 || !player2) {
                // Если один из игроков отсутствует, пропускаем этот бой
                continue;
            }
    
            Logger.log(`${player1.name} vs ${player2.name}`);
    
            while (player1.isAlive() && player2.isAlive()) {
                this.performTurn(player1, player2);
                if (player2.isAlive()) {
                    this.performTurn(player2, player1);
                }
            }
    
            if (!player1.isAlive()) {
                Logger.log(`${player1.name} погибает`);
            } else {
                Logger.log(`${player2.name} погибает`);
            }
        }
    }

    private performTurn(attacker: Player, defender: Player): void {
        if (Math.random() < 0.5) {
            attacker.useAbility(defender);
        } else {
            defender.takeDamage(attacker.strength);
            Logger.log(`${attacker.name} наносит урон ${attacker.strength} противнику ${defender.name}`);
        }
    }
}