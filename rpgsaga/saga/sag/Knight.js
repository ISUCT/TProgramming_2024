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
var Player_1 = require("./Player");
var Logger_1 = require("./Logger");
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight(name, health, strength) {
        return _super.call(this, name, health, strength) || this;
    }
    Knight.prototype.useAbility = function (opponent) {
        var damage = this.strength * 1.3;
        opponent.takeDamage(damage);
        Logger_1.Logger.log("".concat(this.name, " \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0423\u0434\u0430\u0440 \u0432\u043E\u0437\u043C\u0435\u0437\u0434\u0438\u044F \u0438 \u043D\u0430\u043D\u043E\u0441\u0438\u0442 \u0443\u0440\u043E\u043D ").concat(damage, " \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A\u0443 ").concat(opponent.name));
    };
    return Knight;
}(Player_1.Player));
exports.Knight = Knight;
