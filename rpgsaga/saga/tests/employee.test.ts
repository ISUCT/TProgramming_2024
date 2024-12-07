import { Employee } from "../src/Employee";

describe('test employee', () => {
    it('should return age error', () => {
        expect(() => {
            new Employee('Ivan', -10, 20000);
        }).toThrow(new Error('Age cannot be negative.'));
    })
    it('should return salary error', () => {
        expect(() => {
            new Employee('Alex', 30, -100000);
        }).toThrow(new Error('Salary cannot be negative.'));
    })
    it('should return Bill', () => {
        let x: Employee = new Employee('Bill', 25, 66000);
        x.name = 'Fill';
        expect(x.name).toEqual('Fill');
    });
});