import { Ability, DamageType, Debuff } from '../Classes/Ability';
import { Weapon } from '../Weapon/Weapon';

export class Player {
  public currentMana: number;
  public debuffs: Debuff[] = [];
  public canAttack: boolean = true;
  public abilities: Ability[] = [];
  public playerClass: string;

  constructor(
    public name: string,
    public maxHealth: number,
    public health: number,
    public maxMana: number,
    public resists: { physical: number; magic: number },
    public weapon?: Weapon,
    playerClass?: string,
  ) {
    this.currentMana = maxMana;
    this.playerClass = playerClass;
  }

  addAbility(ability: Ability): string {
    this.abilities.push(ability);
    return `${this.name} get abillity ${ability.name}.`;
  }

  applyDebuff(debuff: Debuff): void {
    this.debuffs.push(debuff);
    debuff.effect(this);
    if (debuff.affectsAttack) {
      this.canAttack = false;
    }
  }

  restoreHealth(): void {
    this.health = this.maxHealth;
  }

  updateDebuffs(): void {
    this.canAttack = true;
    this.debuffs = this.debuffs.filter(debuff => {
      debuff.duration--;
      if (debuff.duration <= 0) {
        return false;
      }
      if (debuff.affectsAttack) {
        this.canAttack = false;
      }
      return true;
    });
  }

  attack(target: Player): string {
    if (!this.canAttack) {
      return `${this.name} cannot attack!`;
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
    target.health = Math.max(0, target.health - actualDamage);
    return `${this.name} attack ${target.name} using ${this.weapon?.name} and deal ${actualDamage} damage!`;
  }

  refreshAbilityUsages(): void {
    this.abilities.forEach(ability => {
      ability.usageLimit = ability.maxUsageLimit;
    });
  }

  useAbility(target: Player, ability: Ability): string {
    if (ability.usageLimit <= 0) {
      return `${this.name} can no longer use the ability ${ability.name}!`;
    }

    const debuff = ability.effect(target);
    target.applyDebuff(debuff);
    ability.usageLimit--;
    return `${this.name} use the ability ${ability.name} on ${target.name}!`;
  }

  getInfo(): string {
    const abilitiesList = this.abilities.map(ability => ability.name).join(', ') || 'Нет способностей';
    return `${this.name} |${this.playerClass}| have ${this.health} health, ${this.currentMana} mana, can attack: ${this.canAttack ? 'Yes' : 'No'}. Abilities: ${abilitiesList}.`;
  }
}
