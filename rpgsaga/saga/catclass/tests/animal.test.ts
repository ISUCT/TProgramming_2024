import { Cat } from "../src/cat";
import { Dog } from "../src/dog";

describe("Animal methods", () => {
  const cat: Cat = new Cat(7, "Murzik");
  const dog: Dog = new Dog(4, 6, "Sharik");

  it("Animal age", () => {
    expect(cat.age).toBe(7);
  })

  it("Animal name", () => {
    expect(dog.name).toBe("Sharik");
  })

  it("Animal age exceeds maximum value", () => {
    expect(() => {
      const tempCat: Cat = new Cat(100);
    }).toThrow(new Error("Age is invalid"));
  })

  it("Animal age exceeds minimum value", () => {
    expect(() => {
      const tempDog: Dog = new Dog(-25, 4);
    }).toThrow(new Error("Age is invalid"));
  })
})