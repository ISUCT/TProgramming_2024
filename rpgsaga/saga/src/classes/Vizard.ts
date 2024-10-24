import { Player } from '../abstract/Player';
import { Logger } from '../utils/output/Logger';

export class Vizard extends Player {
  protected className: string = 'Vizard';
  skillUsed: boolean = false;

  public useSkill(opponent: Player): void {
    if (!this.skillUsed) {
      Logger.log(
        `(${this.getClassName()}) ${
          this.name
        } использует (Заворожение) на (${opponent.getClassName()}) ${opponent.getName()}`,
      );
      this.skillUsed = true;
    }
  }

  public attack(opponent: Player): void {
    if (this.allowToAttack()) {
      const damage = this.strength;
      Logger.log(
        `(${this.getClassName()}) ${
          this.name
        } наносит урон ${damage} противнику (${opponent.getClassName()}) ${opponent.getName()}`,
      );
      opponent.takeDamage(damage);
    }
  }

  public takeDamage(damage: number): void {
    if (this.skillUsed) {
      Logger.log(`Противник не может атаковать ${this.name} из-за (Заворожения)`);
      this.skillUsed = false;
    } else {
      super.takeDamage(damage);
    }
  }
}
