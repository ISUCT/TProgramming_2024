import { Logs } from './laba3Logs'; // Импортируем logs

export class Player {
  private name: string;
  private strength: number;
  private health: number;
  private maxHealth: number;
  private isDead: boolean;
  protected abilities: string[] = [];
  private selectedAbility: string | null = null;
  protected isStunned: boolean = false; // Текущее состояние оглушения
  private willBeStunned: boolean = false; // Будет оглушен на следующий ход
  private stunDuration: number = 0; // Длительность оглушения (в ходах атакующего игрока)
  private skipNextTurn: boolean = false; // Флаг для пропуска следующего хода

  constructor(name: string, strength: number, health: number) {
    this.name = name;
    this.strength = strength;
    this.health = health;
    this.maxHealth = health; // Устанавливаем максимальное здоровье
    this.isDead = false;
  }

  // Обновление состояния оглушения
  public updateStun(duration: number = 0): void {
    if (duration > 0) {
      this.stunDuration = duration;
      this.isStunned = true;
    } else if (this.stunDuration > 0) {
      this.stunDuration--;
      if (this.stunDuration === 0) {
        this.isStunned = false; // Сбрасываем оглушение
      }
    }
  }
  
  // Метод для применения эффекта оглушения
  public applyStunEffect(): void {
    this.updateStun(); // Обновляем состояние оглушения
  }

  // Метод для установки длительности оглушения
  public setStunDuration(duration: number): void {
    this.stunDuration = duration;
    this.isStunned = duration > 0;
  }

  // Метод для установки состояния оглушения
  public setIsStunned(isStunned: boolean): void {
    this.isStunned = isStunned;
  }

  public setSkipNextTurn(skip: boolean): void {
    this.skipNextTurn = skip;
  }

  public getSkipNextTurn(): boolean {
    return this.skipNextTurn;
  }

  public setWillBeStunned(willBeStunned: boolean): void {
    this.willBeStunned = willBeStunned;
  }

  public getWillBeStunned(): boolean {
    return this.willBeStunned;
  }

  public isCurrentlyStunned(): boolean {
    return this.stunDuration > 0;
  }

  // Восстановление здоровья до максимального значения (только для живых бойцов)
  public restoreHealth(): void {
    if (!this.isDead) {
      this.health = this.maxHealth;
    }
  }

  // Устанавливаем выбранную способность
  public setSelectedAbility(ability: string | null): void {
    if (ability && this.abilities.includes(ability)) {
      this.selectedAbility = ability;
    } else if (ability === null) {
      this.selectedAbility = null;
    } else {
      throw new Error('Недопустимая способность');
    }
  }

  // Получаем выбранную способность
  public getSelectedAbility(): string | null {
    return this.selectedAbility;
  }

  // Геттер для abilities
  public getAbilities(): string[] {
    return this.abilities;
  }

  public getIsDead(): boolean {
    return this.isDead;
  }

  public setIsDead(isDead: boolean): void {
    this.isDead = isDead;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getStrength(): number {
    return this.strength;
  }

  public setStrength(strength: number): void {
    if (strength >= 0) {
      this.strength = strength;
    } else {
      throw new Error('Strength cannot have negative values');
    }
  }

  public getHealth(): number {
    return this.health;
  }

  public setHealth(health: number): void {
    if (health >= 0) {
      this.health = health;
    } else {
      throw new Error('Health cannot have negative values');
    }
  }

  public displayInfo(): void {
    const logs = new Logs();
    logs.log(`\nStrength: ${this.getStrength()}`);
    logs.log(`Name: ${this.getName()}`);
    logs.log(`Health: ${this.getHealth()}`);
  }

  // Метод для проверки, оглушен ли игрок
  public getIsStunned(): boolean {
    return this.isStunned;
  }

  // Изменяем метод takeDamage, чтобы учитывать оглушение
  public takeDamage(damage: number): void {
    this.health = Math.max(0, Math.round(this.health - damage)); // Округляем и ограничиваем здоровье
    if (this.health <= 0) {
      this.isDead = true;
    }
  }

  public attack(target: Player, logs: Logs): void {
    const damage = this.strength;
    target.takeDamage(damage);
    logs.logAttack(this, target, damage); // Логируем атаку
  }

  public useAbility(target: Player, logs: Logs): void {
    // Базовый класс не имеет способностей
  }
}