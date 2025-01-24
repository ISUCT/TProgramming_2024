import { Game } from '../src/game/game';
import { Knight } from '../src/players roles/knight';
import { Mage } from '../src/players roles/mage';
import { Archer } from '../src/players roles/archer';
import { FrozenArrows } from '../src/abilities/frozen arrows';

describe('testing hero factory', () => {
  const game = new Game(1);
  it('should be type of knight, hp = 100, strength = 8, name = test1', () => {
    const hero1 = game.playerFactory.createPlayer(100, 8, 'test1', 1);
    expect(
      hero1.roleName === 'Рыцарь' && hero1.hp === 100 && hero1.strength === 8 && hero1.name === 'test1',
    ).toBeTruthy();
  });
  it('should be type of archery, hp = 100, strength = 8, name = test1', () => {
    const hero2 = game.playerFactory.createPlayer(100, 8, 'test2', 2);
    expect(
      hero2.roleName === 'Лучник' && hero2.hp === 100 && hero2.strength === 8 && hero2.name === 'test2',
    ).toBeTruthy();
  });
  it('should be type of mage, hp = 100, strength = 8, name = test3', () => {
    const hero3 = game.playerFactory.createPlayer(100, 8, 'test3', 3);
    expect(hero3.roleName === 'Маг' && hero3.hp === 100 && hero3.strength === 8 && hero3.name === 'test3').toBeTruthy();
  });
});

describe('testing abilities', () => {
  describe('testing knight`s abilities', () => {
    describe('testing base attack', () => {
      it('enemy should be left with less then 100hp', () => {
        const hero1 = new Knight(100, 7, 'test1', 1);
        const hero2 = new Knight(100, 6, 'test2', 1);
        let ability = hero1.selectRandomAbility();
        while (ability.name !== 'Основная атака') {
          ability = hero1.selectRandomAbility();
        }
        hero1.useAbility(hero2, ability);
        expect(hero2.hp).toBeLessThan(100);
      });
    });
    describe('testing super sword attack', () => {
      it('enemy should got hit with calculated damage', () => {
        const hero1 = new Knight(100, 10, 'test1', 1);
        const enemy = new Knight(100, 6, 'test2', 1);
        let ability = hero1.selectRandomAbility();
        while (ability.name !== 'Удар Возмездия') {
          ability = hero1.selectRandomAbility();
        }
        hero1.useAbility(enemy, ability);
        expect(enemy.hp).toEqual(100 - hero1.strength * 1.3);
      });
    });
  });
  describe('testing archer`s abilities', () => {
    it('testing frozen arrows, enemy should be left with 85 hp', () => {
      const hero1 = new Archer(100, 10, 'test1', 2);
      const hero2 = new Archer(100, 10, 'test2', 2);
      let ability = hero1.selectRandomAbility();
      while (ability.name !== 'Ледяные стрелы') {
        ability = hero1.selectRandomAbility();
      }
      hero1.useAbility(hero2, ability);
      expect(hero2.hp).toStrictEqual(85);
    });
    it('testing base attack, enemy should be left with less than 100 hp', () => {
      const hero1 = new Archer(100, 10, 'test1', 2);
      const hero2 = new Archer(100, 10, 'test2', 2);
      let ability = hero1.selectRandomAbility();
      while (ability.name !== 'Основная атака') {
        ability = hero1.selectRandomAbility();
      }
      hero1.useAbility(hero2, ability);
      expect(hero2.hp).toBeLessThan(100);
    });
  });
  describe('testing mage abilities', () => {
    it('testing base attack', () => {
      const hero1 = new Mage(100, 10, 'test1', 3);
      const hero2 = new Archer(100, 10, 'test2', 2);
      let ability = hero1.selectRandomAbility();
      while (ability.name !== 'Основная атака') {
        ability = hero1.selectRandomAbility();
      }
      hero1.useAbility(hero2, ability);
      expect(hero2.hp).toBeLessThan(100);
    });
    it('testing fascination, enemy"s canThisPlayerAttack param should be false', () => {
      const hero1 = new Mage(100, 10, 'test1', 3);
      const hero2 = new Archer(100, 10, 'test2', 2);
      let ability = hero1.selectRandomAbility();
      while (ability.name !== 'Заворожение') {
        ability = hero1.selectRandomAbility();
      }
      hero1.useAbility(hero2, ability);
      expect(hero2.canThisPlayerAttack).toBeFalsy();
    });
    describe('testing field changing functions', () => {
      describe('testing decreaseDuration func', () => {
        it('changing duration should be -1', () => {
          const frozenArrows = new FrozenArrows();
          frozenArrows.decreaseDuration();
          expect(frozenArrows.duration).toStrictEqual(2);
        });
      });
      describe('testing decreaseUseFrequency func', () => {
        it('changing useFrequency should be 0', () => {
          const frozenArrows = new FrozenArrows();
          frozenArrows.decreaseUseFrequency();
          expect(frozenArrows.useFrequency).toStrictEqual(0);
        });
      });
    });
  });
});

