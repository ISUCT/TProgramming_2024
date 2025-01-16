import { abilities } from '../sagaClasses/abilities';
import { Ability } from '../sagaClasses/ability';
import { Debuff } from '../sagaClasses/debuff';
import { Weapons } from '../sagaClasses/lists';
import { Player } from '../sagaClasses/player';
import { CharacterGenerator } from '../sagaClasses/playerGen';
import { Tournament } from '../sagaClasses/tournament';

describe('Player class', () => {
  it('should initialize with correct attributes', () => {
    const player = new Player('Ichigo', 100, 50, { physical: 20, magic: 10 }, Weapons.sword);
    expect(player.name).toBe('Ichigo');
    expect(player.health).toBe(100);
    expect(player.maxHealth).toBe(100);
    expect(player.maxMana).toBe(50);
    expect(player.resists.physical).toBe(20);
    expect(player.resists.magic).toBe(10);
    expect(player.canAttack).toBe(true);
    expect(player.weapon).toBe(Weapons.sword);
  });

  it('should apply a debuff and affect attack ability', () => {
    const player1 = new Player('Aragorn', 100, 50, { physical: 20, magic: 10 });
    const debuff: Debuff = {
      name: 'Frozen',
      duration: 2,
      effect: player => {
        player.canAttack = false;
      },
      affectsAttack: true,
    };

    player1.applyDebuff(debuff);
    expect(player1.canAttack).toBe(false);
  });

  it('should attack another player and deal damage', () => {
    const player1 = new Player('Aragorn', 100, 50, { physical: 20, magic: 10 }, Weapons.sword);
    const player2 = new Player('Gimli', 100, 50, { physical: 10, magic: 10 }, Weapons.axe);

    const attackMessage = player1.attack(player2);

    expect(player2.health).toBeLessThan(100);
    expect(attackMessage).toContain('Aragorn атакует Gimli с помощью Sword');
  });

  it('should not attack if canAttack is false', () => {
    const player1 = new Player('Aragorn', 100, 50, { physical: 20, magic: 10 });
    const player2 = new Player('Gimli', 100, 50, { physical: 10, magic: 10 });
    player1.applyDebuff({
      name: 'Frozen',
      duration: 2,
      effect: player => {
        player.canAttack = false;
      },
      affectsAttack: true,
    });

    const attackMessage = player1.attack(player2);

    expect(attackMessage).toBe('Aragorn не может атаковать!');
  });

  it('should refresh ability usages', () => {
    const player = new Player('Aragorn', 100, 50, { physical: 20, magic: 10 });
    const ability = new Ability(
      'Fireball',
      () => ({
        name: 'Fireball',
        duration: 1,
        effect: target => {
          target.health -= 15;
        },
        affectsAttack: false,
      }),
      3,
    );
    player.addAbility(ability);

    player.useAbility(player, ability);
    expect(ability.usageLimit).toBe(2);

    player.refreshAbilityUsages();
    expect(ability.usageLimit).toBe(3);
  });
});

describe('Ability class', () => {
  it('should apply Fireball ability correctly', () => {
    const player1 = new Player('Aragorn', 100, 50, { physical: 20, magic: 10 });
    const player2 = new Player('Gimli', 100, 50, { physical: 10, magic: 10 });

    const fireballAbility = new Ability(
      'Fireball',
      () => ({
        name: 'Fireball',
        duration: 1,
        effect: target => {
          target.health -= 15;
        },
        affectsAttack: false,
      }),
      1,
    );

    player1.useAbility(player2, fireballAbility);

    expect(player2.health).toBe(85);
  });
});

describe('Tournament class', () => {
  it('should start a tournament with an even number of players', () => {
    const tournament = new Tournament(4);
    expect(tournament.players.length).toBe(4);
  });

  it('should throw an error when tournament has an odd number of players', () => {
    expect(() => new Tournament(3)).toThrow('Количество игроков должно быть четным.');
  });

  it('should declare a winner after a fight', () => {
    const tournament = new Tournament(4);
    const player1 = tournament.players[0];
    const player2 = tournament.players[1];
    const result = tournament.fight(player1, player2);

    expect(result).toContain('wins');
  });
});

describe('CharacterGenerator class', () => {
  it('should generate a random player with correct class', () => {
    const randomPlayer = CharacterGenerator.generateRandomPlayer();
    expect(randomPlayer).toHaveProperty('name');
    expect(['Warrior', 'Mage', 'Archer']).toContain(randomPlayer.constructor.name);
  });

  it('should create a custom player with given attributes', () => {
    const customPlayer = CharacterGenerator.createCustomPlayer('Legolas', 'Archer', 'bow', 10, 20, [abilities[0]]);
    expect(customPlayer.name).toBe('Legolas');
    expect(customPlayer.weapon).toBe(Weapons.bow);
    expect(customPlayer.resists.physical).toBe(10);
    expect(customPlayer.resists.magic).toBe(20);
    expect(customPlayer.abilities.length).toBe(1);
  });
});
