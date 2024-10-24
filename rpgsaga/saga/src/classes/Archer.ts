import { Player } from '../abstract/Player';
import { Logger } from '../utils/output/Logger';

export class Archer extends Player {
  protected className: string = 'Archer';
  skillUsed: boolean = false;

  public useSkill(opponent: Player): void {
    if (!this.skillUsed) {
      Logger.log(
        `(${this.getClassName()}) ${
          this.name
        } использует (Огненные стрелы) на (${opponent.getClassName()}) ${opponent.getName()}`,
      );
      this.skillUsed = true;
    }
  }

  public attack(opponent: Player): void {
    if (this.allowToAttack()) {
      let damage = this.strength;
      if (this.skillUsed) {
        damage += 2;
      }
      Logger.log(
        `(${this.getClassName()}) ${
          this.name
        } наносит урон ${damage} противнику (${opponent.getClassName()}) ${opponent.getName()}`,
      );
      opponent.takeDamage(damage);
    }
  }
}
