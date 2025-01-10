"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
var Animals_1 = require("./Animals");
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(dogName, dogAge, dogBreed, dogColor) {
        var _this = _super.call(this, dogName, dogAge, dogBreed) || this;
        _this.coloring = dogColor;
        return _this;
    }
    Object.defineProperty(Dog.prototype, "setColor", {
        set: function (newColor) {
            if (newColor !== '') {
                this.coloring = newColor;
                return;
            }
            throw new Error('You have not filled in the coloring field!');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "getColor", {
        get: function () {
            return this.coloring;
        },
        enumerable: false,
        configurable: true
    });
    Dog.prototype.changeName = function (newName) {
        _super.prototype.changeName.call(this, newName);
    };
    Dog.prototype.eat = function () {
        return "".concat(this.getName, " likes to eat bones and meat");
    };
    Dog.prototype.getFullInfo = function () {
        return "Dog name: ".concat(this.getName, ", his age is ").concat(this.getAge, " and his breed is ").concat(this.getBreed);
    };
    Dog.prototype.makeSound = function () {
        return 'Woof, woof';
    };
    return Dog;
}(Animals_1.Animal));
exports.Dog = Dog;
