import { Debuff } from './debuff';
import { Weapon } from './weapon';
import { DamageType } from './lists';
import { Ability } from './ability';

export class Player {
  name: string;
  health: number;
  maxHealth: number;
  maxMana: number;
  currentMana: number;
  resists: { physical: number; magic: number };
  debuffs: Debuff[];
  weapon?: Weapon;
  canAttack: boolean;
  abilities: Ability[];

  constructor(
    name: string,
    maxHealth: number,
    maxMana: number,
    resists: { physical: number; magic: number },
    weapon?: Weapon,
  ) {
    this.name = name;
    this.maxHealth = maxHealth;
    this.health = maxHealth;
    this.maxMana = maxMana;
    this.currentMana = maxMana;
    this.resists = resists;
    this.debuffs = [];
    this.weapon = weapon;
    this.canAttack = true;
    this.abilities = [];
  }

  addAbility(ability: Ability): string {
    this.abilities.push(ability);
    return `${this.name} получает способность ${ability.name}.`;
  }

  applyDebuff(debuff: Debuff) {
    this.debuffs.push(debuff);
    debuff.effect(this);
    if (debuff.affectsAttack) {
      this.canAttack = false;
    }
  }
  restoreHealth() {
    this.health = this.maxHealth;
  }

  updateDebuffs() {
    let canAttack = true;
    for (let i = this.debuffs.length - 1; i >= 0; i--) {
      const debuff = this.debuffs[i];
      debuff.duration--;
      if (debuff.duration <= 0) {
        this.debuffs.splice(i, 1);
      }
      if (debuff.affectsAttack) {
        canAttack = false;
      }
    }
    this.canAttack = canAttack;
  }

  attack(target: Player): string {
    if (!this.canAttack) {
      return `${this.name} не может атаковать!`;
    }

    const weaponDamage = this.weapon ? this.weapon.damage : 0;
    const damageType = this.weapon ? this.weapon.damageType : DamageType.Physical;

    let actualDamage = weaponDamage;

    if (damageType === DamageType.Physical) {
      actualDamage -= (actualDamage * target.resists.physical) / 100;
    } else if (damageType === DamageType.Magic) {
      actualDamage -= (actualDamage * target.resists.magic) / 100;
    }

    actualDamage = Math.max(0, actualDamage);
    target.health -= actualDamage;
    if (target.health < 0) {
      target.health = 0;
    }
    return `${this.name} атакует ${target.name} с помощью ${this.weapon?.name} и наносит ${actualDamage} урона!`;
  }
  refreshAbilityUsages() {
    this.abilities.forEach(ability => {
      ability.usageLimit = ability.maxUsageLimit;
    });
  }
  useAbility(target: Player, ability: Ability): string {
    if (ability.usageLimit <= 0) {
      return `${this.name} больше не может использовать способность ${ability.name}!`;
    }

    const debuff = ability.effect(target);
    target.applyDebuff(debuff);
    ability.usageLimit--;
    return `${this.name} использует способность ${ability.name} на ${target.name}!`;
  }

  getInfo(): string {
    const abilitiesList = this.abilities.map(ability => ability.name).join(', ') || 'Нет способностей';
    return `${this.name} имеет ${this.health} здоровья, ${this.currentMana} маны, может атаковать: ${this.canAttack ? 'Да' : 'Нет'}. Способности: ${abilitiesList}.`;
  }
}
