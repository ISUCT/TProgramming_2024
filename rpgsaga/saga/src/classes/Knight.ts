import { Player } from '../abstract/Player';
import { Logger } from '../utils/output/Logger';

export class Knight extends Player {
  protected _className: string = 'Knight';
  skillUsed: boolean = false;

  public useSkill(opponent: Player): void {
    if (!this.skillUsed) {
      this.skillUsed = true;
      const skillDamage = this._strength * 1.3;
      Logger.log(
        `(${this.className}) ${this._name} использует (Удар возмездия) и наносит урон ${skillDamage} противнику (${opponent.className}) ${opponent.name}`,
      );
      opponent.takeDamage(skillDamage);
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
}
