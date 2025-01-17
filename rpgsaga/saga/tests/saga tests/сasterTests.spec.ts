import { Caster } from "../../src/Classes/Caster";
import { Weapons } from "../../src/Classes/charGenerator";
import { Player } from "../../src/Player/Player";

describe('Archer Class', () => {
    it('should initialize with correct properties', () => {
        const caster = new Caster('lefogids');

        expect(caster.name).toBe('lefogids');
        expect(caster.health).toBe(80);
        expect(caster.maxHealth).toBe(80);
        expect(caster.maxMana).toBe(100);
        expect(caster.resists).toEqual({ physical: -10, magic: 30 });
        expect(caster.weapon).toBe(Weapons.bankai);
        expect(caster.playerClass).toBe('Caster');
    });

    it('should extend Player class', () => {
        const caster = new Caster('lefogids');

        expect(caster).toBeInstanceOf(Player);
    });

    it('should correctly set weapon to bow', () => {
        const caster = new Caster('lefogids');

        expect(caster.weapon).toBe(Weapons.bankai);
    });
});