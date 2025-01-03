"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(animalName, animalAge, animalBreed) {
        this.name = animalName;
        this.age = animalAge;
        this.breed = animalBreed;
    }
    Object.defineProperty(Animal.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "getAge", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "getBreed", {
        get: function () {
            return this.breed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "setAge", {
        set: function (age) {
            if (age < 0 || age > 25) {
                throw new Error('The value specified is incorrect for the age!');
            }
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    Animal.prototype.changeName = function (newName) {
        this.name = newName;
    };
    Animal.prototype.eat = function () {
        return "".concat(this.getName, " is eating");
    };
    return Animal;
}());
exports.Animal = Animal;
