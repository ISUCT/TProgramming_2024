import { fabricHero } from './fabrics/fabricHero';
import { Logger } from './lastlab/Logger';
import { Hero } from './lastlab/Hero';
import { Archer } from './nasledniki/Archer';
import { Knight } from './nasledniki/Knight';
import { Orc } from './nasledniki/Orc';
import { Wizard } from './nasledniki/Wizard';

export class Game {
    private players: Hero[] = [];
    private roundNumber: number = 0;

    constructor(private numberOfPlayers: number) { }

    public start(): void {
        Logger.logGameStart();
        const heroFactory = new fabricHero();
        this.players = heroFactory.createPlayers(this.numberOfPlayers);

        this.battle();
    }

    private battle(): void {
        while (this.players.length > 1) {
            this.roundNumber++;
            Logger.logRoundStart(this.roundNumber);

            for (let i = 0; i < this.players.length; i++) {
                const attacker = this.players[i];
                const defender = this.players[(i + 1) % this.players.length];

                // если атакующий персонаж мертв, то мы его пропускаем
                if (!attacker.getIsAlive) {
                    continue;
                }

                const attackLog = attacker.attack(defender);
                Logger.log(attackLog);

                if (attacker instanceof Archer) {
                    const effectLog = (attacker as Archer).applyEffects(defender);
                    if (effectLog) {
                        Logger.log(effectLog);
                    }
                }

                // проверка на выживаемость защищающегося персонажа
                if (!defender.getIsAlive) {
                    Logger.logDeath(defender);
                    this.players.splice((i + 1) % this.players.length, 1); // убираем мертвого игрока
                    break;
                }

                // даём 50 процентов шанса на использование способности
                if (Math.random() < 0.5) {
                    let abilityLog: string | null = null;
                    if (attacker instanceof Archer) {
                        if (!attacker.isFireArrowUsed && attacker.getMana >= Archer.FIRE_ARROW_MANA_COST) {
                            abilityLog = (attacker as Archer).useFireArrows(defender);
                        } else if (attacker.iceArrowUses < Archer.MAX_ICE_ARROW_USES && attacker.getMana >= Archer.ICE_ARROW_MANA_COST) {
                            abilityLog = (attacker as Archer).useIceArrows(defender);
                        }
                    }

                    // Способности других классов
                    if (attacker instanceof Knight) {
                        abilityLog = (attacker as Knight).useAbility(defender);
                    }

                    if (attacker instanceof Orc) {
                        abilityLog = (attacker as Orc).useAbility(defender);
                    }

                    if (attacker instanceof Wizard) {
                        abilityLog = (attacker as Wizard).useAbility(defender);
                    }

                    if (abilityLog) {
                        Logger.log(abilityLog);
                    }
                }
            }

            Logger.logRoundEnd(this.roundNumber);
        }

        this.endGame();
    }

    private endGame(): void {
        const winner = this.players[0];
        Logger.logGameEnd(winner);
    }
}

// Запуск игры
const game = new Game(2);
game.start();