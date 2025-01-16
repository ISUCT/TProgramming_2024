import { DamageType, Ability, abilities } from "../../src/Classes/Ability";
import { CharacterGenerator } from "../../src/Classes/charGenerator";
import { Player } from "../../src/Player/Player";
import { LogHandler, Tournament } from "../../src/Tournament/Tournament";
import { Weapon } from "../../src/Weapon/Weapon";

jest.spyOn(LogHandler, 'log');

describe('Tournament class', () => {
  let player1: Player;
  let player2: Player;
  let tournament: Tournament;

  beforeEach(() => {

    player1 = new Player('lefogids', 100, 100, 50, { physical: 10, magic: 5 }, new Weapon('Excalibur', 25, DamageType.Physical));
    player2 = new Player('cockter', 80, 80, 40, { physical: 20, magic: 10 });
    player1.addAbility(abilities[0]);
    player2.addAbility(abilities[0]);


    jest.spyOn(CharacterGenerator, 'generateRandomPlayer').mockReturnValueOnce(player1).mockReturnValueOnce(player2);

    tournament = new Tournament(2);
  });

  describe('Tournament Initialization', () => {
    it('should initialize tournament with even number of players', () => {
      expect(tournament).toBeTruthy();
      expect(tournament['players']).toHaveLength(2);
    });

    it('should throw error if the number of players is odd', () => {
      expect(() => new Tournament(3)).toThrow('The number of players must be even.');
    });
  });

  describe('Tournament Fight', () => {
    it('should start a fight between two players and determine a winner', () => {
      const result = tournament['fight'](player1, player2);

      expect(LogHandler.log).toHaveBeenCalledWith(expect.stringContaining('Fight starts:'));
      expect(LogHandler.log).toHaveBeenCalledWith(expect.stringContaining('State after action'));
      expect(LogHandler.log).toHaveBeenCalledWith(expect.stringContaining('defeated!'));

      expect(result).toMatch(/--------(lefogids|cockter) \|.*\| wins!--------/);
    });

    it('should log the winner correctly after the tournament', () => {
      tournament.startTournament();

      expect(LogHandler.log).toHaveBeenCalledWith(expect.stringContaining('--------Tournament Winner:'));
    });
  });

  describe('Fight Actions', () => {
    it('should perform attack actions during the fight', () => {
      const action1 = 'attack';
      const action2 = 'attack';

      player1.attack(player2);
      expect(LogHandler.log).toHaveBeenCalledWith(expect.stringContaining('attack'));
    });

    it('should apply abilities during the fight', () => {
      const ability = abilities[0]

      player1.addAbility(ability);
      const result = player1.useAbility(player2, ability);

      expect(LogHandler.log).toHaveBeenCalledWith(expect.stringContaining('use the ability The One Who Saw It All'));
      expect(result).toBe('lefogids use the ability The One Who Saw It All on cockter!');
    });
  });

  describe('Tournament Logic', () => {
    it('should correctly alternate between players in the fight', () => {
      const initialHealth = player2.health;

      player1.attack(player2);
      player2.attack(player1);

      expect(player2.health).not.toBe(initialHealth);
    });
  });

  describe('Player Count Check', () => {
    it('should create players with valid attributes', () => {
      expect(player1.name).toBe('lefogids');
      expect(player1.maxHealth).toBe(100);
      expect(player1.weapon).toBeTruthy();
      expect(player1.weapon?.name).toBe('Excalibur');
    });
  });
});
