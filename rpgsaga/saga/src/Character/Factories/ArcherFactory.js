"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcherFactory = void 0;
var archer_1 = require("../Classes/archer");
var randomArrayElement_1 = require("../Functions/randomArrayElement");
var SkillFactory_1 = require("../Factories/SkillFactory");
var ArcherFactory = /** @class */ (function () {
    function ArcherFactory() {
        this.skillFactory = new SkillFactory_1.SkillFactory();
    }
    ArcherFactory.prototype.createArcher = function (names, heroHealth, heroStrength, heroAbilities) {
        if (heroAbilities === void 0) { heroAbilities = null; }
        var name = (0, randomArrayElement_1.randomArrayElement)(names);
        var health = heroHealth;
        var strength = heroStrength;
        if (heroAbilities !== null) {
            return new archer_1.Archer(health, strength, name, heroAbilities);
        }
        else {
            var firstAbility = this.skillFactory.createAbilityFromTemplate('ледяные стрелы');
            firstAbility.usageCount = 2;
            firstAbility.maxAbilityUsage = 2;
            var abilities = [firstAbility, this.skillFactory.createAbilityFromTemplate('огненные стрелы')];
            return new archer_1.Archer(health, strength, name, abilities);
        }
    };
    return ArcherFactory;
}());
exports.ArcherFactory = ArcherFactory;
