export class Ability{
    private _change: number;
    private _name_ability: String;
    constructor(
        change: number,
        name_ability: string
    ) {
        this._change = change;
        this._name_ability = name_ability;
    }

    public get change_ability(): number {
        return this._change
    }

    public get name_ability(): String {
        return this._name_ability
    }
}