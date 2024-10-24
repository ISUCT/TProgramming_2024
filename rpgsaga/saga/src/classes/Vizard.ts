import { Player } from '../abstract/Player';
import { Logger } from '../utils/output/Logger';

export class Vizard extends Player {
  protected className: string = 'Vizard';
  skillUsed: boolean = false;

  public useSkill(opponent: Player): void {
    if (!this.skillUsed) {
      Logger.log(
        `(${this.playerClassName}) ${this.playerName} использует (Заворожение) на (${opponent.playerClassName}) ${opponent.playerName}`,
      );
      this.skillUsed = true;
    }
  }

  public attack(opponent: Player): void {
    if (this.allowToAttack()) {
      const damage = this.strength;
      Logger.log(
        `(${this.playerClassName}) ${this.playerName} наносит урон ${damage} противнику (${opponent.playerClassName}) ${opponent.playerName}`,
      );
      opponent.takeDamage(damage);
    }
  }

  public takeDamage(damage: number): void {
    if (this.skillUsed) {
      Logger.log(`Противник не может атаковать ${this.playerName} из-за (Заворожения)`);
      this.skillUsed = false;
    } else {
      super.takeDamage(damage);
    }
  }
}
