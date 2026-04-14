"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumber = randomNumber;
function randomNumber(min, max) {
    if (min > max) {
        return -1;
    }
    if (min === max) {
        return min;
    }
    var rndNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return rndNumber;
}
