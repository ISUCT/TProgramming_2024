import { Dog } from "../src/dog";

describe("Cat methods", () => {
  const dog: Dog = new Dog(6, 5, "Zhuchka");

  it("Dog breed", () => {
    expect(dog.breed).toBe("Unknown");
  });

  it("Dog weight", () => {
    expect(dog.weight).toBe(5);
  })

  it("Dog interact", () => {
    expect(dog.interact()).toBe("Dog Zhuchka says bark!");
  });

  it("Dog 'toString' method", () => {
    expect(dog.toString()).toBe("Dog Zhuchka of breed Unknown and age 6 weighs 5kg");
  })
});