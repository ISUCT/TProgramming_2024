import { Car } from "../src/car";

describe('Constructor tests', () => {
    let car: Car;
    beforeEach(() => {
        car = new Car('Toyota Camry', 4, 'Automatic', 1500, 'Gasoline', 180);
    });

    it('Should create car with right properties', () => {
        expect(car.numberOfDoors).toEqual(4);
        expect(car.transmissionType).toBe('Automatic');
        expect(car['modelCar']).toBe('Toyota Camry');
        expect(car.weightInKillos).toEqual(1500);
        expect(car.fuelType).toBe('Gasoline');
        expect(car.maxSpeed).toEqual(180);
    });

    it('Should throw Error if number of doors is invalid', () => {
        expect(() => {
            car.numberOfDoors = -1;
        }).toThrow('Invalid number of doors');
    });

    it('Should correctly set transmission type', () => {
        car.transmissionType = 'Manual';
        expect(car.transmissionType).toBe('Manual');
    });
});

describe('Car methods checks', () => {
    let car: Car;
    beforeEach(() => {
        car = new Car('Toyota Camry', 4, 'Automatic', 1500, 'Gasoline', 180);
    });

    it('Should return correct info about car', () => {
        const info = 'Model: Toyota Camry, Number of Doors: 4, Fuel Type: Gasoline, Max Speed: 180 km/h, Weight: 1500 kg';
        expect(car.displayInfo()).toBe(info);
    });

    it('Should correctly determine performance', () => {
        car['maxSpeed'] = 80; 
        expect(car.performance()).toBe('Economy Car');

        car['maxSpeed'] = 150; 
        expect(car.performance()).toBe('Standard Car');

        car['maxSpeed'] = 220; 
        expect(car.performance()).toBe('Sport Car');
    });
});
