import { Player } from "../playerClass/player";

export class Effect {
    private _type: string;
    private _damagePerTurn: number;
    private _duration: number;
    private _target: Player;
  
    constructor(type: string, damagePerTurn: number, duration: number, target: Player) {
      this._type = type;
      this._damagePerTurn = damagePerTurn;
      this._duration = duration;
      this._target = target;
    }

    public get target(): Player {
        return this._target;
    }

    public get type(): string {
        return this._type;
      }

    public get damagePerTurn(): number {
        return this._damagePerTurn;
    }

    public get duration(): number {
        return this._duration;
    }
  
    public applyEffect(target: Player) {
      if (this._duration > 0) {
        console.log(`${target.name} получает ${this._damagePerTurn} урона от эффекта ${this._type}!`);
        target.damaged(this._damagePerTurn);
        this._duration--;
      } else {
        console.log(`${target.name} больше не получает урон от эффекта ${this._type}`);
      }
    }
}