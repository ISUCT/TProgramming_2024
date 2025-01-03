"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kitten = void 0;
var Kitten = /** @class */ (function () {
    function Kitten(catName, catAge, catBreed) {
        this.name = catName;
        this.age = catAge;
        this.breed = catBreed;
    }
    Object.defineProperty(Kitten.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kitten.prototype, "setName", {
        set: function (valueName) {
            this.name = valueName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kitten.prototype, "getAge", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kitten.prototype, "setAge", {
        set: function (valueAge) {
            if (valueAge < 0 || valueAge > 16) {
                console.error("Cats don't live that long!");
            }
            else {
                this.age = valueAge;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kitten.prototype, "getBreed", {
        get: function () {
            return this.breed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kitten.prototype, "setBreed", {
        set: function (valueBreed) {
            this.breed = valueBreed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kitten.prototype, "getInfo", {
        get: function () {
            return "Kitten's name: ".concat(this.name, ", Kitten's age: ").concat(this.age, ", Kitten's breed: ").concat(this.breed);
        },
        enumerable: false,
        configurable: true
    });
    Kitten.prototype.changeCatName = function (newName) {
        this.name = newName;
    };
    Kitten.prototype.whereFrom = function () {
        if (this.name === 'Marsik') {
            return 'Russia';
        }
        if (this.name === 'Kompot') {
            return 'Belarus';
        }
        else {
            return 'Ooops... I dont know(';
        }
    };
    return Kitten;
}());
exports.Kitten = Kitten;
