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
  protected skillBuff: number = 0;
  protected _isSkillUsed: boolean = false;
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
    this._health = this.initialHealth;
    this._initialStrength = playerStrength;
    this._strength = this.initialStrength;
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

  public get isSkillUsed(): boolean {
    return this._isSkillUsed;
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

  public useSkill(opponent: Player, skillName: string | null = null): void {
    if (this.skills.length === 0) {
      return;
    }

    if (skillName !== null) {
      this.skills.forEach(skill => {
        if (skill.name === skillName.toLowerCase()) {
          this._currentSkill = skill;
          return;
        }
      });
    }

    if (this._currentSkill !== undefined && this._currentSkill.usageCount > 0) {
      this._currentSkill.effect!(this, opponent);
      this._currentSkill.usageCount--;
      this.skills.forEach(skill => {
        if (skill.name === this._currentSkill!.name) {
          skill.usageCount--;
        }
      });
      this._isSkillUsed = true;
    }
  }

  public attack(opponent: Player): void {
    if (this.countOfSkipingTurns > 0) {
      this._countOfSkipingTurns--;
      return;
    }

    if (this._currentSkill) {
      const skillIndex = this._skills.findIndex(skill => skill.name === this._currentSkill!.name);

      if (skillIndex !== -1) {
        this._skills[skillIndex].isUsed = true;
        this._updateSkills();
      }

      opponent.takeDamage(this._strength + this._weapon.damage, this, this._currentSkill);
    } else {
      opponent.takeDamage(this._strength + this._weapon.damage, this);
    }
  }

  protected _updateSkills(): void {
    for (const skill of this._skills) {
      if (skill.isUsed) {
        if (skill.turns! <= 0) {
          if (skill.buff) {
            this._strength -= skill.buff.strength;
          }
          skill.isUsed = false;
          skill.turns = skill.initialTurns;
        }
        skill.turns--;
      }
    }
  }

  public damageUp(buff: number) {
    this._strength += buff;
  }

  public takeDamage(damage: number, attacker: Player, skill: ISkill | undefined = undefined): void {
    let opponentSkill: ISkill;
    if (skill !== undefined) {
      opponentSkill = skill;
    }
    this._health -= damage;
    if (this._health <= 0) {
      this._health = 0;
      this._isAlive = false;
    }
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
    this._isSkillUsed = false;
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
