import { Airplane } from '../src/lab2';

describe('Airplane', () => {
    let airplane1: Airplane;
    let airplane2: Airplane;

    beforeEach(() => {
        airplane1 = new Airplane("Boeing 767");
        airplane2 = new Airplane("Boeing 737");
    });

    it('should initialize with default values', () => {
        expect(airplane1.getSpeed()).toBe(0);
        expect(airplane1.getModel()).toBe("Boeing 767");
        expect(airplane1.getpassengerCapacity()).toBe(0);

        expect(airplane2.getSpeed()).toBe(0);
        expect(airplane2.getModel()).toBe("Boeing 737");
        expect(airplane2.getpassengerCapacity()).toBe(0);
    });

    it('should set and get speed correctly', () => {
        airplane1.setSpeed(850);
        expect(airplane1.getSpeed()).toBe(850);

        airplane2.setSpeed(750);
        expect(airplane2.getSpeed()).toBe(750);

        airplane1.setSpeed(-100);
        expect(airplane1.getSpeed()).toBe(850); 

        airplane2.setSpeed(-100);
        expect(airplane2.getSpeed()).toBe(750); 
    });

    it('should set and get model correctly', () => {
        airplane1.setModel("Airbus A380");
        expect(airplane1.getModel()).toBe("Airbus A380");

        airplane2.setModel("Airbus A320");
        expect(airplane2.getModel()).toBe("Airbus A320");
    });

    it('should set and get passenger capacity correctly', () => {
        airplane1.setpassengerCapacity(250);
        expect(airplane1.getpassengerCapacity()).toBe(250);

        airplane2.setpassengerCapacity(215);
        expect(airplane2.getpassengerCapacity()).toBe(215);

        airplane1.setpassengerCapacity(-50);
        expect(airplane1.getpassengerCapacity()).toBe(250);

        airplane2.setpassengerCapacity(-50);
        expect(airplane2.getpassengerCapacity()).toBe(215); 
    });

    it('should display correct information', () => {
        airplane1.setSpeed(850);
        airplane1.setpassengerCapacity(250);

        const console_proverka_airplane1 = jest.spyOn(console, 'log');
        airplane1.displayInfo();

        expect(console_proverka_airplane1).toHaveBeenCalledWith(`\nModel: Boeing 767`);
        expect(console_proverka_airplane1).toHaveBeenCalledWith(`Flight Speed: 850 km/h`);
        expect(console_proverka_airplane1).toHaveBeenCalledWith(`Passenger Capacity: 250`);

        console_proverka_airplane1.mockRestore();

        airplane2.setSpeed(750);
        airplane2.setpassengerCapacity(215);

        const console_proverka_airplane2 = jest.spyOn(console, 'log');
        airplane2.displayInfo();

        expect(console_proverka_airplane2).toHaveBeenCalledWith(`\nModel: Boeing 737`);
        expect(console_proverka_airplane2).toHaveBeenCalledWith(`Flight Speed: 750 km/h`);
        expect(console_proverka_airplane2).toHaveBeenCalledWith(`Passenger Capacity: 215`);

        console_proverka_airplane2.mockRestore();
    });
});