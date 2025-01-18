import { Duel } from '../src/rpg_saga/Duel';
import { Character } from '../src/rpg_saga/character';
import { Archer } from '../src/rpg_saga/Classes/archer';
import { Sorcerer } from '../src/rpg_saga/Classes/sorcerer';
import { Warrior } from '../src/rpg_saga/Classes/warrior';
import { ArcherArsenal, SorcererArsenal, WarriorArsenal } from '../src/rpg_saga/Weapon/weapon';

describe('Tournament class', () => {
    let tournament: Duel;
    let winner: Character
    beforeEach(() => {
      tournament = new Duel();
      winner = tournament.duel()
    });
  
    it('should create two contestants', () => {
      expect(tournament.contestants.length).toBe(2);
      expect(tournament.contestants[0]).toBeInstanceOf(Character);
      expect(tournament.contestants[1]).toBeInstanceOf(Character);
    });

    it('should create contestants of random types', () => {
        const archerCount = tournament.contestants.filter(c => c instanceof Archer).length;
        const sorcererCount = tournament.contestants.filter(c => c instanceof Sorcerer).length;
        const warriorCount = tournament.contestants.filter(c => c instanceof Warrior).length;
    
        expect(archerCount + sorcererCount + warriorCount).toBe(2);
    });

    it('should return Winner', () => {
        expect(tournament.duel()).toBeInstanceOf(Character);
        expect(winner.isStillAlive()).toBe(true);
      });
    
})
