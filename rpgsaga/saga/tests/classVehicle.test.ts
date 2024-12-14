import { SportCar } from '../src/classVehicle/classSportCar';
import { Truck } from '../src/classVehicle/classTruck';

describe('SportCar', () => {
  let sportCar: SportCar;
  let truck: Truck;

  beforeEach(() => {
    sportCar = new SportCar('Lamborghini', 370, 'Blue Glauco', 770);
    truck = new Truck('Scania', 102, 'Off White', 5);
  });

  test('should SportCar drive forward', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    sportCar.driveForward();
    expect(consoleSpy).toHaveBeenCalledWith('Your', 'Lamborghini', 'drive forward.');
  });

  test('should SportCar drive reverse', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    sportCar.driveReverse();
    expect(consoleSpy).toHaveBeenCalledWith('Your', 'Lamborghini', 'drive reverse.');
  });

  test('should create a SportCar instance with correct properties', () => {
    expect(sportCar.brand).toBe('Lamborghini');
    expect(sportCar.speed).toBe(370);
    expect(sportCar.color).toBe('Blue Glauco');
    expect(sportCar.power).toBe(770);
  });

  test('should create a Truck instance with correct properties', () => {
    expect(truck.brand).toBe('Scania');
    expect(truck.speed).toBe(102);
    expect(truck.color).toBe('Off White');
    expect(truck.wheelBaseLength).toBe(5);
  });

  test('get and set speed for SportCar correctly', () => {
    sportCar.speed = 315;
    expect(sportCar.speed).toBe(315);

    expect(() => {
      sportCar.speed = -1;
    }).toThrow('Скорость не может принимать такое значение.');

    expect(() => {
      sportCar.speed = 500;
    }).toThrow('Скорость не может принимать такое значение.');
  });

  test('get and set speed for Truck correctly', () => {
    expect(() => {
      truck.speed = -1;
    }).toThrow('Скорость не может принимать такое значение.');

    expect(() => {
      truck.speed = 500;
    }).toThrow('Скорость не может принимать такое значение.');
  });

  test('get and set brand for SportCar correctly', () => {
    sportCar.brand = 'Mazda';
    expect(sportCar.brand).toBe('Mazda');

    expect(() => {
      sportCar.brand = 'aaaaaaaaaaaaaa';
    }).toThrow('Имя бренда не может быть таким длинным.');
  });

  test('get and set brand for Truck correctly', () => {
    truck.brand = 'Volvo';
    expect(truck.brand).toBe('Volvo');

    expect(() => {
      truck.brand = 'aaaaaaaaaaaaaa';
    }).toThrow('Имя бренда не может быть таким длинным.');
  });

  test('get and set color for SportCar correctly', () => {
    sportCar.color = 'Fiolet';
    expect(sportCar.color).toBe('Fiolet');

    expect(() => {
      sportCar.color = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    }).toThrow('Цвет не может иметь такое длинное название.');
  });

  test('get and set color for Truck correctly', () => {
    truck.color = 'Fiolet';
    expect(truck.color).toBe('Fiolet');

    expect(() => {
      truck.color = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    }).toThrow('Цвет не может иметь такое длинное название.');
  });

  test('get and set power for SportCar correctly', () => {
    sportCar.power = 2028;
    expect(sportCar.power).toBe(2028);

    expect(() => {
      sportCar.power = -1;
    }).toThrow('Автомобиля такой мощности еще не изобрели.');

    expect(() => {
      sportCar.power = 2029;
    }).toThrow('Автомобиля такой мощности еще не изобрели.');
  });

  test('get and set wheel base length for Truck correctly', () => {
    truck.wheelBaseLength = 8;
    expect(truck.wheelBaseLength).toBe(8);

    expect(() => {
      truck.wheelBaseLength = 12;
    }).toThrow('Колесную базу такой длины еще не изобрели.');

    expect(() => {
      truck.wheelBaseLength = -1;
    }).toThrow('Колесную базу такой длины еще не изобрели.');
  });

  test('should return correct string representation for SportCar', () => {
    const expectedString = 'SportCar: {brand: Lamborghini, speed: 370, color: Blue Glauco, Power: 770}';
    expect(sportCar.toString()).toBe(expectedString);
  });

  test('should return correct string representation for Truck', () => {
    const expectedString = 'Truck: {brand: Scania, speed: 102, color: Off White, Wheel Base Length: 5}';
    expect(truck.toString()).toBe(expectedString);
  });
});
