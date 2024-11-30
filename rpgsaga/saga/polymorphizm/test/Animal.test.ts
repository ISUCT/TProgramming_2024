import { Animal } from '../src/animal';

class TestAnimal extends Animal {
    sound(): string {
        return "TestSound";
    }
}

describe('Animal', () => {
    it('should create an animal with default weight', () => {
        const animal = new TestAnimal("TestAnimal", 5);
        expect(animal.toString()).toBe("Animal: TestAnimal, Age: 5, Weight: 0");
    });

    it('should create an animal with specified weight', () => {
        const animal = new TestAnimal("TestAnimal", 5, 10);
        expect(animal.toString()).toBe("Animal: TestAnimal, Age: 5, Weight: 10");
    });

    it('should throw an error for negative weight', () => {
        expect(() => new TestAnimal("TestAnimal", 5, -1)).toThrow("Weight cannot be negative");
    });

    it('should set age correctly', () => {
        const animal = new TestAnimal("TestAnimal", 5);
        animal.setAge(10);
        expect(animal.toString()).toBe("Animal: TestAnimal, Age: 10, Weight: 0");
    });

    it('should set weight correctly', () => {
        const animal = new TestAnimal("TestAnimal", 5);
        animal.setWeight(20);
        expect(animal.toString()).toBe("Animal: TestAnimal, Age: 5, Weight: 20");
    });
});