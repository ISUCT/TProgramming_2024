import { abilities } from "../../src/Classes/Ability";
import { Player } from "../../src/Player/Player";

describe('Ability', () => {
    let testPlayer: Player;

    beforeEach(() => {
        testPlayer = {
            name: 'TestPlayer',
            health: 100,
            canAttack: true,
            applyDebuff: jest.fn(),
        } as unknown as Player;
    });

    it('should initialize abilities with correct properties', () => {
        expect(abilities).toHaveLength(3);

        const [ability1, ability2] = abilities;

        expect(ability1.name).toBe('The One Who Saw It All');
        expect(ability1.maxUsageLimit).toBe(1);
        expect(ability2.name).toBe('Golden Rule');
        expect(ability2.maxUsageLimit).toBe(1);
    });

    it('should apply debuff from "The One Who Saw It All" correctly', () => {
        const ability = abilities.find(a => a.name === 'The One Who Saw It All');
        expect(ability).toBeDefined();

        if (ability) {
            const debuff = ability.effect(testPlayer);

            expect(debuff.name).toBe('The One Who Saw It All');
            expect(debuff.duration).toBe(1);
            expect(debuff.affectsAttack).toBe(true);

            debuff.effect(testPlayer);
            expect(testPlayer.canAttack).toBe(false);
        }
    });

    it('should apply debuff from "Golden Rule" correctly', () => {
        const ability = abilities.find(a => a.name === 'Golden Rule');
        expect(ability).toBeDefined();

        if (ability) {
            const debuff = ability.effect(testPlayer);

            expect(debuff.name).toBe('Golden Rule');
            expect(debuff.duration).toBe(1);
            expect(debuff.affectsAttack).toBe(false);

            debuff.effect(testPlayer);
            expect(testPlayer.health).toBe(90);
        }
    });
    
    it('should respect maxUsageLimit for abilities', () => {
        const ability = abilities.find(a => a.name === 'Golden Rule');
        expect(ability).toBeDefined();
        
        if (ability) {
            expect(ability.maxUsageLimit).toBe(1);
        }
    });
    it('should correctly apply damage debuff over multiple rounds', () => {
        const targetPlayer = new Player('TestPlayer', 100, 100, 50, { physical: 0, magic: 0 });
    
        const finalFlash = abilities.find(ability => ability.name === 'Final Flash');
    
        const debuff = finalFlash.effect(targetPlayer);
        targetPlayer.applyDebuff(debuff);

        expect(targetPlayer.health).toBe(96);
    
        targetPlayer.updateDebuffs();
        expect(targetPlayer.health).toBe(92);
    
        targetPlayer.updateDebuffs();
        expect(targetPlayer.health).toBe(88);
    
        targetPlayer.updateDebuffs();
        expect(targetPlayer.health).toBe(88);
        expect(targetPlayer.debuffs.length).toBe(0);
      });
});
