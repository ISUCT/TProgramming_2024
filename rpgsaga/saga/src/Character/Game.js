"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var HeroFactory_1 = require("./Factories/HeroFactory");
var Game = /** @class */ (function () {
    function Game(heroCount, logger) {
        this.heroFactory = new HeroFactory_1.HeroFactory();
        this._heroes = [];
        this._heroes = this.heroFactory.createRandomHeroes(heroCount);
        this.logger = logger;
    }
    Object.defineProperty(Game.prototype, "heroes", {
        get: function () {
            return this._heroes;
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var listOfHeroes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.messageLog('Игра началась!');
                        listOfHeroes = 'Список участников: \n\n';
                        listOfHeroes += this._heroes.map(function (hero) { return "(".concat(hero.getClassName, ") ").concat(hero.getName); }).join('\n\n');
                        this.logger.messageLog(listOfHeroes);
                        return [4 /*yield*/, this.tournament(this._heroes)];
                    case 1:
                        _a.sent();
                        this.logger.messageLog("\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C: (".concat(this._heroes[0].getClassName, ") ").concat(this._heroes[0].getName));
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.tournament = function (heroes) {
        return __awaiter(this, void 0, void 0, function () {
            var nextRoundHeroes, i, hero1, hero2, winner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (heroes.length === 1) {
                            return [2 /*return*/, heroes[0]];
                        }
                        nextRoundHeroes = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < heroes.length)) return [3 /*break*/, 4];
                        hero1 = heroes[i];
                        hero2 = heroes[i + 1];
                        return [4 /*yield*/, this.battle([hero1, hero2])];
                    case 2:
                        winner = _a.sent();
                        nextRoundHeroes.push(winner);
                        hero1.reset();
                        hero2.reset();
                        _a.label = 3;
                    case 3:
                        i += 2;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, this.tournament(nextRoundHeroes)];
                }
            });
        });
    };
    Game.prototype.battle = function (fighters) {
        return __awaiter(this, void 0, void 0, function () {
            var turn, attackerIndex, defenderIndex, attacker, defender;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.messageLog("(".concat(fighters[0].getName, ") vs (").concat(fighters[1].getName, ")"));
                        turn = 0;
                        _a.label = 1;
                    case 1:
                        if (!(fighters[0].getHealth > 0 && fighters[1].getHealth > 0)) return [3 /*break*/, 3];
                        attackerIndex = turn % 2;
                        defenderIndex = (turn + 1) % 2;
                        attacker = fighters[attackerIndex];
                        defender = fighters[defenderIndex];
                        if (defender.getIsAlive) {
                            if (attacker.getSkipTurns === 0) {
                                this.logger.attackLog(attacker, defender, attacker.attack(defender));
                            }
                            else {
                                attacker.attack(defender);
                                this.logger.skipTurnLog(attacker, defender);
                            }
                            if (!defender.getIsAlive) {
                                this.logger.deathLog(defender);
                                return [3 /*break*/, 3];
                            }
                        }
                        if (Math.random() < 0.4 && attacker.getIsAlive && defender.getIsAlive) {
                            attacker.choseAbility();
                            if (attacker.getCurrentAbility.usageCount > 0) {
                                attacker.useAbility(defender);
                                this.logger.abilityLog(attacker, defender);
                            }
                        }
                        return [4 /*yield*/, this.delay(2)];
                    case 2:
                        _a.sent();
                        turn++;
                        return [3 /*break*/, 1];
                    case 3:
                        this.updateHeroesArray();
                        return [2 /*return*/, fighters.find(function (hero) { return hero.getHealth > 0; })];
                }
            });
        });
    };
    Game.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    Game.prototype.updateHeroesArray = function () {
        this._heroes = this._heroes.filter(function (hero) { return hero.getIsAlive; });
    };
    return Game;
}());
exports.Game = Game;
