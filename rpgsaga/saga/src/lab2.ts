export class Airplane {
    private _Speed: number;
    private _model: string;
    private _passengerCapacity: number;

    constructor(model: string) {
        this._Speed = 0;
        this._model = model;
        this._passengerCapacity = 0;
    }

    public getSpeed(): number {
        return this._Speed;
    }

    public setSpeed(speed: number): void {
        if (speed >= 0) {
            this._Speed = speed;
        } else {
            console.log("Speed cannot be negative");
        }
    }

    public getModel(): string {
        return this._model;
    }

    public setModel(model: string): void {
        this._model = model;
    }

    public getpassengerCapacity(): number {
        return this._passengerCapacity;
    }

    public setpassengerCapacity(capacity: number): void {
        if (capacity >= 0) {
            this._passengerCapacity = capacity;
        } else {
            console.log("Passenger Capacity cannot be negative");
        }
    }

    public displayInfo(): void {
        console.log(`\nModel: ${this.getModel()}`);
        console.log(`Flight Speed: ${this.getSpeed()} km/h`);
        console.log(`Passenger Capacity: ${this.getpassengerCapacity()}`);
    }
}

