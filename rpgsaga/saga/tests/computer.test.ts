import { Computer } from "../src/computer";

describe('Computer', () => {
    let computer: Computer;

    beforeEach(() => {
        computer = new Computer('Dell', 'XPS 13', 1000);
    });

    test('should initialize with correct brand and model', () => {
        expect(computer.brand).toBe('Dell');
        expect(computer.model).toBe('XPS 13');
    });

    test('should initialize with correct hard disk size', () => {
        expect(computer.getHardDiskSize()).toBe(1000);
    });

    test('should turn on the computer', () => {
        computer.turnOn();
        expect(computer.is_on).toBe(true);
    });

    test('should not turn on the computer if it is already on', () => {
        computer.turnOn();
        const consoleSpy = jest.spyOn(console, 'log');
        computer.turnOn();
        expect(consoleSpy).toHaveBeenCalledWith('Dell XPS 13 is already ON.');
        expect(computer.is_on).toBe(true);
    });

    test('should turn off the computer', () => {
        computer.turnOn();
        computer.turnOff();
        expect(computer.is_on).toBe(false);
    });

    test('should not turn off the computer if it is already off', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        computer.turnOff();
        expect(consoleSpy).toHaveBeenCalledWith('Dell XPS 13 is already OFF.');
        expect(computer.is_on).toBe(false);
    });

    test('should set hard disk size', () => {
        computer.setHardDiskSize(2000);
        expect(computer.getHardDiskSize()).toBe(2000);
    });

    test('should get correct status when computer is on', () => {
        computer.turnOn();
        expect(computer.getStatus()).toBe('Dell XPS 13 is ON with 1000 GB hard disk.');
    });

    test('should get correct status when computer is off', () => {
        expect(computer.getStatus()).toBe('Dell XPS 13 is OFF with 1000 GB hard disk.');
    });

    test('should initialize with default hard disk size if not provided', () => {
        const defaultComputer = new Computer('Apple', 'MacBook Pro');
        expect(defaultComputer.getHardDiskSize()).toBe(500);
    });
});