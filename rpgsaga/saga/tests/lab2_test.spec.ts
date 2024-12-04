import { Mouse } from '../src/Lab2'; 

describe('Mouse', () => {
    let mouse: Mouse;

    beforeEach(() => {
        mouse = new Mouse('Бобик', 2, 'серый');
    });

    test('should correctly set and get age', () => {
        expect(mouse.getAge()).toBe(2);
        mouse.setAge(3);
        expect(mouse.getAge()).toBe(3);
    });

    test('should throw error for invalid age', () => {
        expect(() => mouse.setAge(-1)).toThrow('Возраст должен быть положительным числом.');
    });

    test('should correctly get name', () => {
        expect(mouse.getName()).toBe('Бобик');
    });

    test('should correctly get color', () => {
        expect(mouse.getColor()).toBe('серый');
    });
});