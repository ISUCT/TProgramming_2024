import { Cat } from '../src/cat';

describe("Cat methods", () => {
  const cat: Cat = new Cat(5, "Vasya");

  it("Cat age", () => {
    expect(cat.age).toBe(5);
  })

  it("Cat name", () => {
    expect(cat.name).toBe("Vasya");
  })

  it("Cat breed", () => {
    expect(cat.breed).toBe("Unknown");
  })

  it("Cat pet", () => {
    expect(cat.petTheCat()).toBe("Cat Vasya says meow!");
  })
})

describe("Cat class", () => {
  it("Cat class with only age passed to constructor", () => {
    testCat(2);
  })

  it("Cat class with age and name passed to constructor", () => {
    testCat(6, "Kot");
  })

  it("Cat class with all arguments passed to constructor", () => {
    testCat(19, "Cat", "Siamese");
  })
})

function testCat(age: number, name?: string, breed?: string) {
  const cat: Cat = new Cat(age, name, breed);

  expect(cat.age).toBe(age);
  if (name) {
    expect(cat.name).toBe(name);
  } else {
    expect(cat.name).toBe("No name");
  }

  if (breed) {
    expect(cat.breed).toBe(breed);
  } else {
    expect(cat.breed).toBe("Unknown");
  }

  expect(cat.petTheCat()).toBe(`Cat ${cat.name} says meow!`);
}
