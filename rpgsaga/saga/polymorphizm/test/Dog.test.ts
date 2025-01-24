import { Dog } from '../src/dog';

describe('Dog', () => {
    it('should create a dog with default weight', () => {
        const dog = new Dog("Bobik", 5);
        expect(dog.toString()).toBe("Dog: Bobik, Age: 5, Weight: 0");
    });

    it('should create a dog with specified weight', () => {
        const dog = new Dog("Bobik", 5, 10);
        expect(dog.toString()).toBe("Dog: Bobik, Age: 5, Weight: 10");
    });

    it('should return correct sound', () => {
        const dog = new Dog("Bobik", 5);
        expect(dog.sound()).toBe("Woof");
    });
});