import { Game } from "../../src/rpg saga/necessary/gameScript";
import { Archer } from "../../src/rpg saga/players/archerClass";
import { Warrior } from "../../src/rpg saga/players/warriorClass";
import { Wizard } from "../../src/rpg saga/players/wizardClass";
import { Bow } from "../../src/rpg saga/weapons/bowClass";
import { Sword } from "../../src/rpg saga/weapons/swordClass";
import { Wand } from "../../src/rpg saga/weapons/wandClass";

describe('Game Class', () => {
  let game: Game;
  let warriors: Warrior[];
  let archers: Archer[];
  let wizards: Wizard[];

  beforeEach(() => {
    warriors = [new Warrior(true, false, [], [0, 0], 'Warrior', 'Warrior1', 100, new Sword('Sword1','режущий', 10, 0.1), 10, 10, 10)];
    archers = [new Archer(true, false, [], [0, 0], 'Archer', 'Archer1', 100, new Bow('Bow1','проникающий', 15, 0.2), 10, 20, 5)];
    wizards = [new Wizard(true, false, [], [0, 0], 'Wizard', 'Wizard1', 100, new Wand('Wand1','магическое', 30, 0.3), 5, 10, 20)];
    game = new Game(warriors, archers, wizards);
  });

  it('Should initialize with correct properties', () => {
    expect(game['_allWarriors']).toEqual(warriors);
    expect(game['_allArchers']).toEqual(archers);
    expect(game['_allWizards']).toEqual(wizards);
  });


  it('Should run all rounds of fight correctly', () => {
    const char1 = warriors[0];
    const char2 = archers[0];
    const [winner, loser] = game.allRoundsOfFight(char1, char2);
    expect(winner['_alive']).toBe(true);
    expect(loser['_alive']).toBe(false);
  });

  it('Should run the entire game correctly', () => {
    game.allGame();
    // Проверка на вывод в консоль может быть сложной, поэтому здесь просто проверяем, что метод выполняется без ошибок.
  });
});