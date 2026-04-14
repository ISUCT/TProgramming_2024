"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillFactory = void 0;
var SkillFactory = /** @class */ (function () {
    function SkillFactory() {
        this.abilitiesTemplate = [
            {
                name: 'огненные стрелы',
                isUsed: false,
                usageCount: 1,
                maxAbilityUsage: 1,
                buff: {
                    strength: 2,
                },
            },
            {
                name: 'ледяные стрелы',
                isUsed: false,
                usageCount: 1,
                maxAbilityUsage: 1,
                turns: 3,
                maxTurns: 3,
                buff: {
                    strength: 3,
                },
            },
            {
                name: 'удар возмездия',
                isUsed: false,
                usageCount: 1,
                maxAbilityUsage: 1,
                damage: function (caster) { return caster.getStrength * 1.3; },
                effect: function (caster, opponent) {
                    opponent.takeDamage(caster.getStrength * 1.3);
                },
            },
            {
                name: 'заворожение',
                isUsed: false,
                usageCount: 1,
                maxAbilityUsage: 1,
                effect: function (caster, opponent) {
                    opponent.skipTurns(1);
                },
            },
        ];
    }
    SkillFactory.prototype.createAbility = function (abilityName, abilityDamage, isUsedAbility, abilityUsageCount, abilityMaxUsage, abilityTurns, abilityMaxTurns, abilityEffect, abilityBuff) {
        if (abilityTurns === void 0) { abilityTurns = undefined; }
        if (abilityMaxTurns === void 0) { abilityMaxTurns = undefined; }
        var ability = {
            name: abilityName,
            damage: abilityDamage,
            isUsed: isUsedAbility,
            usageCount: abilityUsageCount,
            maxAbilityUsage: abilityMaxUsage,
            turns: abilityTurns,
            maxTurns: abilityMaxTurns,
            effect: abilityEffect,
            buff: abilityBuff,
        };
        return ability;
    };
    SkillFactory.prototype.createAbilityFromTemplate = function (templateName) {
        var abilityTemplate = this.abilitiesTemplate.find(function (ability) { return ability.name === templateName; });
        if (!abilityTemplate) {
            return null;
        }
        return this.createAbility(abilityTemplate.name, abilityTemplate.damage, abilityTemplate.isUsed, abilityTemplate.usageCount, abilityTemplate.maxAbilityUsage, abilityTemplate.turns, abilityTemplate.maxTurns, abilityTemplate.effect, abilityTemplate.buff);
    };
    return SkillFactory;
}());
exports.SkillFactory = SkillFactory;
