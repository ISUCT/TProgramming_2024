import { Cat } from '../src/lab2';

describe('Cat Class - Lab 2', () => {
    let cat: Cat;

    beforeEach(() => {
        cat = new Cat('Барсик', 3, 'Шотландская');
    });

    it('should create a cat with correct properties', () => {
        expect(cat.name).toBe('Барсик');
        expect(cat.age).toBe(3);
        expect(cat.breed).toBe('Шотландская');
    });

    it('should set and validate name', () => {
        cat.name = 'Мурзик';
        expect(cat.name).toBe('Мурзик');
        expect(() => { cat.name = ''; }).toThrow('Значение не может быть пустым.');
    });

    it('should set and validate age', () => {
        cat.age = 5;
        expect(cat.age).toBe(5);
        expect(() => { cat.age = -1; }).toThrow('Возраст должен быть от 0 до 30 лет.');
    });

    it('should celebrate birthday and increment age', () => {
        cat.celebrateBirthday();
        expect(cat.age).toBe(4);
    });

    it('should return correct info', () => {
        expect(cat.getInfo()).toBe('Имя: Барсик, Возраст: 3, Порода: Шотландская');
    });
});
