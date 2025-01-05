import { getRandomArrayElement, getRandomNumber } from '../../utils/randomization';
import { IWeapon } from '../../weapon/IWeapon';

export class WeaponFabric implements IWeapon {
  private names: object = {
    sword: ['Dragonsbane', 'Stormbringer', 'Aethelred'],
    stick: ['Oak Staff', 'Elderwood Branch', "Shepherd's Crook"],
    bow: ["Hunter's Bow", 'Longbow', 'Shortbow'],
  };
  private types: string[] = ['огонь', 'яд', 'лёд'];

  private _name: string = '';
  private _typeOfDamage: string = '';
  private _damage: number = 0;

  public get name(): string {
    return this._name;
  }

  public get typeOfDamage(): string {
    return this._typeOfDamage;
  }

  public get damage(): number {
    return this._damage;
  }

  public createWeapon(weaponType: string, weaponDamageType: string, weaponName: string, weaponDamage: number) {
    let weapon: IWeapon;
    this._name = weaponName;
    this._damage = weaponDamage;
    this._typeOfDamage = weaponDamageType;
    switch (weaponType.toLowerCase()) {
      case 'sword':
        weapon = {
          name: this.name,
          damage: this.damage,
          typeOfDamage: this.typeOfDamage,
        };
        break;
      case 'stick':
        weapon = {
          name: this.name,
          damage: this.damage,
          typeOfDamage: this.typeOfDamage,
        };
        break;
      case 'bow':
        weapon = {
          name: this.name,
          damage: this.damage,
          typeOfDamage: this.typeOfDamage,
        };
        break;
      default:
        weapon = {
          name: 'fists',
          damage: 3,
          typeOfDamage: '-',
        };
    }
    return weapon;
  }

  public createRandomWeapon(weaponType: string): IWeapon {
    const damageType = getRandomArrayElement(this.types)!;
    const namesArr: string[] = this.names[weaponType.toLowerCase() as keyof typeof this.names];

    if (!namesArr) {
      return this.createWeapon('fists', '-', 'fists', 3);
    }

    const name =
      this.names[weaponType.toLowerCase() as keyof typeof this.names][Math.floor(Math.random() * namesArr.length)];
    const damage = getRandomNumber(5, 10);
    return this.createWeapon(weaponType, damageType, name, damage);
  }
}
