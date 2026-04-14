"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomArrayElement = randomArrayElement;
function randomArrayElement(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    var i = Math.floor(Math.random() * arr.length);
    return arr[i];
}
