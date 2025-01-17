import { abilities, Ability, DamageType } from "../../src/Classes/Ability";
import { Archer } from "../../src/Classes/Archer";
import { CharacterGenerator, names, Weapons } from "../../src/Classes/charGenerator";
import { Saber } from "../../src/Classes/Saber";
import { Player } from "../../src/Player/Player";
import { Weapon } from "../../src/Weapon/Weapon";

describe('CharacterGenerator', () => {
  
  describe('generateRandomPlayer', () => {
    it('should generate a random player with a random class', () => {
      const player = CharacterGenerator.generateRandomPlayer();
      expect(player).toBeInstanceOf(Player);
      expect(player.weapon).toBeInstanceOf(Weapon);
      expect(player.weapon.name).toBeDefined();
      expect(['Saber', 'Caster', 'Archer']).toContain(player.constructor.name);
    });

    it('should assign a random weapon from Weapons', () => {
      const player = CharacterGenerator.generateRandomPlayer();
      expect(Object.values(Weapons).map(weapon => weapon.name)).toContain(player.weapon.name);
    });
  });

  describe('createCustomPlayer', () => {
    it('should create a custom player with the specified name, class, and abilities', () => {
      const customPlayer = CharacterGenerator.createCustomPlayer(
        'TestPlayer', 
        'Archer', 
        'bow', 
        10, 
        15, 
        [abilities[0]] 
      );

      expect(customPlayer.name).toBe('TestPlayer');
      expect(customPlayer).toBeInstanceOf(Archer);
      expect(customPlayer.weapon).toBe(Weapons.bow);
      expect(customPlayer.resists.physical).toBe(10);
      expect(customPlayer.resists.magic).toBe(15);
      expect(customPlayer.abilities).toHaveLength(1);
      expect(customPlayer.abilities[0].name).toBe('The One Who Saw It All');
    });

    it('should handle unknown className and default to Saber', () => {
      const customPlayer = CharacterGenerator.createCustomPlayer(
        'DefaultClassPlayer', 
        'UnknownClass' as 'Saber' | 'Caster' | 'Archer', 
        'sword', 
        5, 
        10, 
        []
      );
      
      expect(customPlayer).toBeInstanceOf(Saber);
      expect(customPlayer.weapon).toBe(Weapons.sword);
    });

    it('should assign the correct resistances and abilities', () => {
      const abilitiesList: Ability[] = [
        new Ability(
            'The One Who Saw It All',
            () => ({
                name: 'The One Who Saw It All',
                duration: 2,
                effect: player => {
                    player.canAttack = false;
                },
                affectsAttack: true,
            }),
            1,
        ),
      ];
      const customPlayer = CharacterGenerator.createCustomPlayer(
        'FrostMage', 
        'Caster', 
        'bankai', 
        0, 
        20, 
        abilitiesList
      );
      
      expect(customPlayer.resists.physical).toBe(0);
      expect(customPlayer.resists.magic).toBe(20);
      expect(customPlayer.abilities).toHaveLength(1);
      expect(customPlayer.abilities[0].name).toBe('The One Who Saw It All');
    });
  });

  describe('Weapons', () => {
    it('should have correct damage type', () => {
      expect(Weapons.sword.damageType).toBe(DamageType.Physical);
      expect(Weapons.bankai.damageType).toBe(DamageType.Magic);
    });

    it('should have the correct damage values', () => {
      expect(Weapons.sword.damage).toBe(25);
      expect(Weapons.bankai.damage).toBe(30);
      expect(Weapons.bow.damage).toBe(20);
    });
  });
});
