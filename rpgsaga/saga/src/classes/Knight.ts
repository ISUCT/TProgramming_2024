import { Player } from '../abstract/Player';
import { Logger } from '../utils/output/Logger';

export class Knight extends Player {
  protected className: string = 'Knight';
  skillUsed: boolean = false;

  public useSkill(opponent: Player): void {
    if (!this.skillUsed) {
      this.skillUsed = true;
      const skillDamage = this.strength * 1.3;
      Logger.log(
        `(${this.getClassName()}) ${
          this.name
        } использует (Удар возмездия) и наносит урон ${skillDamage} противнику (${opponent.getClassName()}) ${opponent.getName()}`,
      );
      opponent.takeDamage(skillDamage);
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
}
