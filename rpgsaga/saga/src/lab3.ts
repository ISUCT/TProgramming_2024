abstract class Device {
  protected brand: string;
  protected model: string;
  protected battery: number;

  constructor(brand: string, model: string, battery: number) {
    this.brand = brand;
    this.model = model;
    this.battery = battery;
  }

  getBrand(): string {
    return this.brand;
  }

  getModel(): string {
    return this.model;
  }

  getBattery(): number {
    return this.battery;
  }

  setBattery(battery: number): void {
    if (battery < 0 || battery > 100) {
      throw new Error('Battery must be between 0 and 100');
    }
    this.battery = battery;
  }

  public chargeBattery(amount: number): void {
    if (amount < 0) {
      throw new Error('Charge amount must be positive');
    }
    this.battery = Math.min(this.battery + amount, 100);
    console.log(`Battery charged. Current level: ${this.battery}%`);
  }

  abstract getDeviceInfo(): string;
}

export class Phones extends Device {
  private number: string;

  constructor(number: string, brand: string, model: string, battery: number) {
    super(brand, model, battery);
    this.number = number;
  }

  getNumber(): string {
    return this.number;
  }

  setNumber(number: string): void {
    this.validateNonEmpty(number);
    this.number = number;
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
    return `Phone Info:\nBrand: ${this.brand}\nModel: ${this.model}\nBattery Level: ${this.battery}%\nPhone Number: ${this.number}`;
  }

  public toString(): string {
    return `Phone: ${this.brand} ${this.model}, Number: ${this.number}`;
  }
}

export class SmartPhone extends Device {
  private apps: string[];

  constructor(brand: string, model: string, battery: number) {
    super(brand, model, battery);
    this.apps = [];
  }

  public installApp(appName: string): void {
    if (this.apps.includes(appName)) {
      console.log(`Application "${appName}" is already installed.`);
      return;
    }
    this.apps.push(appName);
    console.log(`Application "${appName}" installed successfully.`);
  }

  public getDeviceInfo(): string {
    const appsList = this.apps.length > 0 ? this.apps.join(', ') : 'No apps installed';
    return `Smartphone Info:\nBrand: ${this.brand}\nModel: ${this.model}\nBattery Level: ${this.battery}%\nInstalled Apps: ${appsList}`;
  }

  public toString(): string {
    return `Smartphone: ${this.brand} ${this.model}`;
  }
}
