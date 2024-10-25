import { Car } from "../src/classCar/classCar"

describe('Car', () => {
    let car: Car;

    beforeEach(() => {
        car = new Car("Mazda", 213, "Fiolet");
    });

    test("should drive forward", () => {
        const consoleSpy = jest.spyOn(console, "log");
        car.driveForward();
        expect(consoleSpy).toHaveBeenCalledWith("Your", "Mazda", "drive forward.");
    });

    test("should drive reverse", () => {
        const consoleSpy = jest.spyOn(console, "log");
        car.driveReverse();
        expect(consoleSpy).toHaveBeenCalledWith("Your", "Mazda", "drive reverse.");
    });

    test("should engine on", () => {
        const consoleSpy = jest.spyOn(console, "log");
        car.engineOn();
        expect(consoleSpy).toHaveBeenCalledWith("Engine your", "Mazda", "on.");
    });

    test("should engine off", () => {
        const consoleSpy = jest.spyOn(console, "log");
        car.engineOff();
        expect(consoleSpy).toHaveBeenCalledWith("Engine your", "Mazda", "off.");
    });

    test("should create a car instanse with correct properties", () => {
        expect(car.brand).toBe("Mazda");
        expect(car.speed).toBe(213);
        expect(car.color).toBe("Fiolet");
    });

    test("should get and set speed correctly", () => {
        car.speed = 315;
        expect(car.speed).toBe(315);

        expect(() => {
            car.speed = -1;
        }).toThrow("Скорость не может принимать такое значение.");

        expect(() => {
            car.speed = 316;
        }).toThrow("Скорость не может принимать такое значение.")
    });

    test("should get and set brand correctly", () => {
        car.brand = "Mazda";
        expect(car.brand).toBe("Mazda");

        expect(() => {
            car.brand = "aaaaaaaaaaaaaa"
        }).toThrow("Имя бренда не может быть таким длинным.");
    });

    test("should get and set color correctly", () => {
        car.color = "Fiolet";
        expect(car.color).toBe("Fiolet");

        expect(() => {
            car.color = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        }).toThrow("Цвет не может иметь такое длинное название.")
    });

});