import { Player } from '../players roles/player';
import { Archer } from '../players roles/archer';
import { Knight } from '../players roles/knight';
import { Mage } from '../players roles/mage';

export class Calculations {}

enum Roles { 
  knight = 1,
  archery = 2,
  mage = 3,
}

export class PlayerFactory {
  public createPlayer(hp: number, strength: number, name: string, roleNumber: number): Player {
    let player: Player;
    
    switch (roleNumber) {
      case Roles.knight:
        player = new Knight(hp, strength, name, roleNumber);
        return player;
      case Roles.archery:
        player = new Archer(hp, strength, name, roleNumber);
        return player;
      case Roles.mage:
        player = new Mage(hp, strength, name, roleNumber);
        return player;
    }
  }
}
