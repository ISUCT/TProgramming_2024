import { Ability } from '../abilities/ability';
import { MainAttack } from '../abilities/base attack';
import { FrozenArrows } from '../abilities/frozen arrows';
import { VengeanceStrike } from '../abilities/vengeance strike';

enum AbilitiesNames {
  mainAttack = 'Основная атака',
  frozenArrows = 'Ледяные стрелы',
  vengeanceStrike = 'Удар Возмездия',
  fascination = 'Заворожение',
}


export abstract class Player {
  private _hp: number;
  private _strength: number;
  private _name: string;
  private _attackingAbilities: Ability[]; 
  private _isAttackedAbilities: Ability[]; 
  private _roleNumber: number;
  private _roleName: string;
  private _canAttack: boolean;
  private _isAlive: number;

  constructor(
    hp: number,
    strength: number,
    name: string,
    roleNumber: number,
    attackingAbilities: Ability[],
    isAttackedAblities: Ability[],
    roleName: string,
  ) {
    this._hp = hp;
    this._strength = strength;
    this._name = name;
    this._roleNumber = roleNumber;
    this._canAttack = true;
    this._isAlive = 1;
    this._attackingAbilities = attackingAbilities;
    this._isAttackedAbilities = isAttackedAblities;
    this._roleName = roleName;
  }

  public get hp() {
    return this._hp;
  }

  public get strength() {
    return this._strength;
  }

  public get name() {
    return this._name;
  }

  public get attackingAbilities(): Ability[] {
    return this._attackingAbilities;
  }

  public useMainAttack(ability: Ability, enemy: Player): string {
    ability.setCalculatedDamage(this.strength); 
    return this.attackEnemy(enemy, ability); 
  }

  
  public useVengeanceStrike(ability: Ability, enemy: Player): string {
    ability.setCalculatedDamage(1.3 * this.strength);
    return this.attackEnemy(enemy, ability);
  }

  
  public useFascination(enemy: Player) {
    enemy.canThisPlayerAttack = false; 
    for (let i = 0; i < this._attackingAbilities.length; i++) {
      if (this._attackingAbilities[i].useFrequency === 0) {
        this._attackingAbilities.splice(i, 1); 
      }
    }
    return `${this._name} (${this._roleName}) заворожил ${enemy._name} (${enemy._roleName})`;
  }

  public get roleNumber(): number {
    return this._roleNumber;
  }

  public set alive(newValue: number) {
    this._isAlive = newValue;
  }

  public get alive(): number {
    return this._isAlive;
  }

  public set canThisPlayerAttack(newValue: boolean) {
    this._canAttack = newValue;
  }

  public get isAttackedAbilities(): Ability[] {
    return this._isAttackedAbilities;
  }

  public get canThisPlayerAttack(): boolean {
    return this._canAttack;
  }


  chooseRandomNumber(min: number, max: number): number {
    return min + Math.floor(Math.random() * (max - min + 1));
  }


  selectRandomAbility(): Ability {
    const randomNumber = this.chooseRandomNumber(0, this._attackingAbilities.length - 1);
    return this._attackingAbilities[randomNumber];
  }

  
  createCopyOfAttackingAbility(oldAbility: Ability): Ability {
    let newAbility: Ability;
    switch (oldAbility.name) {
      
      case AbilitiesNames.mainAttack:
        newAbility = new MainAttack();
        break;
      case AbilitiesNames.vengeanceStrike:
        newAbility = new VengeanceStrike();
        break;
      case AbilitiesNames.frozenArrows:
        newAbility = new FrozenArrows();
        break;
    }
    newAbility.changeUseFrequency(1); 
    oldAbility.decreaseUseFrequency(); 
    for (let i = 0; i < this._attackingAbilities.length; i++) {
      if (this._attackingAbilities[i].useFrequency === 0) {
        this._attackingAbilities.splice(i, 1);
      }
    }
    return newAbility;
  }

  get roleName(): string {
    return this._roleName;
  }

  
  useAbility(enemy: Player, ability: Ability): string {
    let str: string;
    let newAbility: Ability;
    this.checkForAbilitiesDamages();
    switch (ability.name) {
      case AbilitiesNames.vengeanceStrike:
        newAbility = this.createCopyOfAttackingAbility(ability);
        str = this.useVengeanceStrike(newAbility, enemy);
        break;
      case AbilitiesNames.mainAttack:
        newAbility = this.createCopyOfAttackingAbility(ability);
        str = this.useMainAttack(newAbility, enemy);
        break;
      case AbilitiesNames.fascination:
        str = this.useFascination(enemy);
        ability.decreaseUseFrequency();
        break;
      default:
        newAbility = this.createCopyOfAttackingAbility(ability);
        str = this.attackEnemy(enemy, newAbility);
        break;
    }
    return str;
  }

  
  getRandomAbility(): Ability {
    let randNumb = this.chooseRandomNumber(0, this._attackingAbilities.length - 1);
    let randomAbility = this._attackingAbilities[randNumb];
    while (randomAbility.useFrequency === 0) {
      randNumb = this.chooseRandomNumber(0, this._attackingAbilities.length - 1);
      randomAbility = this._attackingAbilities[randNumb];
    }
    return randomAbility;
  }

  
  attackEnemy(enemy: Player, attackingAbility: Ability): string {
    let damage = 0;
    damage = enemy.getAttack(attackingAbility);
    return `(${this.roleName})${this.name} нанёс (${enemy.roleName})${enemy.name} ${damage} урона, использовав "${attackingAbility.name}".`;
  }

  
  checkForAbilitiesDamages(): number {
    let abilitiesDurationDamages = 0;
    const willBeDeletedAbilities = []; 

    for (let i = 0; i < this._isAttackedAbilities.length; i++) {
      if (this._isAttackedAbilities[i].duration > 0) {
        abilitiesDurationDamages += this._isAttackedAbilities[i].durationDamage; 
        this._isAttackedAbilities[i].decreaseDuration(); 
      }

      if (this._isAttackedAbilities[i].useFrequency === 0 && this._isAttackedAbilities[i].duration === 0) {
        willBeDeletedAbilities.push(i); 
      }
    }

    for (let i = 0; i < willBeDeletedAbilities.length; i++) {
      this._isAttackedAbilities.splice(willBeDeletedAbilities[i], 1); 
    }

    this._hp -= abilitiesDurationDamages;
    if (this._hp <= 0) {
      this.alive = 0; 
    }
    return abilitiesDurationDamages;
  }

  
  getAttack(ability: Ability): number {
    let damage = 0;
    this._isAttackedAbilities.push(ability); 
    ability.decreaseUseFrequency(); 
    damage += ability.damage; 

    this._hp -= damage;
    this.checkForAbilitiesDamages(); 
    if (this._hp <= 0) {
      this.alive = 0; 
    }
    return damage;
  }
}