describe('testing checkingForDurationDamage function', () => {
  it('enemy should be left with 82 hp', () => {
    const hero1 = new Knight(100, 10, 'test1', 1);
    const hero2 = new Knight(100, 10, 'test2', 1);
    let ability = hero1.selectRandomAbility();
    while (ability.name !== 'Ледяные стрелы') {
      ability = hero1.selectRandomAbility();
    }
    hero1.useAbility(hero2, ability);
    hero2.checkForAbilitiesDamages();
    expect(hero2.hp).toStrictEqual(82);
  });
});

describe('getting random ability function', () => {
  it('should return 1 ability', () => {
    const testHero = new Knight(80, 20, 'test1', 1);
    const ability = testHero.selectRandomAbility();
    expect(typeof ability === 'object');
  });
});

// describe('testing fight function', () => {
//   it('there should be only 1 player alive', () => {
//     const game = new Game(2);
//     game.setPlayers();
//     game.fight(game.players[0], game.players[1]);
//     expect(
//       (game.players[0].alive === 1 && game.players[1].alive === 0) ||
//         (game.players[0].alive === 0 && game.players[1].alive === 1),
//     ).toBeTruthy();
//   });
// });

describe('testing ability count decrease', () => {
  it('attacking array length should be 1', () => {
    const player1 = new Knight(100, 10, 'player1', 1);
    const player2 = new Mage(100, 10, 'player2', 3);
    while (player1.attackingAbilities.length !== 1) {
      const ability = player1.selectRandomAbility();
      player1.useAbility(player2, ability);
    }
    expect(player1.attackingAbilities.length).toEqual(1);
  });
  it('getting attacked array length should be <= 1', () => {
    const player1 = new Knight(10, 5, 'player1', 1);
    const player2 = new Knight(10, 5, 'player2', 1);
    player1.attackEnemy(player2, player1.attackingAbilities[0]);
    player1.attackEnemy(player2, player1.attackingAbilities[1]);
    expect(player2.isAttackedAbilities.length).toBeLessThanOrEqual(1);
  });
});

describe('testing fightRound function', () => {
  it('survivors array length should be half of first amount of players (if number is even)', () => {
    const game = new Game(8);
    game.setPlayers();
    const heroesListLength = game.players.length;
    const survivors = game.fightRound(game.players);
    expect(survivors.length === heroesListLength / 2).toBeTruthy();
  });
});

describe('testing setPlayers function', () => {
  it('should be created 8 players', () => {
    const game = new Game(8);
    game.setPlayers();
    const heroesListLength = game.players.length;
    expect(heroesListLength).toStrictEqual(8);
  });
});

describe('testing fight of 8 players', () => {
  it('there should be only 1 player left', () => {
    const game = new Game(8);
    game.run();
    expect(game.players.length).toStrictEqual(1);
  });
});

describe('testing frozen arrows duration damage', () => {
  it('testing frozen arrows, enemy should be left with 82 hp', () => {
    const hero1 = new Archer(100, 10, 'test1', 2);
    const hero2 = new Archer(100, 10, 'test2', 2);
    let ability = hero1.selectRandomAbility();
    while (ability.name !== 'Ледяные стрелы') {
      ability = hero1.selectRandomAbility();
    }
    hero1.useAbility(hero2, ability);
    ability = hero2.selectRandomAbility();
    hero2.useAbility(hero1, ability);
    expect(hero2.hp).toStrictEqual(82);
  });
});
