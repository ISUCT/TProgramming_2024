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
exports.Cat = void 0;
var Animals_1 = require("./Animals");
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(catName, catAge, catBreed, catMotherland) {
        var _this = _super.call(this, catName, catAge, catBreed) || this;
        _this.motherland = catMotherland;
        return _this;
    }
    Object.defineProperty(Cat.prototype, "setMotherland", {
        set: function (newMotherland) {
            if (newMotherland !== '') {
                this.motherland = newMotherland;
                return;
            }
            throw new Error('You have not filled in the motherland field!');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "getMotherland", {
        get: function () {
            return this.motherland;
        },
        enumerable: false,
        configurable: true
    });
    Cat.prototype.changeName = function (newName) {
        _super.prototype.changeName.call(this, newName);
    };
    Cat.prototype.eat = function () {
        return "".concat(this.getName, " likes to eat fish and mice");
    };
    Cat.prototype.getFullInfo = function () {
        return "Cat name: ".concat(this.getName, ", his age is ").concat(this.getAge, " and his breed is ").concat(this.getBreed);
    };
    Cat.prototype.makeSound = function () {
        return 'Meow, meow';
    };
    return Cat;
}(Animals_1.Animal));
exports.Cat = Cat;
