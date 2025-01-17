import { Character } from './character';
import { Archer } from './Classes/archer';
import { Sorcerer } from './Classes/sorcerer';
import { Warrior } from './Classes/warrior';
import { ArcherArsenal, SorcererArsenal, WarriorArsenal } from './Weapon/weapon';

export class Tournament {
  contestants: Character[] = [];
  participants: number = 2;

  constructor() {
    for (let i = 0; i < this.participants; i++) {
      const name = `Участник ${i + 1}`;
      const typeSelector = Math.floor(Math.random() * 3);
      const weaponSelector = Math.floor(Math.random() * 5);
      if (typeSelector === 0) {
        this.contestants.push(new Archer(name, ArcherArsenal[weaponSelector]));
      } else if (typeSelector === 1) {
        this.contestants.push(new Sorcerer(name, SorcererArsenal[weaponSelector]));
      } else {
        this.contestants.push(new Warrior(name, WarriorArsenal[weaponSelector]));
      }
    }
  }

  logMessage(message: string): void {
    console.log(message);
  }

  duel(): void {
    const contestantOne: Character = this.contestants[0];
    const contestantTwo: Character = this.contestants[1];
    this.logMessage(
      `(${contestantOne.className}) ${contestantOne.characterName} vs (${contestantTwo.className}) ${contestantTwo.characterName}`,
    );
    let roundLog = '';
    while (contestantOne.isStillAlive() && contestantTwo.isStillAlive()) {
      roundLog = contestantOne.containStatusEffects();
      if (roundLog) {
        this.logMessage(roundLog);
      }
      roundLog = contestantOne.performMove(contestantOne, contestantTwo);
      this.logMessage(roundLog);

      if (contestantTwo.isStillAlive()) {
        roundLog = contestantTwo.containStatusEffects();
        if (roundLog) {
          this.logMessage(roundLog);
        }
      }
      roundLog = contestantTwo.performMove(contestantTwo, contestantOne);
      this.logMessage(roundLog);
    }
    const duelWinner = contestantOne.isStillAlive() ? contestantOne : contestantTwo;
    this.logMessage(`${duelWinner.characterName} won the duel!`);
  }
}
