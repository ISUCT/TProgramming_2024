"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cat_1 = require("./cat");
const tests_1 = require("./tests");
if ((0, tests_1.testClass)()) {
    console.log("Tests have passed");
}
else {
    console.error("Tests have failed");
}
let cat = new cat_1.Cat(2, "Kot", "Siamese");
console.log(cat.age);
console.log(cat.name);
console.log(cat.breed);
//# sourceMappingURL=index.js.map