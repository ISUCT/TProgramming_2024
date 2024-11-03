import { Employee } from '../src/lab1';

describe('Employee', () => {
    let emp: Employee;

    beforeEach(() => {
        emp = new Employee("Виктор Иванов", 30, "10.01.2024");
    });

    test('should create an employee with correct properties', () => {
        expect(emp.name).toBe("Виктор Иванов");
        expect(emp.age).toBe(30);
        expect(emp.date).toBe("10.01.2024");
    });

    test('should throw error for invalid age', () => {
        expect(() => {
            emp.age = 15;
        }).toThrow('age is incorrect');

        expect(() => {
            emp.age = 85;
        }).toThrow('age is incorrect');
    });

    test('should set valid age', () => {
        emp.age = 25;
        expect(emp.age).toBe(25);
    });

    test('should print new employee info correctly', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        emp.newEmployee("Александра Павлова", 25, "02.08.2024");

        expect(consoleSpy).toHaveBeenCalledWith("Name: Александра Павлова\nAge: 25\nDate: 02.08.2024");

        consoleSpy.mockRestore();
    });
});