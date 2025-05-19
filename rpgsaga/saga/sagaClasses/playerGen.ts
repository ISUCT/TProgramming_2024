import { Player } from './player';
import { femaleNames, maleNames, Weapons } from './lists';
import { abilities } from './abilities';
import { Ability } from './ability';
import { Archer } from './archer';
import { Mage } from './mage';
import { Warrior } from './warrior';

export class CharacterGenerator {
  static generateRandomPlayer(): Player {
    const classes = ['Warrior', 'Mage', 'Archer'];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    const randomName =
      Math.random() > 0.5
        ? maleNames[Math.floor(Math.random() * maleNames.length)]
        : femaleNames[Math.floor(Math.random() * femaleNames.length)];

    const weaponKeys = Object.keys(Weapons) as (keyof typeof Weapons)[];
    const randomWeaponKey = weaponKeys[Math.floor(Math.random() * weaponKeys.length)];
    const randomWeapon = Weapons[randomWeaponKey];

    const randomAbility = abilities[Math.floor(Math.random() * abilities.length)];

    let randomPlayer: Player;
    switch (randomClass) {
      case 'Warrior':
        randomPlayer = new Warrior(randomName);
        break;
      case 'Mage':
        randomPlayer = new Mage(randomName);
        break;
      case 'Archer':
        randomPlayer = new Archer(randomName);
        break;
      default:
        randomPlayer = new Warrior(randomName);
    }

    randomPlayer.weapon = randomWeapon;
    randomPlayer.addAbility(randomAbility);

    return randomPlayer;
  }
  static createCustomPlayer(
    name: string,
    className: 'Warrior' | 'Mage' | 'Archer',
    weaponKey: keyof typeof Weapons,
    physicalResist: number,
    magicResist: number,
    abilitiesList: Ability[],
  ): Player {
    let customPlayer: Player;

    switch (className) {
      case 'Warrior':
        customPlayer = new Warrior(name);
        break;
      case 'Mage':
        customPlayer = new Mage(name);
        break;
      case 'Archer':
        customPlayer = new Archer(name);
        break;
      default:
        customPlayer = new Warrior(name);
    }

    customPlayer.weapon = Weapons[weaponKey];
    customPlayer.resists = { physical: physicalResist, magic: magicResist };

    abilitiesList.forEach(ability => customPlayer.addAbility(ability));

    return customPlayer;
  }
}
