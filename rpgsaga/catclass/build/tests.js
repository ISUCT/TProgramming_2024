"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testClass = testClass;
const cat_1 = require("./cat");
function testClass() {
    let defaultCats = testCat(2) && testCat(6, "Kot") && testCat(19, "Cat", "Siamese");
    if (!defaultCats) {
        return false;
    }
    try {
        testCat(-5);
    }
    catch (_) {
        return true;
    }
    return false;
}
function testCat(age, name, breed) {
    let cat = new cat_1.Cat(age, name, breed);
    let fieldsCheck = false;
    let methodCheck = false;
    if (name === undefined && breed === undefined) {
        fieldsCheck = checkCatFields(cat, age, "No name", "Unknown");
    }
    else if (name === undefined && breed !== undefined) {
        fieldsCheck = checkCatFields(cat, age, "No name", breed);
    }
    else if (name !== undefined && breed === undefined) {
        fieldsCheck = checkCatFields(cat, age, name, "Unknown");
    }
    else if (name !== undefined && breed !== undefined) {
        fieldsCheck = checkCatFields(cat, age, name, breed);
    }
    methodCheck = cat.petTheCat() == `Cat ${cat.name} says meow!`;
    return fieldsCheck && methodCheck;
}
function checkCatFields(cat, age, name, breed) {
    return cat.age == age && cat.name == name && cat.breed == breed;
}
//# sourceMappingURL=tests.js.map