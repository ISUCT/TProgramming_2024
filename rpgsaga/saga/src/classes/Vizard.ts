import { Player } from '../abstract/Player';
import { Logger } from '../utils/output/Logger';

export class Vizard extends Player {
  protected _className: string = 'Vizard';
  skillUsed: boolean = false;

  public useSkill(opponent: Player): void {
    if (!this.skillUsed) {
      Logger.log(
        `(${this.className}) ${this._name} использует (Заворожение) на (${opponent.className}) ${opponent.name}`,
      );
      this.skillUsed = true;
    }
  }

  public attack(opponent: Player): void {
    if (this.allowToAttack()) {
      const damage = this._strength;
      Logger.log(
        `(${this.className}) ${this._name} наносит урон ${damage} противнику (${opponent.className}) ${opponent.name}`,
      );
      opponent.takeDamage(damage);
    }
  }

  public takeDamage(damage: number): void {
    if (this.skillUsed) {
      Logger.log(`Противник не может атаковать ${this._name} из-за (Заворожения)`);
      this.skillUsed = false;
    } else {
      super.takeDamage(damage);
    }
  }
}
