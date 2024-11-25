import { Auto, calculateTime } from "../src/car";

describe('Auto class', () => {
    let auto: Auto;

    beforeEach(() => {
        auto = new Auto();
    });

    test('should set and get speed correctly', () => {
        auto.setSpeed(100);
        expect(auto.getSpeed()).toBe(100);
    });

    test('should reset speed to 0 for invalid values (<=0 or >300)', () => {
        auto.setSpeed(-10);
        expect(auto.getSpeed()).toBe(0);

        auto.setSpeed(350);
        expect(auto.getSpeed()).toBe(0);
    });

    test('should set and get color correctly', () => {
        auto.setColor("Красный");
        expect(auto.getColor()).toBe("Красный");
    });

    test('should set and get size correctly', () => {
        auto.setSize("Четырехместная");
        expect(auto.getSize()).toBe("Четырехместная");
    });

    test('should set and get distance correctly', () => {
        auto.setDistance(200);
        expect(auto.getDistance()).toBe(200);
    });

    test('should reset distance to 0 for negative values', () => {
        auto.setDistance(-50);
        expect(auto.getDistance()).toBe(0);
    });
});

describe('calculateTime function', () => {
    let auto: Auto;

    beforeEach(() => {
        auto = new Auto();
    });

    test('should calculate time correctly for valid speed and distance', () => {
        auto.setSpeed(100);
        auto.setDistance(200);
        expect(calculateTime(auto)).toBe(2);
    });

    test('should return 0 time when speed is 0', () => {
        auto.setSpeed(0);
        auto.setDistance(200);
        expect(calculateTime(auto)).toBe(0);
    });

    test('should return 0 time when time equals 1', () => {
        auto.setSpeed(100);
        auto.setDistance(100);
        expect(calculateTime(auto)).toBe(0);
    });

    test('should handle distance of 0 correctly', () => {
        auto.setSpeed(100);
        auto.setDistance(0);
        expect(calculateTime(auto)).toBe(0);
    });

    test('should handle both speed and distance of 0 correctly', () => {
        auto.setSpeed(0);
        auto.setDistance(0);
        expect(calculateTime(auto)).toBe(0);
    });
});
