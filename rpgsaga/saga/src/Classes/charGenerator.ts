import { Player } from '../Player/Player';
import { Weapon } from '../Weapon/Weapon';

import { abilities, Ability, DamageType } from './Ability';
import { Archer } from './Archer';
import { Caster } from './Caster';
import { Saber } from './Saber';

export const names = [
  'EMIYA',
  'Gilgamesh',
  'Durga',
  'Ptolemaios',
  'Artoria Pendragon',
  'Lancelot',
  'Miyamoto Musashi',
  'Sigurd',
  'Mephistopheles',
  'Sieg',
  'Gilles de Rais',
  'Medea',
];
export class CharacterGenerator {
  static generateRandomPlayer(): Player {
    const classes = [Saber, Caster, Archer];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const weaponKeys = Object.keys(Weapons) as (keyof typeof Weapons)[];
    const randomWeaponKey = weaponKeys[Math.floor(Math.random() * weaponKeys.length)];
    const randomWeapon = Weapons[randomWeaponKey];
    const randomAbility = abilities[Math.floor(Math.random() * abilities.length)];

    const randomPlayer = new randomClass(randomName);
    randomPlayer.weapon = randomWeapon;
    randomPlayer.addAbility(randomAbility);

    return randomPlayer;
  }

  static createCustomPlayer(
    name: string,
    className: 'Saber' | 'Caster' | 'Archer',
    weaponKey: keyof typeof Weapons,
    physicalResist: number,
    magicResist: number,
    abilitiesList: Ability[],
  ): Player {
    let customPlayer: Player;

    switch (className) {
      case 'Saber':
        customPlayer = new Saber(name);
        break;
      case 'Caster':
        customPlayer = new Caster(name);
        break;
      case 'Archer':
        customPlayer = new Archer(name);
        break;
      default:
        customPlayer = new Saber(name);
    }
    customPlayer.name = name;
    customPlayer.weapon = Weapons[weaponKey];
    customPlayer.resists = { physical: physicalResist, magic: magicResist };
    abilitiesList.forEach(ability => customPlayer.addAbility(ability));

    return customPlayer;
  }
}
export const Weapons = {
  sword: new Weapon('Excalibur', 25, DamageType.Physical),
  bankai: new Weapon('Bankai', 30, DamageType.Magic),
  bow: new Weapon('Bow', 20, DamageType.Physical),
};
