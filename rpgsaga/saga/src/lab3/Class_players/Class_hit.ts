export class Hit{
    private _damage: number;
    private _type_damage: string;
    private _control: boolean;
    constructor (
        damage: number,
        type_damage: string,
        control: boolean,
    ) {
        this._damage = damage;
        this._type_damage = type_damage;
        this._control = control;
    };

    public set damage(value: number) {
        this._damage = value
    }

    public get damage(): number {
        return this._damage;
    }

    public get type_damage(): string {
        return this._type_damage;
    }

    public get control(): boolean {
        return this._control;
    }
}