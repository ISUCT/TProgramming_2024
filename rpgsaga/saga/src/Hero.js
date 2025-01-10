"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
var Hero = /** @class */ (function () {
    function Hero(name, classType, health, strength, mana) {
        this._abilities = [];
        this._name = name;
        this._classType = classType;
        this._health = health;
        this._strength = strength;
        this._mana = mana;
        this.isAlive = true;
        this._fireImunitet = false;
    }
    Object.defineProperty(Hero.prototype, "setName", {
        // гет и сет для имени
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "setClassType", {
        //гет и сет для типа воина (его класса)
        set: function (newClassType) {
            this._classType = newClassType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "getClassType", {
        get: function () {
            return this._classType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "setHealth", {
        //гет и сет для здоровья юнита
        set: function (newHealth) {
            if (newHealth > 0) {
                this._health = newHealth;
            }
            throw new Error('It is very low value for health!');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "getHealth", {
        get: function () {
            return this._health;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "setStrength", {
        //гет и сет для силы перса
        set: function (newStrength) {
            this._strength = newStrength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "getStrength", {
        get: function () {
            return this._strength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "setMana", {
        //гет и сет для маны
        set: function (newMana) {
            if (newMana = (this._health / 2)) {
                this._mana = newMana;
                return;
            }
            throw new Error('Wrong value for mana!');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "getMana", {
        get: function () {
            return this._mana;
        },
        enumerable: false,
        configurable: true
    });
    //нанесение урона и смерть персонажа
    Hero.prototype.getDamage = function (damage) {
        this._health -= damage;
        if (this._health <= 0) {
            this.isAlive = false;
            return "[".concat(this._classType, "] ").concat(this._name, " bravely died in fight");
        }
    };
    //получаем массив способностей
    Hero.prototype.getAbilities = function () {
        return this._abilities;
    };
    //добавляем абилку в массив
    Hero.prototype.addAbility = function (ability) {
        this._abilities.push(ability);
    };
    //использование способности
    Hero.prototype.useAbility = function (enemy) {
        if (this._abilities.length === 0) {
            return null;
        }
        var randomIndex = Math.floor(Math.random() * this._abilities.length);
        var ability = this._abilities[randomIndex];
        var manaCoast = ((this._health / 2) / 2);
        if (this._mana >= manaCoast && ability.isActive) {
            this.isAbilityActive = true;
            var abilityDamage = ability.effect(enemy);
            this._mana -= manaCoast;
            return "Ability ".concat(ability.title, " used! It's ").concat(ability.abilityDamage, " damage to [").concat(enemy._classType, "] ").concat(enemy._name, ". Your remaining mana: ").concat(this._mana, " ");
        }
        else if (this._mana < manaCoast) {
            return "Not enough mana to use ".concat(ability.title, ", because you have ").concat(this._mana, " mana points");
        }
        else {
            return null;
        }
    };
    Object.defineProperty(Hero.prototype, "setFireImunitet", {
        //получение имунитета
        set: function (newFireImunitet) {
            this._fireImunitet = newFireImunitet;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "getFireImunitet", {
        get: function () {
            return this._fireImunitet;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "setFascination", {
        //функция заворожения для мага
        set: function (statusFascination) {
            this.isFascination = statusFascination;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "getFascination", {
        get: function () {
            return this.isFascination;
        },
        enumerable: false,
        configurable: true
    });
    return Hero;
}());
exports.Hero = Hero;
