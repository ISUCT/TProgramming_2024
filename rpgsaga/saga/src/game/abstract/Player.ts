import { ISkill } from '../skills/ISkill';
import { getRandomArrayElement } from '../utils/randomization';
import { IWeapon } from '../weapon/IWeapon';

export abstract class Player {
  protected _name: string;
  protected _className?: string;
  protected _initialHealth: number;
  protected _health: number;
  protected _initialStrength: number;
  protected _strength: number;
  protected _skills: ISkill[];
  protected _currentSkill?: ISkill;
  protected _isAlive: boolean = true;
  protected _countOfSkipingTurns: number = 0;
  protected _weapon: IWeapon;

  constructor(
    playerHealth: number,
    playerStrength: number,
    playerName: string,
    playerWeapon: IWeapon,
    playerSkills: ISkill[],
  ) {
    this._initialHealth = playerHealth;
    this._health = this._initialHealth;
    this._initialStrength = playerStrength;
    this._strength = this._initialStrength;
    this._name = playerName;
    this._weapon = playerWeapon;
    this._skills = playerSkills;
  }

  public get className(): string | undefined {
    return this._className;
  }

  public get name(): string {
    return this._name;
  }

  public get isAlive(): boolean {
    return this._isAlive;
  }

  public get health(): number {
    return this._health;
  }

  public get strength(): number {
    return this._strength;
  }

  public get initialHealth(): number {
    return this._initialHealth;
  }

  public get initialStrength(): number {
    return this._initialStrength;
  }

  public get countOfSkipingTurns(): number {
    return this._countOfSkipingTurns;
  }

  public get weapon(): IWeapon {
    return this._weapon;
  }

  public get currentSkill(): ISkill | undefined {
    return this._currentSkill;
  }

  public get skills(): ISkill[] {
    return this._skills;
  }

  public choseSkill(): void {
    this._currentSkill = getRandomArrayElement(this.skills);
  }

  public useSkill(opponent: Player, skillName: string | null = null): boolean {
    if (this.skills.length === 0) {
      return;
    }

    if (skillName !== null) {
      this._currentSkill = this.skills.find(skill => skill.name === skillName.toLowerCase());
    }

    if (this._currentSkill !== undefined && this._currentSkill.usageCount > 0) {
      if (this._currentSkill.effect) {
        this._currentSkill.effect(this, opponent);
      }
      this._currentSkill.usageCount--;
      this.skills.forEach(skill => {
        if (skill.name === this._currentSkill.name) {
          skill.usageCount--;
        }
      });

      return true;
    }

    return false;
  }

  public attack(opponent: Player): number {
    if (this.countOfSkipingTurns > 0) {
      this._countOfSkipingTurns--;
      return 0;
    }

    if (this._currentSkill) {
      const skillIndex = this._skills.findIndex(skill => skill.name === this._currentSkill.name);

      let skillsBuff: number = 0;

      if (skillIndex !== -1) {
        this._skills[skillIndex].isUsed = true;
        this._skills.forEach(skill => {
          if (skill.isUsed && skill.buff) {
            if (skill.turns <= 0) {
              skill.turns = skill.initialTurns;
              skill.isUsed = false;
            }
            if (skill.turns > 0) {
              skill.turns--;
              this._currentSkill.turns--;
            }
            skillsBuff += skill.buff.strength;
          }
        });

        if (this._currentSkill.turns <= 0) {
          this._currentSkill = undefined;
        }
      }

      return opponent.takeDamage(this._strength + this._weapon.damage + skillsBuff, this._currentSkill);
    } else {
      return opponent.takeDamage(this._strength + this._weapon.damage);
    }
  }

  public takeDamage(damage: number, skill: ISkill | undefined = undefined): number {
    let currentDamage: number = damage;
    this._health -= currentDamage;
    if (this._health <= 0) {
      this._health = 0;
      this._isAlive = false;
    }
    return currentDamage;
  }

  public heal(amount: number) {
    if (this._health + amount > this.initialHealth) {
      this._health = this.initialHealth;
    } else {
      this._health = this._health + amount;
    }
  }

  public reset(): void {
    this._health = this.initialHealth;
    this._strength = this.initialStrength;
    this._currentSkill = undefined;
    this._skills.forEach(skill => {
      skill.usageCount = skill.initialSkillUsage;
      skill.isUsed = false;
      skill.turns = skill.initialTurns;
    });
  }

  public skipTurns(value: number): void {
    this._countOfSkipingTurns = value;
  }
}
