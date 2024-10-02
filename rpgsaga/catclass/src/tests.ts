import { Cat } from "./cat";

export function testClass(): boolean {
  let defaultCats: boolean = testCat(2) && testCat(6, "Kot") && testCat(19, "Cat", "Siamese");
  if(!defaultCats) {
    return false;
  }
  
  try {
    testCat(-5);
  }
  catch(_) {
    return true;
  }

  return false;
}

function testCat(age: number, name?: string, breed?: string) {
  let cat: Cat = new Cat(age, name, breed);

  let fieldsCheck: boolean = false;
  let methodCheck: boolean = false;

  if(name === undefined && breed === undefined) {
    fieldsCheck = checkCatFields(cat, age, "No name", "Unknown");
  }
  else if(name === undefined && breed !== undefined) {
    fieldsCheck = checkCatFields(cat, age, "No name", breed);
  }
  else if(name !== undefined && breed === undefined) {
    fieldsCheck = checkCatFields(cat, age, name, "Unknown");
  }
  else if(name !== undefined && breed !== undefined) {
    fieldsCheck = checkCatFields(cat, age, name, breed);
  }

  methodCheck = cat.petTheCat() == `Cat ${cat.name} says meow!`;
  return fieldsCheck && methodCheck;
}

function checkCatFields(cat: Cat, age: number, name: string, breed: string) {
  return cat.age == age && cat.name == name && cat.breed == breed;
}