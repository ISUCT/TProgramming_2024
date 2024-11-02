abstract class Device {
    protected _brand: string;
    protected _model: string;
    protected _battery: number;

    constructor(brand: string, model: string, battery: number) {
        this._brand = brand;
        this._model = model;
        this._battery = battery;
    }

    get brand(): string {
        return this._brand;
    }

    get model(): string {
        return this._model;
    }

    get battery(): number {
        return this._battery;
    }

    set battery(battery: number) {
        if (battery < 0 || battery > 100) {
            throw new Error('Battery must be between 0 and 100');
        }
        this._battery = battery;
    }

    public chargeBattery(amount: number): void {
        if (amount < 0) throw new Error('Charge amount must be positive');
        this._battery = Math.min(this.battery + amount, 100);
        console.log(`Battery charged. Current level: ${this._battery}%`);
    }

    abstract getDeviceInfo(): string;
}

export class Phones extends Device {
    private _number: string;

    constructor(number: string, brand: string, model: string, battery: number) {
        super(brand, model, battery);
        this._number = number;
    }

    get number(): string {
        return this._number;
    }

    set number(number: string) {
        this.validateNonEmpty(number);
        this._number = number;
    }

    private validateNonEmpty(value: string): void {
        if (value.length === 0) {
            throw new Error('Value cannot be empty');
        }
    }

    public call(target: string): void {
        if (this.battery <= 5) {
            console.log('Low battery level to make a call');
            return;
        }
        console.log(`Calling number ${target}. Current battery level: ${this.battery}%`);
        this.battery -= 5;
    }

    public getDeviceInfo(): string {
        return `Phone Info:\nBrand: ${this._brand}\nModel: ${this._model}\nBattery Level: ${this.battery}%\nPhone Number: ${this.number}`;
    }

    public toString(): string {
        return `Phone: ${this._brand} ${this._model}, Number: ${this._number}`;
    }
}

export class SmartPhone extends Device {
    private _apps: string[];

    constructor(brand: string, model: string, battery: number) {
        super(brand, model, battery);
        this._apps = [];
    }

    public installApp(appName: string): void {
        if (this._apps.includes(appName)) {
            console.log(`Application "${appName}" is already installed.`);
            return;
        }
        this._apps.push(appName);
        console.log(`Application "${appName}" installed successfully.`);
    }

    public getDeviceInfo(): string {
        const appsList = this._apps.length > 0 ? this._apps.join(", ") : "No apps installed";
        return `Smartphone Info:\nBrand: ${this._brand}\nModel: ${this._model}\nBattery Level: ${this.battery}%\nInstalled Apps: ${appsList}`;
    }

    public toString(): string {
        return `Smartphone: ${this._brand} ${this._model}`;
    }
}