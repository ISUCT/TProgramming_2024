"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnightFactory = void 0;
var knight_1 = require("../Classes/knight");
var randomArrayElement_1 = require("../Functions/randomArrayElement");
var SkillFactory_1 = require("../Factories/SkillFactory");
var KnightFactory = /** @class */ (function () {
    function KnightFactory() {
        this.skillFactory = new SkillFactory_1.SkillFactory();
    }
    KnightFactory.prototype.createKnight = function (names, heroHealth, heroStrength, heroAbilities) {
        if (heroAbilities === void 0) { heroAbilities = null; }
        var name = (0, randomArrayElement_1.randomArrayElement)(names);
        var health = heroHealth;
        var strength = heroStrength;
        if (heroAbilities !== null) {
            return new knight_1.Knight(health, strength, name, heroAbilities);
        }
        else {
            var abilities = [
                this.skillFactory.createAbilityFromTemplate('удар возмездия'),
                this.skillFactory.createAbilityFromTemplate('ледяные стрелы'),
            ];
            return new knight_1.Knight(health, strength, name, abilities);
        }
    };
    return KnightFactory;
}());
exports.KnightFactory = KnightFactory;
