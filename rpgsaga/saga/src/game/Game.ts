import { Hero } from "../abstract/Hero";
import { HeroFactory } from "../factories/HeroFactory";

export class Game {
  private heroes: Hero[] = [];

  constructor(numberOfPlayers: number) {
    this.initializeGame(numberOfPlayers);
  }

  private initializeGame(numberOfPlayers: number) {
    const names = ["Артур", "Гэндальф", "Эльдар", "Вильямс", "Зевс", "Герой"];

    for (let i = 0; i < numberOfPlayers; i++) {
      const name = names[Math.floor(Math.random() * names.length)];
      const heroType = ['Knight', 'Mage', 'Archer'][Math.floor(Math.random() * 3)];
      const hero = HeroFactory.createHero(heroType, name);
      this.heroes.push(hero);
    }

    console.log("Игра начинается!");
    this.startGame();
  }

  private startGame() {
    while (this.heroes.length > 1) {
      this.battle();
    }

    const winner = this.heroes[0];
    console.log(`Победитель: ${winner.getName()}!`);
  }

  private battle() {
    const player1 = this.heroes[Math.floor(Math.random() * this.heroes.length)];
    const player2 = this.heroes[Math.floor(Math.random() * this.heroes.length)];

    if (player1 === player2) return;

    console.log(`Сражение: ${player1.getName()} vs ${player2.getName()}`);
    this.heroTurn(player1, player2);
    if (player2.isDead()) {
      this.heroes = this.heroes.filter(hero => hero !== player2);
      console.log(`${player2.getName()} погибает!`);
    }

    this.heroTurn(player2, player1);
    if (player1.isDead()) {
      this.heroes = this.heroes.filter(hero => hero !== player1);
      console.log(`${player1.getName()} погибает!`);
    }
  }

  private heroTurn(attacker: Hero, defender: Hero) {
    attacker.useAbility();
    const damage = attacker.getPower();
    defender.takeDamage(damage);
  }
}
