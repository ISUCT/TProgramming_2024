"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardFactory = void 0;
var wizard_1 = require("../Classes/wizard");
var randomArrayElement_1 = require("../Functions/randomArrayElement");
var SkillFactory_1 = require("../Factories/SkillFactory");
var WizardFactory = /** @class */ (function () {
    function WizardFactory() {
        this.skillFactory = new SkillFactory_1.SkillFactory();
    }
    WizardFactory.prototype.createWizard = function (names, heroHealth, heroStrength, heroAbilities) {
        if (heroAbilities === void 0) { heroAbilities = null; }
        var name = (0, randomArrayElement_1.randomArrayElement)(names);
        var health = heroHealth;
        var strength = heroStrength;
        if (heroAbilities !== null) {
            return new wizard_1.Wizard(health, strength, name, heroAbilities);
        }
        else {
            var abilities = [
                this.skillFactory.createAbilityFromTemplate('заворожение'),
                this.skillFactory.createAbilityFromTemplate('ледяные стрелы'),
            ];
            return new wizard_1.Wizard(health, strength, name, abilities);
        }
    };
    return WizardFactory;
}());
exports.WizardFactory = WizardFactory;
