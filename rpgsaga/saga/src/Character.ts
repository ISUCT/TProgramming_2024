import { Calculater } from './Calculater';
import { RandomName } from './Const';
import { Logger } from './logger';

export class Character {
  protected healthProtected: number;
  protected damageProtected: number;
  protected maxHealthProtected: number;
  protected nameProtected: string;
  protected classProtected: string;
  protected burnProtected: boolean;

  constructor() {
    this.maxHealthProtected = Calculater.random(100, 250);
    this.damageProtected = Calculater.random(50, 100);
    this.nameProtected = RandomName[Calculater.random(0, RandomName.length - 1)];
    this.healthProtected = this.maxHealthProtected;
    this.burnProtected = false;
  }

  public get health() {
    return this.healthProtected;
  }

  get damage() {
    return this.damageProtected;
  }

  get name() {
    return this.nameProtected;
  }

  public get class(): string {
    return this.classProtected;
  }
  public;

  public get burn(): boolean {
    return this.burnProtected;
  }

  public reHealth() {
    this.healthProtected = this.maxHealthProtected;
    this.burnProtected = false;
  }

  public turn(oponent: Character) {
    this.burning();
    if (Calculater.booleanRandom()) {
      this.useSkill(oponent);
    } else {
      oponent.fightDamager(this.damage);
      Logger.logFight(this, oponent);
    }
  }
  public fightDamager(opDamager: number) {
    this.healthProtected -= opDamager;
  }

  useSkill(oponent: Character) {
    console.log(`Я тебя победюкаю, ${oponent.name}!`);
  }

  burnActive() {
    this.burnProtected = true;
  }
  burning() {
    if (this.burnProtected) {
      this.healthProtected -= 10;
      Logger.logBurn(this);
    }
  }
}
