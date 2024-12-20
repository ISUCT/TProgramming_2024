import { Player } from "./playerClass/player";

export function game(player_1: Player, player_2: Player) {
  let z: number = 0;
  while (true) {
    if (z % 2 == 0) {
      if (player_1.isAlive) {
        player_2.damaged(player_1.weapon.damageAmount);
        console.log(`${player_1.name} атаковал ${player_2.name} и нанес ${player_1.weapon.damageAmount}`);
      } else {
        break;
      }
    } else {
      if (player_2.isAlive) {
        player_1.damaged(player_2.weapon.damageAmount);
        console.log(`${player_2.name} атаковал ${player_1.name} и нанес ${player_2.weapon.damageAmount}`);
      } else {
        break;
      }
      }
      z++;
    }
  }


