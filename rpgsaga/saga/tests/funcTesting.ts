import { calculate, taskone, tasktwo } from '../src'; 

describe('calculate', () => {
    it('should return the correct value for a valid input', () => {
        expect(calculate(0.5)).toBeCloseTo(3.168, 10); // Примерное значение для x = 0.5
    });

    it('should throw an error for an invalid input', () => {
        expect(() => calculate(2)).toThrow(); // asin(x) и acos(x) не определены для x вне диапазона [-1, 1]
    });
});

describe('taskone', () => {
    it('should return the correct array of results for valid inputs', () => {
        const results = taskone(0, 1, 0.2);
        expect(results).toHaveLength(5); // Ожидаем 5 результатов
        expect(results[0]).toBeCloseTo(248.0502134423985, 10); // Примерное значение для x = 0
        expect(results[1]).toBeCloseTo(44.55761299999999, 10); // Примерное значение для x = 0.2
        expect(results[2]).toBeCloseTo(7.684320000000001, 10); // Примерное значение для x = 0.4
        expect(results[3]).toBeCloseTo(1.5256000000000002, 10); // Примерное значение для x = 0.6
        expect(results[4]).toBeCloseTo(1.0976000000000002, 10); // Примерное значение для x = 0.8
    });

    it('should throw an error for invalid inputs', () => {
        expect(() => taskone(0, 2, 0.2)).toThrow(); // asin(x) и acos(x) не определены для x вне диапазона [-1, 1]
    });
});

describe('tasktwo', () => {
    it('should return the correct array of results for valid inputs', () => {
        const results = tasktwo(0.1, 0.2, 0.3, 0.4, 0.5);
        expect(results).toHaveLength(5); // Ожидаем 5 результатов
        expect(results[0]).toBeCloseTo(104.8576, 10); // Примерное значение для x = 0.1
        expect(results[1]).toBeCloseTo(44.55761299999999, 10); // Примерное значение для x = 0.2
        expect(results[2]).toBeCloseTo(18.6624, 10); // Примерное значение для x = 0.3
        expect(results[3]).toBeCloseTo(7.684320000000001, 10); // Примерное значение для x = 0.4
        expect(results[4]).toBeCloseTo(3.168, 10); // Примерное значение для x = 0.5
    });

    it('should throw an error for invalid inputs', () => {
        expect(() => tasktwo(0.1, 0.2, 0.3, 0.4, 2)).toThrow(); // asin(x) и acos(x) не определены для x вне диапазона [-1, 1]
    });
});