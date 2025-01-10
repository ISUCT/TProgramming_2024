import { Ability } from '../Ability';
import { Player } from '../Players';

export interface AbilityManagerBehavior {
  useAbility(opp: Player, callback?: () => void): void;
}

export class AbilityManager implements AbilityManagerBehavior {
  private _currentUsageAbility: Ability | null;
  private _abilities: Ability[];

  constructor(abilities: Ability[]) {
    this._abilities = abilities;
    this._currentUsageAbility = null;
  }

  private _setCurrentUsageAbility = (ab: Ability | null) => {
    this._currentUsageAbility = ab;
  };

  public useAbility = (opp: Player, baseAttack?: () => void) => {
    for (const ability of this._abilities) {
      if (this._currentUsageAbility) {
        break;
      }
      if (ability.canUseAbility()) {
        ability.activate(opp, baseAttack);
        this._setCurrentUsageAbility(ability);

        break;
      }
    }

    if (!this._currentUsageAbility) {
      baseAttack?.();
    }

    this._setCurrentUsageAbility(null);
  };
}