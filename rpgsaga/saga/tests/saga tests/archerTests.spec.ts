import { Archer } from "../../src/Classes/Archer";
import { Weapons } from "../../src/Classes/charGenerator";
import { Player } from "../../src/Player/Player";

describe('Archer Class', () => {
    it('should initialize with correct properties', () => {
        const archer = new Archer('lefogids');

        expect(archer.name).toBe('lefogids');
        expect(archer.health).toBe(90);
        expect(archer.maxHealth).toBe(90);
        expect(archer.maxMana).toBe(60);
        expect(archer.resists).toEqual({ physical: 10, magic: -20 });
        expect(archer.weapon).toBe(Weapons.bow);
        expect(archer.playerClass).toBe('Archer');
    });

    it('should extend Player class', () => {
        const archer = new Archer('lefogids');
        expect(archer).toBeInstanceOf(Player);
    });

    it('should correctly set weapon to bow', () => {
        const archer = new Archer('lefogids');
        expect(archer.weapon).toBe(Weapons.bow);
    });
});