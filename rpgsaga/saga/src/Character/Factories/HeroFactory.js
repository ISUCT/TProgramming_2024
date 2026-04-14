"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroFactory = void 0;
var randomArrayElement_1 = require("../Functions/randomArrayElement");
var randomNumber_1 = require("../Functions/randomNumber");
var ArcherFactory_1 = require("../Factories/ArcherFactory");
var KnightFactory_1 = require("../Factories/KnightFactory");
var WizardFactory_1 = require("../Factories/WizardFactory");
var HeroFactory = /** @class */ (function () {
    function HeroFactory() {
        this.archerFactory = new ArcherFactory_1.ArcherFactory();
        this.knightFactory = new KnightFactory_1.KnightFactory();
        this.wizardFactory = new WizardFactory_1.WizardFactory();
    }
    HeroFactory.prototype.createHero = function (heroClass, heroHealth, heroStrength, heroAbilities) {
        if (heroAbilities === void 0) { heroAbilities = null; }
        var names = [
            'Абрамс',
            'Бибоп',
            'Калико',
            'Динамо',
            'Фатом',
            'Серый Коготь',
            'Пелена',
            'Инфернус',
            'Лоза',
            'Кельвин',
            'Хлыст',
            'Мираж',
            'Парадокс',
            'Карман',
            'Заточка',
            'Виндикта',
            'Вязкус',
            'Дозорный',
            'Фантом',
            'Семь',
            'Ямато',
        ];
        switch (heroClass) {
            case 'Knight':
                return this.knightFactory.createKnight(names, heroHealth, heroStrength, heroAbilities);
            case 'Archer':
                return this.archerFactory.createArcher(names, heroHealth, heroStrength, heroAbilities);
            case 'Wizard':
                return this.wizardFactory.createWizard(names, heroHealth, heroStrength, heroAbilities);
        }
    };
    HeroFactory.prototype.createRandomHero = function () {
        var heroFactory = new HeroFactory();
        var classes = ['Knight', 'Archer', 'Wizard'];
        var heroClass = (0, randomArrayElement_1.randomArrayElement)(classes);
        var health = (0, randomNumber_1.randomNumber)(125, 150);
        var strength = (0, randomNumber_1.randomNumber)(10, 15);
        return heroFactory.createHero(heroClass, health, strength);
    };
    HeroFactory.prototype.createRandomHeroes = function (heroesCount) {
        var heroes = [];
        for (var i = 0; i < heroesCount; i++) {
            heroes.push(this.createRandomHero());
        }
        return heroes;
    };
    return HeroFactory;
}());
exports.HeroFactory = HeroFactory;
