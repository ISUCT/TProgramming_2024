import { Cat } from '../src/cat';

describe("Cat methods", () => {
  const cat: Cat = new Cat(5, "Vasya");

  it("Cat breed", () => {
    expect(cat.breed).toBe("Unknown");
  });

  it("Cat interact", () => {
    expect(cat.interact()).toBe("Cat Vasya says meow!");
  });

  it("Cat 'toString' method", () => {
    expect(cat.toString()).toBe("Cat Vasya of breed Unknown and age 5");
  })
});