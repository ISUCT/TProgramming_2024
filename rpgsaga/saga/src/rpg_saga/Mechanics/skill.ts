import { Character } from '../character';

export class Skill {
  skillName: string;
  amountOfUses: number;
  remainingUses: number;
  action: (user: Character, target: Character) => string;

  constructor(skillName: string, amountOfUses: number, action: (user: Character, target: Character) => string) {
    this.skillName = skillName;
    this.amountOfUses = amountOfUses;
    this.remainingUses = amountOfUses;
    this.action = action;
  }

  applySkill(user: Character, target: Character): string {
    this.remainingUses -= 1;
    if (this.remainingUses > -1) {
      return this.action(user, target);
    }
    return `${user.characterName} пытается использовать ${this.skillName}, но у него закончилось количество применений.`;
  }

  resetAmountOfUses(): void {
    this.remainingUses = this.amountOfUses;
  }
}
