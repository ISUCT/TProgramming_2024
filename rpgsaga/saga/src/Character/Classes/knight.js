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
exports.Knight = void 0;
var hero_1 = require("../hero");
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight(heroHealth, heroStrength, heroName, heroAbilities) {
        var _this = _super.call(this, heroHealth, heroStrength, heroName, heroAbilities) || this;
        _this.className = 'Knight';
        return _this;
    }
    Knight.prototype.takeDamage = function (damage, ability) {
        if (ability === void 0) { ability = undefined; }
        var currentDamage = damage;
        if (ability !== undefined && ability.name !== 'ледяные стрелы' && ability.buff) {
            currentDamage = damage + ability.buff.strength;
        }
        this.health -= currentDamage;
        if (this.health <= 0) {
            this.health = 0;
            this.isAlive = false;
        }
        return currentDamage;
    };
    return Knight;
}(hero_1.Hero));
exports.Knight = Knight;
