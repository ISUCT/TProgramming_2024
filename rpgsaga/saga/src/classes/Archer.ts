import { Player } from '../abstract/Player';
import { Logger } from '../utils/output/Logger';

export class Archer extends Player {
  protected _className: string = 'Archer';
  skillUsed: boolean = false;

  public useSkill(opponent: Player): void {
    if (!this.skillUsed) {
      Logger.log(
        `(${this.className}) ${this._name} использует (Огненные стрелы) на (${opponent.className}) ${opponent.name}`,
      );
      this.skillUsed = true;
    }
  }

  public attack(opponent: Player): void {
    if (this.allowToAttack()) {
      let damage = this._strength;
      if (this.skillUsed) {
        damage += 2;
      }
      Logger.log(
        `(${this.className}) ${this._name} наносит урон ${damage} противнику (${opponent.className}) ${opponent.name}`,
      );
      opponent.takeDamage(damage);
    }
  }
}
