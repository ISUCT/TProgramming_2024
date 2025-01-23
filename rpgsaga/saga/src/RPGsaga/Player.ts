import { Logger } from './utils/Logger';
import { Ability } from './utils/abilities';

export abstract class Player {
  protected maxHealth: number;
  protected health: number;
  protected strength: number;
  protected name: string;
  protected speed: number;
  protected gameClass: string;
  protected isAlive: boolean;
  protected isSpellbounded: boolean;
  protected fireArrowBuff: boolean = false;
  canAttack: boolean;
  skipTurn: boolean = false;
  activeEffects: { ability: Ability; remainingTurns: number }[];
  abilities: Ability[];
  protected abilityUsageCount: { [abilityName: string]: number } = {};

  constructor(name: string, maxHealth: number, strength: number, speed: number) {
    this.name = name;
    this.maxHealth = maxHealth;
    this.strength = strength;
    this.speed = speed;
    this.health = this.maxHealth;
    this.isAlive = true;
    this.isSpellbounded = false;
    this.canAttack = true;
    this.activeEffects = [];
    this.abilities = this.getAbilities();
  }

  getDetails(): string {
    return (
      `Name: ${this.name}\n` +
      `Class: ${this.constructor.name}\n` +
      `Max Health: ${this.maxHealth}\n` +
      `Strength: ${this.strength}\n` +
      `Speed: ${this.speed.toFixed(2)}\n`
    );
  }

  getName(): string {
    return this.name;
  }

  getMaxHealth(): number {
    return this.maxHealth;
  }

  getHealth(): number {
    return this.health;
  }

  getSpeed(): number {
    return this.speed;
  }

  getStrength(): number {
    return this.strength;
  }

  takeDamage(amount: number): void {
    this.health -= amount;
    if (this.health < 0) {
      this.health = 0;
      this.isAlive = false;
    }
  }

  public isHeroAlive(): boolean {
    return this.health > 0;
  }

  healthRestoration() {
    this.health = this.maxHealth;
    this.isSpellbounded = false;
    this.skipTurn = false;
    this.activeEffects = []; // Сбрасываем все активные эффекты
    this.resetSpecificBuffs();
    this.resetAbilityUsage();
  }

  resetSpecificBuffs(): void {}

  getAbilityUsageCount(abilityName: string): number {
    return this.abilityUsageCount[abilityName] || 0;
  }

  // Метод для увеличения счетчика использования способности
  incrementAbilityUsage(abilityName: string): void {
    if (!this.abilityUsageCount[abilityName]) {
      this.abilityUsageCount[abilityName] = 0;
    }
    this.abilityUsageCount[abilityName]++;
  }

  // Метод для сброса счетчика в конце битвы
  resetAbilityUsage(): void {
    this.abilityUsageCount = {};
  }

  getSpellBounding() {
    this.isSpellbounded = true;
  }

  attack(target: Player): void {
    if (this.isAlive && target.isHeroAlive()) {
      const damage = this.strength;

      // Проверяем активные эффекты, которые влияют на атаку
      this.activeEffects.forEach(effect => {
        if (effect.ability.affectsAttack) {
          effect.ability.effect(target);
        }
      });

      target.takeDamage(damage);
      Logger.log(`${this.getName()} attacks ${target.getName()} and deals ${damage} damage.`);
    }
  }

  attackWithCritical(target: Player): void {
    if (this.isAlive && target.isHeroAlive()) {
      const criticalMultiplier = 1.5; // Множитель критического урона
      const criticalDamage = this.strength * criticalMultiplier;

      target.takeDamage(criticalDamage);

      return Logger.log(
        `${this.name} performs a CRITICAL ATTACK on ${target.getName()} and deals ${criticalDamage} damage!`,
      );
    }
  }

  // heal(amount: number): void {
  //     this.health = Math.min(this.health + amount, this.maxHealth);
  // }

  abstract getAbilities(): Ability[];

  abstract getClass(): string;

  useAbility(target: Player): void {
    if (this.abilities.length === 0) {
      Logger.log(`${this.getName()} has no abilities to use.`);
      return;
    }

    const ability = this.abilities[Math.floor(Math.random() * this.abilities.length)];

    // Проверка, что способность не превышает ограничения использования
    const usageCount = this.getAbilityUsageCount(ability.name);
    if (usageCount >= ability.usageLimit) {
      Logger.log(`${this.getName()} cannot use ${ability.name} anymore this round so they use regular attack.`);
      this.attack(target);
      return;
    }

    if (ability.effect.length === 2) {
      ability.effect(target, this);
    } else {
      ability.effect(target);
    }

    // Увеличиваем счетчик использования способности
    this.incrementAbilityUsage(ability.name);
  }
}
