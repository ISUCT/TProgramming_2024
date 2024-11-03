import { Cat, Dog } from "../src/lab3";

describe("Animal", () => {

    describe("Cat", () => {
        let cat: Cat;

        beforeEach(() => {

            cat = new Cat("Marsik", 5, "Siamese");

        });  

        it("should create a new cat", () => {
            expect(cat).toBeDefined();
        });

        it("should have a name", () => {
            expect(cat.getName).toBe("Marsik");
        });

        it("should have a age", () => {
            expect(cat.getAge).toBe(5);
        });

        it("should have a breed", () => {
            expect(cat.getBreed).toBe("Siamese");
        });

        it("should have a change the name", () => {
            cat.changeName("Velzevul")
            expect(cat.getName).toBe("Velzevul");
        });

        it("should have an individual at eating", () => {
            expect(cat.eat()).toBe("Velzevul likes to eat fish and mouses");
        });

        it("should have an individual getFullInfo methode", () => {
            expect(cat.getFullInfo()).toBe(`Cat name: Velzevul, his age is 5 and his breed Siamese`); // Исправлен `return` и форматирование
        });

        it("should have a individual makeSound methode", () => {
            expect(cat.makeSound()).toBe("Meow, meow");
        });

    });
    describe("Dog", () => {

        let dog: Dog;

        beforeEach(() => {
            dog = new Dog("Sharik", 2, "Beagle");
        });

        it("should create a new dog", () => {
            expect(dog).toBeDefined();
        });

        it("should have a name", () => {
            expect(dog.getName).toBe("Sharik");
        });

        it("should have a age", () => {
            expect(dog.getAge).toBe(2);
        });

        it("should have a breed", () => {
            expect(dog.getBreed).toBe("Beagle");
        });

        it("should have a change the name", () => {
            dog.changeName("Grom")
            expect(dog.getName).toBe("Grom");
        });

        it("should have an individual at eating", () => {
            expect(dog.eat()).toBe("Grom likes to eat bones and meat");
        });

        it("should have an individual getFullInfo methode", () => {
            expect(dog.getFullInfo()).toBe(`Dog name: Grom, his age is 2 and his breed Beagle`);
        });

        it("should have a individual makeSound methode", () => {
            expect(dog.makeSound()).toBe("Woof, woof");
        });
    });
});
