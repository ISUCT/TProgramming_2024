import { Cat } from '../src/lab3';

describe('Cat Class - Lab 3', () => {
    let cat: Cat;

    beforeEach(() => {
        cat = new Cat('Барсик', 3, 'Шотландская');
    });

    it('should create a cat with correct properties', () => {
        expect(cat.getAnimalInfo()).toBe('Кошка "Барсик", возраст: 3, порода: Шотландская');
    });

    it('should make a sound', () => {
        expect(cat.makeSound()).toBe('Барсик говорит: "Мяу!"');
    });

    it('should set and get name correctly', () => {
        cat.name = 'Мурзик';
        expect(cat.name).toBe('Мурзик');
    });

    it('should throw error for empty name', () => {
        expect(() => { cat.name = ''; }).toThrow('Имя не может быть пустым.');
    });

    it('should set and get breed correctly', () => {
        cat.breed = 'Сиамская';
        expect(cat.breed).toBe('Сиамская');
    });

    it('should throw error for empty breed', () => {
        expect(() => { cat.breed = ''; }).toThrow('Порода не может быть пустой.');
    });

    it('should set and validate age', () => {
        cat.age = 5;
        expect(cat.age).toBe(5);
    });

    it('should throw error for invalid age', () => {
        expect(() => { cat.age = -1; }).toThrow('Возраст должен быть от 0 до 30 лет.');
        expect(() => { cat.age = 35; }).toThrow('Возраст должен быть от 0 до 30 лет.');
    });

    it('should return correct toString representation', () => {
        expect(cat.toString()).toBe('Кошка: Барсик (Шотландская), возраст: 3');
    });
});
