"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
var randomArrayElement_1 = require("./Functions/randomArrayElement");
var Hero = /** @class */ (function () {
    function Hero(heroHealth, heroStrength, heroName, heroAbilities) {
        this.abilityBuff = 0;
        this.isAbilityUsed = false;
        this.isAlive = true;
        this.skipingTurns = 0;
        this.maxHealth = heroHealth;
        this.health = this.maxHealth;
        this.maxStrength = heroStrength;
        this.strength = this.maxStrength;
        this.name = heroName;
        this.abilities = heroAbilities;
    }
    Object.defineProperty(Hero.prototype, "getClassName", {
        get: function () {
            return this.className;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "getIsAlive", {
        get: function () {
            return this.isAlive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "getIsAbilityUsed", {
        get: function () {
            return this.isAbilityUsed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "getHealth", {
        get: function () {
            return this.health;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "getStrength", {
        get: function () {
            return this.strength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "getMaxHealth", {
        get: function () {
            return this.maxHealth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "getMaxStrength", {
        get: function () {
            return this.maxStrength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "getSkipTurns", {
        get: function () {
            return this.skipingTurns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "getCurrentAbility", {
        get: function () {
            return this.currentAbility;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "getAbilities", {
        get: function () {
            return this.abilities;
        },
        enumerable: false,
        configurable: true
    });
    Hero.prototype.choseAbility = function () {
        this.currentAbility = (0, randomArrayElement_1.randomArrayElement)(this.abilities);
    };
    Hero.prototype.useAbility = function (opponent, abilityName) {
        var _this = this;
        if (abilityName === void 0) { abilityName = null; }
        if (this.abilities.length === 0) {
            return;
        }
        if (abilityName !== null) {
            this.abilities.forEach(function (ability) {
                if (ability.name === abilityName.toLowerCase()) {
                    _this.currentAbility = ability;
                    return;
                }
            });
        }
        if (this.currentAbility !== undefined && this.currentAbility.usageCount > 0) {
            if (this.currentAbility.effect) {
                this.currentAbility.effect(this, opponent);
            }
            this.currentAbility.usageCount--;
            this.abilities.forEach(function (ability) {
                if (ability.name === _this.currentAbility.name) {
                    ability.usageCount--;
                }
            });
            this.isAbilityUsed = true;
        }
    };
    Hero.prototype.attack = function (opponent) {
        var _this = this;
        if (this.getSkipTurns > 0) {
            this.skipingTurns--;
            return;
        }
        if (this.currentAbility) {
            var abilityIndex = this.abilities.findIndex(function (ability) { return ability.name === _this.currentAbility.name; });
            if (abilityIndex !== -1) {
                this.abilities[abilityIndex].isUsed = true;
                this.updateAbilities();
            }
            return opponent.takeDamage(this.strength, this.currentAbility);
        }
        else {
            return opponent.takeDamage(this.strength);
        }
    };
    Hero.prototype.updateAbilities = function () {
        for (var _i = 0, _a = this.abilities; _i < _a.length; _i++) {
            var ability = _a[_i];
            if (ability.isUsed) {
                if (ability.turns <= 0) {
                    if (ability.buff) {
                        this.strength -= ability.buff.strength;
                    }
                    ability.isUsed = false;
                    ability.turns = ability.maxTurns;
                }
                ability.turns--;
            }
        }
    };
    Hero.prototype.takeDamage = function (damage, ability) {
        if (ability === void 0) { ability = undefined; }
        var currentDamage = damage;
        if (ability !== undefined && ability.buff) {
            currentDamage += ability.buff.strength;
        }
        this.health -= currentDamage;
        if (this.health <= 0) {
            this.health = 0;
            this.isAlive = false;
        }
        return currentDamage;
    };
    Hero.prototype.heal = function (amount) {
        if (this.health + amount > this.maxHealth) {
            this.health = this.maxHealth;
        }
        else {
            this.health = this.health + amount;
        }
    };
    Hero.prototype.reset = function () {
        this.health = this.maxHealth;
        this.strength = this.maxStrength;
        this.isAbilityUsed = false;
        this.abilities.forEach(function (ability) {
            ability.usageCount = ability.maxAbilityUsage;
            ability.isUsed = false;
            ability.turns = ability.maxTurns;
        });
    };
    Hero.prototype.skipTurns = function (value) {
        this.skipingTurns = value;
    };
    return Hero;
}());
exports.Hero = Hero;
