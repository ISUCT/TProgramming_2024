import { getRandomNumber } from '../../utils/randomization';
import { IWeapon } from '../../weapon/IWeapon';

export class WeaponFabric {
  private names: object = {
    sword: ['Dragonsbane', 'Stormbringer', 'Aethelred'],
    stick: ['Oak Staff', 'Elderwood Branch', "Shepherd's Crook"],
    bow: ["Hunter's Bow", 'Longbow', 'Shortbow'],
  };

  public createWeapon(weaponType: string, weaponName: string, weaponDamage: number) {
    let weapon: IWeapon;
    switch (weaponType.toLowerCase()) {
      case 'sword':
        weapon = {
          name: weaponName,
          damage: weaponDamage,
        };
        break;
      case 'stick':
        weapon = {
          name: weaponName,
          damage: weaponDamage,
        };
        break;
      case 'bow':
        weapon = {
          name: weaponName,
          damage: weaponDamage,
        };
        break;
      default:
        weapon = {
          name: 'fists',
          damage: 3,
        };
    }
    return weapon;
  }

  public createRandomWeapon(weaponType: string): IWeapon {
    const namesArr: string[] = this.names[weaponType.toLowerCase() as keyof typeof this.names];

    if (!namesArr) {
      return this.createWeapon('fists', 'fists', 3);
    }

    const name =
      this.names[weaponType.toLowerCase() as keyof typeof this.names][Math.floor(Math.random() * namesArr.length)];
    const damage = getRandomNumber(2, 5);
    return this.createWeapon(weaponType, name, damage);
  }
}
