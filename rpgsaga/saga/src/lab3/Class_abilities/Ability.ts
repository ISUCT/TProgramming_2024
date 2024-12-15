export class Ability{
    private _change: number;
    private _owner_ability: String;
    constructor(
        change: number,
        owner_ability: string
    ) {
        this._change = change;
        this._owner_ability = owner_ability;
    }

    public get change_ability(): number {
        return this._change
    }

    public get owner_ability(): String {
        return this._owner_ability
    }
}