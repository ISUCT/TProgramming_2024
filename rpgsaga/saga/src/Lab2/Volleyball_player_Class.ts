import { Person } from "./Person_Class";

export class Volleyball_Player extends Person{
    private _position: String;
    private _place_jumping: number;
    private _running_jumping: number;
    private _team: String;
    constructor(
        name: String,
        age: number,
        gender: String,
        height: number,
        weight: number,
        position: String,
        place_jumping: number,
        running_jumping: number,
        team: String
    ) {
        super(name, age, gender, height, weight)
        this._position = position;
        this.place_jumping = place_jumping;
        this.running_jumping = running_jumping;
        this._team = team;
    }

    public set place_jumping(value: number) {
        if (value > this.height) {
            this._place_jumping = value;
        } else {
            throw new Error(`Incorrect place_jumping`)
        }
    }

    public set running_jumping(value: number) {
        if (value > this.height) {
            this._running_jumping = value;
        } else {
            throw new Error(`Incorrect running_jumping`)
        }
    }

    public get position(): String {
        return this._position;
    } 

    public get running_jumping(): number {
        return this._running_jumping;
    }

    public get place_jumping(): number {
        return this._place_jumping;
    }

    public get team(): String {
        return this._team;
    }

    public view_player_parameters(): String {
        return `Player ${this.name}:\n
        Takeoff from a standing jump: ${this._place_jumping - this.height}\n
        Takeoff on a running jump: ${this._running_jumping - this.height}`
    }
}