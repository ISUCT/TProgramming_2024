export class Car {
    private _speed: number;
    private _model: string;
    private _fuelType: string;
  
    // Конструктор с параметрами
    constructor(model: string, fuelType: string) {
      this._speed = 0;
      this._model = model;
      this._fuelType = fuelType;
    }
  
    // Метод для получения текущей скорости
    public getSpeed(): number {
      return this._speed;
    }
  
    // Метод для установки скорости
    public setSpeed(speed: number): void {
      if (speed >= 0) {
        this._speed = speed;
      } else {
        throw new Error('Speed cannot be negative');
      }
    }
  
    // Метод для получения модели автомобиля
    public getModel(): string {
      return this._model;
    }
  
    // Метод для установки модели автомобиля
    public setModel(model: string): void {
      this._model = model;
    }
  
    // Метод для получения типа топлива
    public getFuelType(): string {
      return this._fuelType;
    }
  
    // Метод для установки типа топлива
    public setFuelType(fuelType: string): void {
      this._fuelType = fuelType;
    }
  
    // Метод для отображения информации об автомобиле
    public displayInfo(): void {
      console.log(`\nModel: ${this.getModel()}`);
      console.log(`Current Speed: ${this.getSpeed()} km/h`);
      console.log(`Fuel Type: ${this.getFuelType()}`);
    }
  }