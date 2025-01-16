import { Saber } from "../../src/Classes/Saber";
import { Weapons } from "../../src/Classes/charGenerator";
import { Player } from "../../src/Player/Player";

describe('Archer Class', () => {
    it('should initialize with correct properties', () => {
        const saber = new Saber('lefogids');

        expect(saber.name).toBe('lefogids');
        expect(saber.health).toBe(120);
        expect(saber.maxHealth).toBe(120);
        expect(saber.maxMana).toBe(50);
        expect(saber.resists).toEqual({ physical: 20, magic: -10 });
        expect(saber.weapon).toBe(Weapons.sword);
        expect(saber.playerClass).toBe('Saber');
    });

    it('should extend Player class', () => {
        const saber = new Saber('lefogids');

        expect(saber).toBeInstanceOf(Player);
    });

    it('should correctly set weapon to bow', () => {
        const saber = new Saber('lefogids');

        expect(saber.weapon).toBe(Weapons.sword);
    });
});