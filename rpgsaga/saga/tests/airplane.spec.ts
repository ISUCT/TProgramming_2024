import { Airplane } from "../src/airplane"; 

describe('Constructor tests', () => {
    let airplane: Airplane;
    beforeEach(() => {
        airplane = new Airplane(30, 100, 'Boeing 737', 8000, 'Jet Fuel', 850);
    });

    it('Should create airplane with right properties', () => {
        expect(airplane.wingSpan).toEqual(30);
        expect(airplane.passengerCapacity).toEqual(100);
        expect(airplane.modelAirplane).toBe('Boeing 737');
        expect(airplane.weightInKillos).toEqual(8000);
        expect(airplane.fuelType).toBe('Jet Fuel');
        expect(airplane.maxSpeed).toEqual(850);
    });

    it('Should throw Error if wing span is invalid', () => {
        expect(() => {
            airplane.wingSpan = -10;
        }).toThrow('Invalid wing span value');
    });

    it('Should throw Error if passenger capacity is invalid', () => {
        expect(() => {
            airplane.passengerCapacity = -5;
        }).toThrow('Invalid passenger capacity');
    });

    it('Should correctly set passenger capacity', () => {
        airplane.passengerCapacity = 150;
        expect(airplane.passengerCapacity).toBe(150);
    });
});

describe('Airplane methods checks', () => {
    let airplane: Airplane;
    beforeEach(() => {
        airplane = new Airplane(30, 100, 'Boeing 737', 8000, 'Jet Fuel', 850);
    });

    it('Should return correct info about airplane', () => {
        const info = 'Wing Span: 30m, Passenger Capacity: 100, Model: Boeing 737, Fuel type: Jet Fuel, Max speed: 850, Weight in killos: 8000';
        expect(airplane.displayInfo()).toBe(info);
    });

    it('Should correctly determine performance', () => {
        airplane.passengerCapacity = 30; 
        expect(airplane.performance()).toBe('Small Aircraft');

        airplane.passengerCapacity = 100; 
        expect(airplane.performance()).toBe('Medium Aircraft');

        airplane.passengerCapacity = 200; 
        expect(airplane.performance()).toBe('Large Aircraft');
    });
});