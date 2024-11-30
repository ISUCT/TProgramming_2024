import { Cat } from '../src/cat';

describe('Cat', () => {
    it('should create a cat with default weight', () => {
        const cat = new Cat("Barsik", 3);
        expect(cat.toString()).toBe("Cat: Barsik, Age: 3, Weight: 0");
    });

    it('should create a cat with specified weight', () => {
        const cat = new Cat("Barsik", 3, 5);
        expect(cat.toString()).toBe("Cat: Barsik, Age: 3, Weight: 5");
    });

    it('should return correct sound', () => {
        const cat = new Cat("Barsik", 3);
        expect(cat.sound()).toBe("Meow");
    });
});