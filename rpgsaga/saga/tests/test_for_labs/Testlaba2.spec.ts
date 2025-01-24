import { Car } from "../../src/lab1and2/laba2";


describe('Car Class Tests', () => {
  let car: Car;

  beforeEach(() => {
    car = new Car('Toyota Corolla', 'Gasoline');
  });

  // Тест конструктора
  test('should correctly initialize car with model and fuel type', () => {
    expect(car.getModel()).toBe('Toyota Corolla');
    expect(car.getFuelType()).toBe('Gasoline');
    expect(car.getSpeed()).toBe(0);
  });

  // Тест метода setSpeed
  test('should set speed correctly', () => {
    car.setSpeed(100);
    expect(car.getSpeed()).toBe(100);
  });

  // Тест метода setSpeed с отрицательной скоростью
  test('should throw an error when setting negative speed', () => {
    expect(() => car.setSpeed(-50)).toThrow('Speed cannot be negative');
  });

  // Тест метода setModel
  test('should set model correctly', () => {
    car.setModel('Tesla Model S');
    expect(car.getModel()).toBe('Tesla Model S');
  });

  // Тест метода setFuelType
  test('should set fuel type correctly', () => {
    car.setFuelType('Electric');
    expect(car.getFuelType()).toBe('Electric');
  });

  // Тест метода displayInfo
  test('should display correct information', () => {
    car.setSpeed(120);
    const consoleSpy = jest.spyOn(console, 'log');
    car.displayInfo();
    expect(consoleSpy).toHaveBeenCalledWith('\nModel: Toyota Corolla');
    expect(consoleSpy).toHaveBeenCalledWith('Current Speed: 120 km/h');
    expect(consoleSpy).toHaveBeenCalledWith('Fuel Type: Gasoline');
  }); 
});
