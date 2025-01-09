import { HeroFactory } from './HeroFactory';
import { Game } from './Game';

const heroes = HeroFactory.createRandomHeroes(4);

const game = new Game(heroes);
game.start();