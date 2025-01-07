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
exports.Archer = void 0;
var Player_1 = require("./Player");
var Logger_1 = require("./Logger");
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer(name, health, strength) {
        var _this = _super.call(this, name, health, strength) || this;
        _this.fireArrowsUsed = false;
        return _this;
    }
    Archer.prototype.useAbility = function (opponent) {
        if (!this.fireArrowsUsed) {
            this.fireArrowsUsed = true;
            Logger_1.Logger.log("".concat(this.name, " \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u041E\u0433\u043D\u0435\u043D\u043D\u044B\u0435 \u0441\u0442\u0440\u0435\u043B\u044B. \u041F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A ").concat(opponent.name, " \u0431\u0443\u0434\u0435\u0442 \u0442\u0435\u0440\u044F\u0442\u044C \u043F\u043E 2 \u0435\u0434\u0438\u043D\u0438\u0446\u044B \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F \u043A\u0430\u0436\u0434\u044B\u0439 \u0445\u043E\u0434."));
        }
    };
    Archer.prototype.takeDamage = function (damage) {
        if (this.fireArrowsUsed) {
            damage += 2;
        }
        _super.prototype.takeDamage.call(this, damage);
    };
    return Archer;
}(Player_1.Player));
exports.Archer = Archer;
