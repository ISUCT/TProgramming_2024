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
exports.Wizard = void 0;
var hero_1 = require("../hero");
var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard(heroHealth, heroStrength, heroName, heroAbilities) {
        var _this = _super.call(this, heroHealth, heroStrength, heroName, heroAbilities) || this;
        _this.className = 'Wizard';
        return _this;
    }
    return Wizard;
}(hero_1.Hero));
exports.Wizard = Wizard;
