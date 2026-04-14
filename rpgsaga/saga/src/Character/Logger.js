"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.messageLog = function (message) {
        var timestamp = new Date().toISOString();
        var logEntry = "".concat(timestamp, ": ").concat(message, "\n");
        console.log(logEntry);
    };
    Logger.prototype.attackLog = function (attacker, defender, damage) {
        var timestamp = new Date().toISOString();
        var message = "(".concat(attacker.getClassName, ") ").concat(attacker.getName, " \u043D\u0430\u043D\u043E\u0441\u0438\u0442 \u0443\u0440\u043E\u043D ").concat(damage, " \u043D\u0430 ").concat(defender.getName, " (").concat(defender.getClassName, ")");
        var logEntry = "".concat(timestamp, ": ").concat(message, "\n");
        console.log(logEntry);
    };
    Logger.prototype.abilityLog = function (attacker, defender) {
        var _a, _b;
        var timestamp = new Date().toISOString();
        var message = '';
        message += "(".concat(attacker.getClassName, ") ").concat(attacker.getName, " \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 ").concat((_a = attacker.getCurrentAbility) === null || _a === void 0 ? void 0 : _a.name, " \u043D\u0430 ").concat(defender.getName, " (").concat(defender.getClassName, ") ");
        if ((_b = attacker.getCurrentAbility) === null || _b === void 0 ? void 0 : _b.damage) {
            message += "\u0438 \u043D\u0430\u043D\u043E\u0441\u0438\u0442 \u0443\u0440\u043E\u043D ".concat(attacker.getCurrentAbility.damage(attacker));
        }
        var logEntry = "".concat(timestamp, ": ").concat(message, "\n");
        console.log(logEntry);
    };
    Logger.prototype.skipTurnLog = function (attacker, defender) {
        var timestamp = new Date().toISOString();
        var message = "(".concat(attacker.getClassName, ") ").concat(attacker.getName, " \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0445\u043E\u0434 \u0438\u0437-\u0437\u0430 ").concat(defender.getCurrentAbility.name);
        var logEntry = "".concat(timestamp, ": ").concat(message, "\n");
        console.log(logEntry);
    };
    Logger.prototype.deathLog = function (warrior) {
        var timestamp = new Date().toISOString();
        var message = "(".concat(warrior.getClassName, ") ").concat(warrior.getName, " \u043F\u043E\u0433\u0438\u0431\u0430\u0435\u0442");
        var logEntry = "".concat(timestamp, ": ").concat(message, "\n");
        console.log(logEntry);
    };
    return Logger;
}());
exports.Logger = Logger;
