export class Phone {
    private _number: string;
    private _brand: string;
    private _model: string;
    private _battery: number;

    constructor(number: string, brand: string, model: string, battery: number) {
        this._number = number;
        this._brand = brand;
        this._model = model;
        this._battery = battery;
    }

    get number(): string {
        return this._number;
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

    private validateNonEmpty(value: string): void {
        if (value.length === 0) {
            throw new Error('Value cannot be empty');
        }
    }

    set number(number: string) {
        this.validateNonEmpty(number);
        this._number = number;
    }

    set brand(brand: string) {
        this.validateNonEmpty(brand);
        this._brand = brand;
    }

    set model(model: string) {
        this.validateNonEmpty(model);
        this._model = model;
    }

    set battery(battery: number) {
        if (battery < 0 || battery > 100) {
            throw new Error('Battery must be between 0 and 100');
        }
        this._battery = battery;
    }
    
    public chargeBattery(amount: number) { 
        if (amount < 0) throw new Error('Charge amount must be positive');
        this.battery = Math.min(this.battery + amount, 100);
        console.log(`Battery charged. Current level: ${this.battery}%`);
    }

    public call(target: string) {
        if (this.battery <= 5) {
            console.log('Low battery level to make a call');
            return;
        }
        console.log(`Calling number ${target}. Current battery level: ${this.battery}%`);
        this.battery -= 5;
    }
        
    public getInfo(): string {
        return `Phone Info:\nNumber: ${this._number}\nBrand: ${this._brand}\nModel: ${this._model}\nBattery Level: ${this._battery}%`;
    }
}