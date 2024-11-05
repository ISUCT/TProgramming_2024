
export class Airplane {
    private speed: number;
    private model: string;
    private manufcountry: string;

    constructor(model: string, manufcountry: string) {
        this.model = model;
        this.manufcountry = manufcountry;
        this.speed = 0;
    }

    public getSpeed(): number {
        return this.speed;
    }

    public static newAirplane(speedVar: number, modelVar: string, manufcountryVar: string): [Airplane, Error | null] {
        const airplane = new Airplane(modelVar, manufcountryVar);
        const err = airplane.setSpeed(speedVar);
        return [airplane, err];
    }

    public setSpeed(speed: number): Error | null {
        if (speed > 200 && speed < 10000) {
            this.speed = speed;
            return null;
        }
        return new Error(`failed setSpeed() for airplane model "${this.getModel()}" - invalid speed`);
    }

    public getModel(): string {
        return this.model;
    }

    public setModel(model: string): void {
        this.model = model;
    }

    public getManufcountry(): string {
        return this.manufcountry;
    }

    public setManufcountry(manufcountry: string): void {
        this.manufcountry = manufcountry;
    }
}

