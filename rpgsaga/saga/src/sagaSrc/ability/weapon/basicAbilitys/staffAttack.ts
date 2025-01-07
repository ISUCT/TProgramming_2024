import effect from '../../../effects/effectAbstract';
import abilityTarget from '../../../enums/abilityTarget';
import Elements from '../../../enums/elementsEnum';
import ability from '../../abilityAbstract';

class staffAttack extends ability {
  protected _name: string = 'Атака мечем';
  protected _discription: string = `Обычная атака мечом, наносит ${this._damage} урона`;
  protected _onUseEffect: effect = undefined;
  protected _damage: number = 10;
  readonly _abilityTarget: abilityTarget = abilityTarget.oneEnemy;
  protected _abilityElement: Elements = Elements.physic;
  onUse(): number {
    return this._damage;
  }
}
export default staffAttack;
