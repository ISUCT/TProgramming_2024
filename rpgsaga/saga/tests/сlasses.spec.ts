import { Airplane } from "../src/classes";

describe('Airplane Class', () => {
    let airplane: Airplane;

    beforeEach(() => {
        airplane = new Airplane('Boeing 747', 'USA');
    });

    test('should create an instance of Airplane', () => {
        expect(airplane).toBeInstanceOf(Airplane);
    });

    test('should have a default speed of 0', () => {
        expect(airplane.getSpeed()).toBe(0);
    });

    test('should set speed within valid range', () => {
        const err = airplane.setSpeed(500);
        expect(err).toBeNull();
        expect(airplane.getSpeed()).toBe(500);
    });

    test('should not set speed below minimum', () => {
        const err = airplane.setSpeed(100);
        expect(err).toBeInstanceOf(Error);
        expect(err?.message).toBe('failed setSpeed() for airplane model "Boeing 747" - invalid speed');
        expect(airplane.getSpeed()).toBe(0); // Speed should remain unchanged
    });

    test('should not set speed above maximum', () => {
        const err = airplane.setSpeed(15000);
        expect(err).toBeInstanceOf(Error);
        expect(err?.message).toBe('failed setSpeed() for airplane model "Boeing 747" - invalid speed');
        expect(airplane.getSpeed()).toBe(0); // Speed should remain unchanged
    });

    test('should set and get model correctly', () => {
        airplane.setModel('Airbus A380');
        expect(airplane.getModel()).toBe('Airbus A380');
    });

    test('should set and get manufacturing country correctly', () => {
        airplane.setManufcountry('France');
        expect(airplane.getManufcountry()).toBe('France');
    });

    test('should create a new airplane with specified speed', () => {
        const [newAirplane, err] = Airplane.newAirplane(800, 'Boeing 777', 'USA');
        expect(err).toBeNull();
        expect(newAirplane.getSpeed()).toBe(800);
        expect(newAirplane.getModel()).toBe('Boeing 777');
        expect(newAirplane.getManufcountry()).toBe('USA');
    });

    test('should return error when creating airplane with invalid speed', () => {
        const [newAirplane, err] = Airplane.newAirplane(15000, 'Boeing 777', 'USA');
        expect(err).toBeInstanceOf(Error);
        expect(err?.message).toBe('failed setSpeed() for airplane model "Boeing 777" - invalid speed');
        expect(newAirplane.getSpeed()).toBe(0); // Speed should remain unchanged
    });
});
