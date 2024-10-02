"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
class Cat {
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 0 && value <= 25) {
            this._age = value;
            return;
        }
        throw new Error("Age is invalid");
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get breed() {
        return this._breed;
    }
    constructor(age, name, breed) {
        this._age = -1;
        this._name = "No name";
        this._breed = "Unknown";
        this.age = age;
        if (name !== undefined) {
            this._name = name;
        }
        if (breed !== undefined) {
            this._breed = breed;
        }
    }
    petTheCat() {
        return `Cat ${this.name} says meow!`;
    }
}
exports.Cat = Cat;
//# sourceMappingURL=cat.js.map