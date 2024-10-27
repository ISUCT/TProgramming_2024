import { Fox } from "../src/3task";


describe('Fox class', () => {
    it('should create a fox with default values', () => {
        const fox = new Fox("Fox Bob");
        expect(fox.getName()).toBe("Fox Bob");
        expect(fox.getAge()).toBe(0);
        expect(fox.getColor()).toBe("gray");
    });

    it('should create a fox with provided values', () => {
        const fox = new Fox("Fox Alice", 3, "red");
        expect(fox.getName()).toBe("Fox Alice");
        expect(fox.getAge()).toBe(3);
        expect(fox.getColor()).toBe("red");
    });

    it('should return the correct view', () => {
        const fox = new Fox("Fox Bob");
        const expectedView = `
        \\   /
         \\ /
          V
          O
         / \\
        /   \\
        `;
        expect(fox.getView()).toBe(expectedView);
    });
});