import { calculate, taskone, tasktwo } from '../src/tasks';

describe('calculate', () => {
    it('should return the correct value for a valid input', () => {
        expect(calculate(0.5)).toBeCloseTo(3.220, 3); // Примерное значение для x = 0.5
    });

    it('should throw an error for an invalid input', () => {
        expect(() => calculate(2)).toThrow("Входное значение должно быть от -1 до 1.");
    });
});

describe('taskone', () => {
    it('should return the correct array of results for valid inputs', () => {
        const results = taskone(0, 1, 0.2);
        expect(results).toHaveLength(5); // Ожидаем 5 результатов
        expect(results[0]).toBeCloseTo(225.6516, 3); // Примерное значение для x = 0
        expect(results[1]).toBeCloseTo(45.024, 3); // Примерное значение для x = 0.2
        expect(results[2]).toBeCloseTo(7.70948, 3); // Примерное значение для x = 0.4
        expect(results[3]).toBeCloseTo(1.53472, 3); // Примерное значение для x = 0.6
        expect(results[4]).toBeCloseTo(1.09702, 3); // Примерное значение для x = 0.8
    });

    it('should throw an error for invalid inputs', () => {
        expect(() => taskone(0, 2, 0.2)).toThrow("Входные значения должны быть от -1 до 1.");
    });
});

describe('tasktwo', () => {
    it('should return the correct array of results for valid inputs', () => {
        const results = tasktwo(0.1, 0.2, 0.3, 0.4, 0.5);
        expect(results).toHaveLength(5); // Ожидаем 5 результатов
        expect(results[0]).toBeCloseTo(102.998, 3); // Примерное значение для x = 0.1
        expect(results[1]).toBeCloseTo(45.024, 3); // Примерное значение для x = 0.2
        expect(results[2]).toBeCloseTo(18.87433, 3); // Примерное значение для x = 0.3
        expect(results[3]).toBeCloseTo(7.70948, 3); // Примерное значение для x = 0.4
        expect(results[4]).toBeCloseTo(3.22039, 3); // Примерное значение для x = 0.5
    });

    it('should throw an error for invalid inputs', () => {
        expect(() => tasktwo(0.1, 0.2, 0.3, 0.4, 2)).toThrow("Входное значение должно быть от -1 до 1.");
    });
});