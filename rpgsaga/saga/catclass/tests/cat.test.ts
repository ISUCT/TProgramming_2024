import { Cat } from '../src/cat';

describe("Cat methods", () => {
  const cat: Cat = new Cat(5, "Vasya");

  it("Cat age", () => {
    expect(cat.age).toBe(5);
  });

  it("Cat name", () => {
    expect(cat.name).toBe("Vasya");
  });

  it("Cat breed", () => {
    expect(cat.breed).toBe("Unknown");
  });

  it("Cat pet", () => {
    expect(cat.petTheCat()).toBe("Cat Vasya says meow!");
  });
  
  it("Cat age smaller than allowed", () => {
    expect(() => {
      const invCat: Cat = new Cat(-10);
    }).toThrow(new Error('Age is invalid'));
  });

  it("Cat age bigger than allowed", () => {
    expect(() => {
      const invCat: Cat = new Cat(100);
    }).toThrow(new Error('Age is invalid'));
  });
});