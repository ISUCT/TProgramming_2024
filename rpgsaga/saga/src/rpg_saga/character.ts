import { Weapon } from './Weapon/weapon';
import { Skill } from './Mechanics/skill';
import { StatusEffect } from './Mechanics/statusEffect';

export abstract class Character {
  characterName: string;
  className: string;
  weapon: Weapon;
  damage: number;
  healthAmount: number;
  healthPoints: number;
  statusEffect: StatusEffect[];
  skills: Skill[];

  constructor(characterName: string, className: string, weapon: Weapon, healthAmount: number, skills: Skill[]) {
    this.characterName = characterName;
    this.className = className;
    this.weapon = weapon;
    this.damage = weapon.damage;
    this.healthAmount = healthAmount;
    this.healthPoints = healthAmount;
    this.statusEffect = [];
    this.skills = skills;
  }

  performMove(user: Character, target: Character): string {
    const moveSelector = Math.floor(Math.random() * 100);
    if (moveSelector >= 0 && moveSelector < 25) {
      return this.performSkill(user, target, this.skills[0]);
    } else if (moveSelector >= 25 && moveSelector < 50) {
      return this.performSkill(user, target, this.skills[1]);
    } else {
      return this.performAttack(target);
    }
  }

  performAttack(target: Character): string {
    target.receiveDamage(this.damage);
    return `${this.characterName} атаковал ${target.characterName} и нанёс ${this.weapon.damage} урона.`;
  }

  performSkill(user: Character, target: Character, skill: Skill): string {
    return skill.applySkill(user, target);
  }

  receiveDamage(damage: number): void {
    this.healthPoints = this.healthPoints - damage;
  }

  addStatusEffect(effect: StatusEffect): void {
    this.statusEffect.push(effect);
  }

  containStatusEffects(): string {
    let effectLog = '';
    for (const effect of this.statusEffect) {
      effect.applyEffectDamage(this);
      effectLog += `${this.characterName} находится под действием ${effect.effectName}. Оставшееся количество ходов: ${effect.effectDuration}\n`;
      effect.reduceDuration();
      if (effect.hasExpired() && effect.removeFromPlayer) {
        effect.removeFromPlayer(this);
      }
    }
    this.statusEffect = this.statusEffect.filter(effect => !effect.hasExpired());
    return effectLog.trim();
  }
  isStillAlive(): boolean {
    return this.healthPoints > 0;
  }
}
