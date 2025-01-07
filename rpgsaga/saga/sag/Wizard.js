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
var Player_1 = require("./Player");
var Logger_1 = require("./Logger");
var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard(name, health, strength) {
        var _this = _super.call(this, name, health, strength) || this;
        _this.isCharmed = false;
        return _this;
    }
    Wizard.prototype.useAbility = function (opponent) {
        this.isCharmed = true;
        Logger_1.Logger.log("".concat(this.name, " \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0417\u0430\u0432\u043E\u0440\u043E\u0436\u0435\u043D\u0438\u0435. \u041F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A ").concat(opponent.name, " \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0445\u043E\u0434."));
    };
    Wizard.prototype.takeDamage = function (damage) {
        if (this.isCharmed) {
            Logger_1.Logger.log("".concat(this.name, " \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0445\u043E\u0434 \u0438\u0437-\u0437\u0430 \u0417\u0430\u0432\u043E\u0440\u043E\u0436\u0435\u043D\u0438\u044F."));
            this.isCharmed = false;
            return;
        }
        _super.prototype.takeDamage.call(this, damage);
    };
    return Wizard;
}(Player_1.Player));
exports.Wizard = Wizard;
