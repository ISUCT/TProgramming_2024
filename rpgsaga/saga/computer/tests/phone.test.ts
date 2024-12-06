// src/Phone.test.ts
import { Phone } from "../src/phone";

describe('Phone', () => {
    let phone: Phone;

    beforeEach(() => {
        phone = new Phone('Apple', 'iPhone 13', 50);
    });

    test('should initialize with correct brand and model', () => {
        expect(phone.brand).toBe('Apple');
        expect(phone.model).toBe('iPhone 13');
    });

    test('should initialize with correct battery level', () => {
        expect(phone.getBatteryLevel()).toBe(50);
    });

    test('should turn on the phone', () => {
        phone.turnOn();
        expect(phone.isOn).toBe(true);
    });

    test('should not turn on the phone if it is already on', () => {
        phone.turnOn();
        const consoleSpy = jest.spyOn(console, 'log');
        phone.turnOn();
        expect(consoleSpy).toHaveBeenCalledWith('Apple iPhone 13 is already ON.');
        expect(phone.isOn).toBe(true);
    });

    test('should turn off the phone', () => {
        phone.turnOn();
        phone.turnOff();
        expect(phone.isOn).toBe(false);
    });

    test('should not turn off the phone if it is already off', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        phone.turnOff();
        expect(consoleSpy).toHaveBeenCalledWith('Apple iPhone 13 is already OFF.');
        expect(phone.isOn).toBe(false);
    });

    test('should charge the phone', () => {
        phone.charge(30);
        expect(phone.getBatteryLevel()).toBe(80);
    });

    test('should not charge the phone above 100%', () => {
        phone.charge(60);
        expect(phone.getBatteryLevel()).toBe(100);
    });

    test('should get correct status when phone is on', () => {
        phone.turnOn();
        expect(phone.getStatus()).toBe('Apple iPhone 13 is ON with 50% battery.');
    });

    test('should get correct status when phone is off', () => {
        expect(phone.getStatus()).toBe('Apple iPhone 13 is OFF with 50% battery.');
    });

    test('should initialize with default battery level if not provided', () => {
        const defaultPhone = new Phone('Samsung', 'Galaxy S21');
        expect(defaultPhone.getBatteryLevel()).toBe(100);
    });
});